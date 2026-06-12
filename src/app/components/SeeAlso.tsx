"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { t } from "../lib/i18n";
import sitemap from "../sitemap.json";

const typedSitemap: Array<{ page: string; labelKey: string }> = sitemap;

interface SeeAlsoProps {
  pages: string[];
  pageLocale: string;
  isGlobalFallback?: boolean;
  isHomePinned?: boolean;
}

type TextSizeOption = "small" | "standard" | "large";
type TextSizeRailMode = "withJumpTo" | "withoutJumpTo" | "withoutJumpToOnly";
type SidebarPanel = "seeAlso" | "appearance";

const TEXT_SIZE_STORAGE_KEY = "idguide-text-size";
const TEXT_MODE_STORAGE_KEY = "idguide-text-mode";
const DEFAULT_RAIL_TOP_OFFSET = 185;
const RAIL_TOP_NAV_GAP = 50;
const RAIL_STACK_GAP = 16;
const PAGE_BOTTOM_BUFFER = 115;
const TEXT_MODE_PAGE_BOTTOM_BUFFER = 40;
const TEXT_MODE_RAIL_TOP_LIFT = 45;

function applyDocumentTextSize(size: TextSizeOption) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  if (size === "small") {
    root.style.fontSize = "14px";
    return;
  }

  if (size === "large") {
    root.style.fontSize = "18px";
    return;
  }

  root.style.fontSize = "16px";
}

function normalizeTextSize(value: string | null): TextSizeOption {
  if (value === "small" || value === "large" || value === "standard") {
    return value;
  }

  return "standard";
}

function applyDocumentAppearanceClasses(
  textModeEnabled: boolean
) {
  if (typeof document === "undefined") return;

  const rootClassList = document.documentElement.classList;
  rootClassList.remove("dark-mode", "high-contrast");
  rootClassList.toggle("text-mode", textModeEnabled);

  const bodyClassList = document.body.classList;
  bodyClassList.remove("dark-mode", "high-contrast");
  bodyClassList.toggle("text-mode", textModeEnabled);
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.innerWidth <= 1200;
}

