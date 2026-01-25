// Script to generate index.json summaries for all pages in the app
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../');
const OUTPUT_FILE = path.join(APP_DIR, '..', 'public', 'search', 'index.json');

// Recursively find all page.tsx files
function findPages(dir: string, baseRoute = ''): Array<{ route: string, file: string }> {
  let results: Array<{ route: string, file: string }> = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subRoute = baseRoute + '/' + entry.name;
      results = results.concat(findPages(fullPath, subRoute));
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      results.push({ route: baseRoute || '/', file: fullPath });
    }
  }
  return results;
}

// Load English locale for translation replacement
const enLocale = JSON.parse(fs.readFileSync(path.join(__dirname, '../locales/en.json'), 'utf-8'));

// Helper to resolve translation keys like Site.name or AboutPage.about-1
function resolveLocaleKey(key: string): string {
  const parts = key.split('.');
  let obj: any = enLocale;
  for (const part of parts) {
    if (obj && typeof obj === 'object' && part in obj) {
      obj = obj[part];
    } else {
      return key; // fallback to key if not found
    }
  }
  return typeof obj === 'string' ? obj : key;
}

// Replace {t("key", "fallback", ...)} with translation from en.json or fallback
function replaceTranslationTokens(text: string): string {
  return text.replace(/\{t\(["']([\w.\-]+)["'],\s*"([^"]*)"[^)]*\)\}/g, (_m, key, fallback) => {
    const val = resolveLocaleKey(key);
    return val !== key ? val : fallback;
  });
}

// Extract metadata from the page file: title, summary, keywords, images
function extractPageMetadata(filePath: string): { title: string, summary: string, keywords: string[], images: string[] } {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Title: use the en locale content of the first <h2> in the page, resolving translation tokens if present
  let title = '';
  const h2Match = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  if (h2Match) {
    let h2Text = h2Match[1].replace(/<[^>]+>/g, '').trim();
    // If h2Text contains a translation token, resolve it
    if (/\{t\(/.test(h2Text)) {
      h2Text = replaceTranslationTokens(h2Text);
    }
    title = h2Text;
  } else {
    // fallback to previous logic
    const metaMatch = content.match(/metadata\s*=\s*{[^}]*title:\s*['"]([^'"]+)['"]/);
    if (metaMatch) title = metaMatch[1];
    else {
      const titleMatch = content.match(/<title>([^<]+)<\/title>/);
      if (titleMatch) title = titleMatch[1];
      else title = path.basename(path.dirname(filePath));
    }
  }


  // Summary: first <p> after the first <h3>, or first string in a description/summary variable
  let summary = '';
  // Find the first <h3>
  const h3Index = content.search(/<h3[ >]/i);
  if (h3Index !== -1) {
    // Search for the first <p> after the first <h3>
    const afterH3 = content.slice(h3Index);
    const pMatch = afterH3.match(/<p>([\s\S]*?)<\/p>/i);
    if (pMatch) {
      summary = pMatch[1].replace(/<[^>]+>/g, '').trim();
    }
  }
  // Fallback: first <p> anywhere
  if (!summary) {
    const pMatch = content.match(/<p>([\s\S]*?)<\/p>/i);
    if (pMatch) summary = pMatch[1].replace(/<[^>]+>/g, '').trim();
  }
  // Fallback: description string
  if (!summary) {
    const descMatch = content.match(/description\s*[:=]\s*['"]([\s\S]*?)['"]/i);
    if (descMatch) summary = descMatch[1].trim();
  }
  // Avoid summaries that look like translation tokens or jump navs
  if (/\{t\(["']Site\.jumpTo/.test(summary) || /jump to/i.test(summary)) {
    summary = '';
  }
  // Replace translation tokens in summary with values from en.json
  if (summary && /\{t\(/.test(summary)) {
    summary = replaceTranslationTokens(summary);
  }
  // Truncate summary to first 300 applicable characters
  if (summary && summary.length > 300) {
    summary = summary.slice(0, 300).trim() + '...';
  }

  // Keywords: from metadata, or guess from file content (find keywords: [...] or keywords: '...')
  let keywords: string[] = [];
  const kwArrayMatch = content.match(/keywords\s*[:=]\s*\[([^\]]+)\]/i);
  if (kwArrayMatch) {
    keywords = kwArrayMatch[1].split(',').map((s: string) => s.replace(/['"\s]/g, '').trim()).filter(Boolean);
  } else {
    const kwStringMatch = content.match(/keywords\s*[:=]\s*['"]([^'\"]+)['"]/i);
    if (kwStringMatch) {
      keywords = kwStringMatch[1].split(/,|;/).map((s: string) => s.trim()).filter(Boolean);
    }
  }
  // Always add regions and application names from summary/title
  const regionList = [
    'Ontario', 'Manitoba', 'Alberta', 'Canada', 'Quebec', 'British Columbia', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland', 'Prince Edward Island', 'Yukon', 'Nunavut', 'Northwest Territories'
  ];
  const appNameRegex = /([A-Z][A-Za-z\s]+Application(?: for| to)?(?: [A-Za-z]+)* \([A-Z0-9\-]+\)|[A-Z][A-Za-z\s]+application to change an adult's name|Application for Change of Sex Designation on a Birth Registration of an Adult \([0-9A-Za-z\-]+\)|PR Card Application \([A-Z0-9\-]+\))/g;
  const addKeywords = (text: string) => {
    if (!text) return;
    // Regions
    for (const region of regionList) {
      if (text.includes(region) && !keywords.includes(region)) {
        keywords.push(region);
      }
    }
    // Application names
    const appMatches = text.match(appNameRegex);
    if (appMatches) {
      for (const app of appMatches) {
        if (!keywords.includes(app)) {
          keywords.push(app);
        }
      }
    }
  };
  addKeywords(title);
  addKeywords(summary);
  // If still empty, try to guess from title/summary
  if (keywords.length === 0 && title) {
    keywords = title.split(/\s+/).filter(w => w.length > 3);
  }

  // Images: look for <Image src="..." or <img src="..."
  const images: string[] = [];
  const imageRegex = /<Image[^>]*src=\{?['"]([^'"}]+)['"]?[^>]*>/g;
  const imgRegex = /<img[^>]*src=\{?['"]([^'"}]+)['"]?[^>]*>/g;
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    images.push(match[1]);
  }
  while ((match = imgRegex.exec(content)) !== null) {
    images.push(match[1]);
  }

  return { title, summary, keywords, images };
}


function main() {
  const pages = findPages(APP_DIR);
  const summaries = pages.map(({ route, file }) => {
    const meta = extractPageMetadata(file);
    return {
      route,
      title: meta.title,
      summary: meta.summary,
      keywords: meta.keywords,
      images: meta.images
    };
  });
  // Write to index.json
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(summaries, null, 2), 'utf-8');
  console.log(`Wrote ${summaries.length} entries to ${OUTPUT_FILE}`);
}

if (require.main === module) {
  main();
}
