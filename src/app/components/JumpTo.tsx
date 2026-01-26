import Link from 'next/link';
import { t } from "../lib/i18n";

interface JumpToProps {
  pageLocale: string;
  sections: string[];
  onSectionClick?: (section: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const JumpTo = ({ pageLocale, sections, onSectionClick }: JumpToProps) => {

  return (
    <div className="pageNav">
      <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
      <ul>
        {Array.isArray(sections) && sections.map((section) => {
          if (!section) return null;
          const toCamelCase = (str: string) =>
            str.replace(/[-_](\w)/g, (_, c) => c ? c.toUpperCase() : "");
          const camelSection = toCamelCase(section);
          const key = `Subheadings.${camelSection}`;
          return (
            <li key={section}>
              <Link
                href={`#${section}`}
                onClick={e => {
                  const anchor = document.getElementById(section);
                  if (anchor) {
                    e.preventDefault();
                    if (onSectionClick) {
                      onSectionClick(section, e);
                      setTimeout(() => {
                        anchor.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, '', `#${section}`);
                      }, 200);
                    } else {
                      anchor.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, '', `#${section}`);
                    }
                  }
                }}
              >
                {t(key, section, pageLocale)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JumpTo;