export default function SeeAlso({
  pages,
  pageLocale,
  isGlobalFallback = false,
  isHomePinned = false
}: SeeAlsoProps) {
  const validPages = useMemo(
    () => pages.filter((page): page is string => Boolean(page)),
    [pages]
  );
  const hasSeeAlso = validPages.length > 0;
  const [hasJumpTo, setHasJumpTo] = useState(false);
  const [jumpToHeight, setJumpToHeight] = useState(0);
  const [seeAlsoNavHeight, setSeeAlsoNavHeight] = useState(0);
  const [isSeeAlsoExpanded, setIsSeeAlsoExpanded] = useState(false);
  const [isAppearanceExpanded, setIsAppearanceExpanded] = useState(false);
  const [isSingleExpandedPanelMode, setIsSingleExpandedPanelMode] = useState(false);
  const [textSize, setTextSize] = useState<TextSizeOption>(() => {
    if (typeof window === "undefined") {
      return "standard";
    }

    return normalizeTextSize(window.localStorage.getItem(TEXT_SIZE_STORAGE_KEY));
  });
  const [isTextModeEnabled, setIsTextModeEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(TEXT_MODE_STORAGE_KEY) === "true";
  });
  const railShiftRef = useRef(0);
  const wasSingleExpandedPanelModeRef = useRef(false);
  const isSingleExpandedPanelModeRef = useRef(false);
  const isSeeAlsoExpandedRef = useRef(isSeeAlsoExpanded);
  const isAppearanceExpandedRef = useRef(isAppearanceExpanded);
  const lastUserExpandedPanelRef = useRef<SidebarPanel | null>(null);
  const seeAlsoNavRef = useRef<HTMLDivElement | null>(null);
  const textSizeNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    isSeeAlsoExpandedRef.current = isSeeAlsoExpanded;
  }, [isSeeAlsoExpanded]);

  useEffect(() => {
    isAppearanceExpandedRef.current = isAppearanceExpanded;
  }, [isAppearanceExpanded]);

  useEffect(() => {
    isSingleExpandedPanelModeRef.current = isSingleExpandedPanelMode;
  }, [isSingleExpandedPanelMode]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isHomePinned) {
      document.documentElement.style.setProperty("--page-rail-shift", "0px");
      document.documentElement.style.setProperty("--page-rail-top", `${DEFAULT_RAIL_TOP_OFFSET}px`);
      return;
    }

    let rafId: number | null = null;

    const applyRailBottomShift = (shift: number) => {
      const nextShift = Math.ceil(shift);
      if (nextShift === railShiftRef.current) {
        return;
      }

      railShiftRef.current = nextShift;
      document.documentElement.style.setProperty("--page-rail-shift", `${nextShift}px`);
    };

    const applyRailTopOffset = (offset: number) => {
      document.documentElement.style.setProperty("--page-rail-top", `${Math.ceil(offset)}px`);
    };

    const getRailTopOffset = (baseOffset: number, shouldLiftInTextMode = true) => {
      const isTextModeActive = document.body.classList.contains("text-mode");
      const textModeLift = isTextModeActive && shouldLiftInTextMode ? TEXT_MODE_RAIL_TOP_LIFT : 0;
      return Math.max(0, baseOffset - textModeLift);
    };

    const updateRailBottomShift = () => {
      const pageEl = document.querySelector(".page") as HTMLElement | null;
      const topBarEl = document.querySelector(".top-bar") as HTMLElement | null;
      const jumpToEl = document.querySelector(".jumpToNav") as HTMLElement | null;
      if (!pageEl) {
        applyRailTopOffset(getRailTopOffset(DEFAULT_RAIL_TOP_OFFSET));
        applyRailBottomShift(0);
        return;
      }

      if (!textSizeNavRef.current || window.innerWidth <= 1200) {
        applyRailTopOffset(getRailTopOffset(DEFAULT_RAIL_TOP_OFFSET));
        applyRailBottomShift(0);
        return;
      }

      const pageTop = pageEl.getBoundingClientRect().top;
      const navBottom = topBarEl?.getBoundingClientRect().bottom ?? 80;
      const isStuckToTopNav = pageTop < 0;
      const railTopOffset = getRailTopOffset(
        isStuckToTopNav
          ? navBottom + RAIL_TOP_NAV_GAP
          : DEFAULT_RAIL_TOP_OFFSET,
        !isStuckToTopNav
      );
      applyRailTopOffset(railTopOffset);

      const jumpHeight = jumpToEl?.offsetHeight ?? 0;
      const seeAlsoHeight = seeAlsoNavRef.current?.offsetHeight ?? 0;
      const appearanceHeight = textSizeNavRef.current.offsetHeight;
      const isTextModeActive = document.body.classList.contains("text-mode");
      const pageBottomBuffer = isTextModeActive ? TEXT_MODE_PAGE_BOTTOM_BUFFER : PAGE_BOTTOM_BUFFER;
      const pageBottom = pageEl.getBoundingClientRect().bottom - pageBottomBuffer;

      let railBottom = railTopOffset;

      if (jumpHeight > 0) {
        railBottom += jumpHeight + RAIL_STACK_GAP;
      }

      if (seeAlsoHeight > 0) {
        railBottom += seeAlsoHeight + RAIL_STACK_GAP;
      }

      railBottom += appearanceHeight;

      const shift = Math.max(0, railBottom - pageBottom);

      const shouldUseSingleExpandedPanelMode = hasSeeAlso && shift > 0;
      const shouldKeepSingleExpandedPanelMode = shouldUseSingleExpandedPanelMode;
      const wasSingleExpandedPanelMode = wasSingleExpandedPanelModeRef.current;
      wasSingleExpandedPanelModeRef.current = shouldKeepSingleExpandedPanelMode;
      isSingleExpandedPanelModeRef.current = shouldKeepSingleExpandedPanelMode;

      setIsSingleExpandedPanelMode((prev) => {
        if (prev === shouldKeepSingleExpandedPanelMode) {
          return prev;
        }

        return shouldKeepSingleExpandedPanelMode;
      });

      if (
        !wasSingleExpandedPanelMode
        && shouldKeepSingleExpandedPanelMode
        && hasSeeAlso
        && isSeeAlsoExpandedRef.current
        && isAppearanceExpandedRef.current
      ) {
        // On short pages, keep whichever panel the user most recently opened.
        if (lastUserExpandedPanelRef.current === "appearance") {
          isSeeAlsoExpandedRef.current = false;
          setIsSeeAlsoExpanded(false);
        } else {
          // Default preference is See also when there is no user-driven preference yet.
          isAppearanceExpandedRef.current = false;
          setIsAppearanceExpanded(false);
        }
      }

      applyRailBottomShift(shift);
    };

    const requestRailBottomShift = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateRailBottomShift();
      });
    };

    const syncRailState = () => {
      const jumpToEl = document.querySelector(".jumpToNav") as HTMLElement | null;
      if (jumpToEl) {
        setHasJumpTo(true);
        setJumpToHeight(jumpToEl.offsetHeight);
      } else {
        setHasJumpTo(false);
        setJumpToHeight(0);
      }

      if (seeAlsoNavRef.current) {
        setSeeAlsoNavHeight(seeAlsoNavRef.current.offsetHeight);
      } else {
        setSeeAlsoNavHeight(0);
      }

      updateRailBottomShift();

    };

    const observers: ResizeObserver[] = [];
    const jumpToEl = document.querySelector(".jumpToNav") as HTMLElement | null;

    if (typeof ResizeObserver !== "undefined") {
      if (jumpToEl) {
        const jumpToObserver = new ResizeObserver(syncRailState);
        jumpToObserver.observe(jumpToEl);
        observers.push(jumpToObserver);
      }

      if (seeAlsoNavRef.current) {
        const seeAlsoObserver = new ResizeObserver(syncRailState);
        seeAlsoObserver.observe(seeAlsoNavRef.current);
        observers.push(seeAlsoObserver);
      }

      if (textSizeNavRef.current) {
        const textSizeObserver = new ResizeObserver(syncRailState);
        textSizeObserver.observe(textSizeNavRef.current);
        observers.push(textSizeObserver);
      }
    }

    syncRailState();
    updateRailBottomShift();
    window.addEventListener("scroll", requestRailBottomShift, { passive: true });
    window.addEventListener("resize", syncRailState);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      railShiftRef.current = 0;
      wasSingleExpandedPanelModeRef.current = false;
      isSingleExpandedPanelModeRef.current = false;
      lastUserExpandedPanelRef.current = null;
      document.documentElement.style.setProperty("--page-rail-shift", "0px");
      document.documentElement.style.setProperty("--page-rail-top", `${DEFAULT_RAIL_TOP_OFFSET}px`);
      window.removeEventListener("resize", syncRailState);
      window.removeEventListener("scroll", requestRailBottomShift);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [
    hasSeeAlso,
    isTextModeEnabled,
    isHomePinned
  ]);

  useLayoutEffect(() => {
    applyDocumentTextSize(textSize);
  }, [textSize]);

  useLayoutEffect(() => {
    applyDocumentAppearanceClasses(isTextModeEnabled);
  }, [isTextModeEnabled]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isHomePinned || !isAppearanceExpanded) return;

    const onPointerOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (textSizeNavRef.current?.contains(target)) return;

      isAppearanceExpandedRef.current = false;
      setIsAppearanceExpanded(false);
    };

    window.addEventListener("mousedown", onPointerOutside);
    window.addEventListener("touchstart", onPointerOutside, { passive: true });

    return () => {
      window.removeEventListener("mousedown", onPointerOutside);
      window.removeEventListener("touchstart", onPointerOutside);
    };
  }, [isHomePinned, isAppearanceExpanded]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onMobilePanelOpened = (event: Event) => {
      if (window.innerWidth > 1200) return;

      const customEvent = event as CustomEvent<{ panel?: string }>;
      const panel = customEvent.detail?.panel;

      if (panel !== "seeAlso" && isSeeAlsoExpandedRef.current) {
        isSeeAlsoExpandedRef.current = false;
        setIsSeeAlsoExpanded(false);
      }

      if (panel !== "appearance" && isAppearanceExpandedRef.current) {
        isAppearanceExpandedRef.current = false;
        setIsAppearanceExpanded(false);
      }
    };

    window.addEventListener("idguide:mobile-options-panel-opened", onMobilePanelOpened);

    return () => {
      window.removeEventListener("idguide:mobile-options-panel-opened", onMobilePanelOpened);
    };
  }, []);

  const onTextSizeChange = (size: TextSizeOption) => {
    setTextSize(size);
    applyDocumentTextSize(size);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(TEXT_SIZE_STORAGE_KEY, size);
    }
  };

  const onToggleSeeAlsoExpanded = () => {
    const next = !isSeeAlsoExpandedRef.current;

    if (next && isMobileViewport()) {
      window.dispatchEvent(new CustomEvent("idguide:mobile-options-panel-opened", { detail: { panel: "seeAlso" } }));
    }

    isSeeAlsoExpandedRef.current = next;
    setIsSeeAlsoExpanded(next);

    if (next) {
      lastUserExpandedPanelRef.current = "seeAlso";
    }

    if (isSingleExpandedPanelModeRef.current && next && isAppearanceExpandedRef.current) {
      isAppearanceExpandedRef.current = false;
      setIsAppearanceExpanded(false);
    }
  };

  const onToggleAppearanceExpanded = () => {
    const next = !isAppearanceExpandedRef.current;

    if (next && isMobileViewport()) {
      window.dispatchEvent(new CustomEvent("idguide:mobile-options-panel-opened", { detail: { panel: "appearance" } }));
    }

    isAppearanceExpandedRef.current = next;
    setIsAppearanceExpanded(next);

    if (next) {
      lastUserExpandedPanelRef.current = "appearance";
    }

    if (isSingleExpandedPanelModeRef.current && next && isSeeAlsoExpandedRef.current) {
      isSeeAlsoExpandedRef.current = false;
      setIsSeeAlsoExpanded(false);
    }
  };

  const onToggleTextMode = () => {
    setIsTextModeEnabled((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(TEXT_MODE_STORAGE_KEY, String(next));
      }
      return next;
    });
  };

  const textSizeRailMode: TextSizeRailMode = hasJumpTo
    ? "withJumpTo"
    : hasSeeAlso
      ? "withoutJumpTo"
      : "withoutJumpToOnly";

  const textSizeClassName = `pageNav textSizeNav ${textSizeRailMode}${isHomePinned ? " homeAppearanceNav" : ""}${isAppearanceExpanded ? " isExpanded" : ""}`;
  const seeAlsoClassName = `pageNav seeAlsoNav ${hasJumpTo ? "withJumpTo" : "withoutJumpTo"}`;

  const seeAlsoStyle = useMemo(
    () => ({ "--jump-to-offset": `${Math.ceil(jumpToHeight + 16)}px` } as React.CSSProperties),
    [jumpToHeight]
  );

  const textSizeStyle = useMemo(
    () => ({
      "--jump-and-see-also-offset": `${Math.ceil(jumpToHeight + seeAlsoNavHeight + 32)}px`,
      "--see-also-offset": `${Math.ceil(seeAlsoNavHeight + 16)}px`
    } as React.CSSProperties),
    [jumpToHeight, seeAlsoNavHeight]
  );

  return (
    <>
      {hasSeeAlso && (
        <div
          ref={seeAlsoNavRef}
          className={seeAlsoClassName}
          style={seeAlsoStyle}
        >
          <button
            type="button"
            className="pageNavToggle"
            aria-expanded={isSeeAlsoExpanded}
            onClick={onToggleSeeAlsoExpanded}
          >
            <span>{t("Site.seeAlso", "See also", pageLocale)}:</span>
            <Image
              src={isSeeAlsoExpanded ? "/icon/collapse.svg" : "/icon/expand.svg"}
              alt=""
              aria-hidden="true"
              className="pageNavToggleIcon"
              width={20}
              height={20}
            />
          </button>
          {isSeeAlsoExpanded && (
            <ul>
              {validPages.map((page) => {
                const entry = Array.isArray(typedSitemap)
                  ? typedSitemap.find((item) => item.page === page)
                  : undefined;
                const labelKey = entry?.labelKey || page;
                return (
                  <li key={page}>
                    <Link href={`/${page}`}>
                      {t(labelKey, labelKey, pageLocale)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

      <div
        ref={textSizeNavRef}
        className={textSizeClassName}
        style={textSizeStyle}
        data-global-appearance={isGlobalFallback ? "true" : undefined}
        aria-label={t("Site.textSize", "Appearance", pageLocale)}
      >
        <button
          type="button"
          className="pageNavToggle"
          aria-expanded={isAppearanceExpanded}
          aria-label={t("Site.textSize", "Appearance", pageLocale)}
          onClick={onToggleAppearanceExpanded}
        >
          {isHomePinned ? (
            <Image
              src="/icon/options.svg"
              alt=""
              aria-hidden="true"
              className="pageNavToggleIcon homeAppearanceOptionsIcon"
              width={28}
              height={28}
            />
          ) : (
            <>
              <span>{t("Site.textSize", "Appearance", pageLocale)}:</span>
              <Image
                src={isAppearanceExpanded ? "/icon/collapse.svg" : "/icon/expand.svg"}
                alt=""
                aria-hidden="true"
                className="pageNavToggleIcon"
                width={20}
                height={20}
              />
            </>
          )}
        </button>
        {isAppearanceExpanded && (
          <div className="textSizeOptions">
            <label>
              <input
                type="checkbox"
                checked={textSize === "small"}
                onChange={() => onTextSizeChange("small")}
              />
              {t("Site.textSizeSmall", "Small text", pageLocale)}
            </label>
            <label>
              <input
                type="checkbox"
                checked={textSize === "standard"}
                onChange={() => onTextSizeChange("standard")}
              />
              {t("Site.textSizeStandard", "Standard text", pageLocale)}
            </label>
            <label>
              <input
                type="checkbox"
                checked={textSize === "large"}
                onChange={() => onTextSizeChange("large")}
              />
              {t("Site.textSizeLarge", "Large text", pageLocale)}
            </label>
            <hr />
            <label>
              <input
                type="checkbox"
                checked={isTextModeEnabled}
                onChange={onToggleTextMode}
              />
              {t("Site.textMode", "Plain text mode", pageLocale)}
            </label>
          </div>
        )}
      </div>
    </>
  );
}