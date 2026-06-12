"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { t } from "../lib/i18n";

interface JumpToProps {
  pageLocale: string;
  sections: string[];
  onSectionClick?: (section: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const JumpTo = ({ pageLocale, sections, onSectionClick }: JumpToProps) => {
  const validSections = useMemo(
    () => sections.filter((section): section is string => Boolean(section)),
    [sections]
  );

  const [activeSection, setActiveSection] = useState<string>(validSections[0] || "");
  const [isExpanded, setIsExpanded] = useState(false);
  const activeSectionRef = useRef<string>(validSections[0] || "");
  const lockedSectionRef = useRef<string | null>(null);
  const lockExpiresAtRef = useRef<number>(0);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const onToggleExpanded = () => {
    setIsExpanded((prev) => {
      const next = !prev;

      if (next && typeof window !== "undefined" && window.innerWidth <= 1200) {
        window.dispatchEvent(new CustomEvent("idguide:mobile-options-panel-opened", { detail: { panel: "jumpTo" } }));
      }

      return next;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onMobilePanelOpened = (event: Event) => {
      const customEvent = event as CustomEvent<{ panel?: string }>;
      if (customEvent.detail?.panel === "jumpTo") return;
      if (window.innerWidth > 1200) return;

      setIsExpanded(false);
    };

    window.addEventListener("idguide:mobile-options-panel-opened", onMobilePanelOpened);

    return () => {
      window.removeEventListener("idguide:mobile-options-panel-opened", onMobilePanelOpened);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ACTIVATION_OFFSET = 180;
    const SWITCH_BUFFER = 28;
    const TARGET_REACHED_BUFFER = 24;
    let rafId: number | null = null;

    const isLockedSectionReached = (section: string) => {
      const el = document.getElementById(section);
      if (!el) return false;

      const targetTop = ACTIVATION_OFFSET;
      return Math.abs(el.getBoundingClientRect().top - targetTop) <= TARGET_REACHED_BUFFER;
    };

    const getCurrentSection = () => {
      if (!validSections.length) return "";

      const offsetY = window.scrollY + ACTIVATION_OFFSET;
      let candidate = validSections[0];

      for (const section of validSections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= offsetY) {
          candidate = section;
        }
      }

      const current = activeSectionRef.current;
      if (!current || current === candidate) {
        return candidate;
      }

      const currentEl = document.getElementById(current);
      const candidateEl = document.getElementById(candidate);

      if (!currentEl || !candidateEl) {
        return candidate;
      }

      const currentIndex = validSections.indexOf(current);
      const candidateIndex = validSections.indexOf(candidate);

      // Add a small hysteresis buffer around boundaries to avoid rapid toggling.
      if (candidateIndex > currentIndex && offsetY < candidateEl.offsetTop + SWITCH_BUFFER) {
        return current;
      }

      if (candidateIndex < currentIndex && offsetY > currentEl.offsetTop - SWITCH_BUFFER) {
        return current;
      }

      return candidate;
    };

    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && validSections.includes(hash)) {
        activeSectionRef.current = hash;
        setActiveSection(hash);
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;

        const lockedSection = lockedSectionRef.current;
        if (lockedSection) {
          const now = Date.now();
          const lockExpired = now >= lockExpiresAtRef.current;
          const reached = isLockedSectionReached(lockedSection);

          if (!lockExpired || !reached) {
            if (activeSectionRef.current !== lockedSection) {
              activeSectionRef.current = lockedSection;
              setActiveSection(lockedSection);
            }

            // Keep the clicked target active while smooth scrolling passes other headings.
            if (!lockExpired || reached) {
              if (reached || !lockExpired) {
                if (reached) {
                  lockedSectionRef.current = null;
                  lockExpiresAtRef.current = 0;
                }
                return;
              }
            }
          }

          lockedSectionRef.current = null;
          lockExpiresAtRef.current = 0;
        }

        const next = getCurrentSection();
        if (next && next !== activeSectionRef.current) {
          activeSectionRef.current = next;
          setActiveSection(next);
        }
      });
    };

    setFromHash();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", setFromHash);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", setFromHash);
    };
  }, [validSections]);

  return (
    <div className="pageNav jumpToNav">
      <button
        type="button"
        className="pageNavToggle"
        aria-expanded={isExpanded}
        onClick={onToggleExpanded}
      >
        <span>{t("Site.jumpTo", "Jump to", pageLocale)}:</span>
        <Image
          src={isExpanded ? "/icon/collapse.svg" : "/icon/expand.svg"}
          alt=""
          aria-hidden="true"
          className="pageNavToggleIcon"
          width={20}
          height={20}
        />
      </button>
      {isExpanded && (
        <ul>
          {validSections.map((section) => {
            const toCamelCase = (str: string) =>
              str.replace(/[-_](\w)/g, (_, c) => c ? c.toUpperCase() : "");
            const camelSection = toCamelCase(section);
            const key = `Subheadings.${camelSection}`;
            return (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  aria-current={activeSection === section ? "true" : undefined}
                  className={activeSection === section ? "isActive" : undefined}
                  onClick={e => {
                    const anchor = document.getElementById(section);
                    if (anchor) {
                      e.preventDefault();
                      lockedSectionRef.current = section;
                      lockExpiresAtRef.current = Date.now() + 2200;
                      activeSectionRef.current = section;
                      setActiveSection(section);
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
      )}
    </div>
  );
};

export default JumpTo;