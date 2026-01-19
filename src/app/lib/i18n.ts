import en from '../locales/en.json';
import fr from '../locales/fr.json';

export function t(
  key: string,
  fallback?: string,
  locale?: string
): string {
  const translations: Record<string, unknown> = {
    en,
    fr,
  };

  let lang = locale;
  if (!lang && typeof window !== "undefined") {
    lang = window.navigator.language?.split("-")[0];
  }
  if (!lang || !translations[lang]) lang = "en";

  const getNested = (obj: Record<string, unknown>, path: string): unknown => {
    return path.split('.').reduce<unknown>((o, p) => {
      if (o && typeof o === 'object') {
        return (o as Record<string, unknown>)[p];
      }
      return undefined;
    }, obj as Record<string, unknown>);
  };
  const value = getNested(translations[lang] as Record<string, unknown>, key);
  if (typeof value === 'string') return value;
  if (fallback) return fallback;
  const fallbackValue = getNested(translations["en"] as Record<string, unknown>, key);
  if (typeof fallbackValue === 'string') return fallbackValue;
  return key;
}