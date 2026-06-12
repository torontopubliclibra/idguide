"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SeeAlso from "./SeeAlso";

interface AppearanceFallbackProps {
  pageLocale: string;
}

export default function AppearanceFallback({ pageLocale }: AppearanceFallbackProps) {
  const [showFallback, setShowFallback] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateFallbackVisibility = () => {
      const localAppearanceNav = document.querySelector(
        '.pageNav.textSizeNav:not([data-global-appearance="true"])'
      );
      const isMobile = window.innerWidth <= 1200;

      if (pathname === "/") {
        setShowFallback(isMobile);
        return;
      }

      setShowFallback(!localAppearanceNav);
    };

    updateFallbackVisibility();

    const observer = new MutationObserver(updateFallbackVisibility);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("resize", updateFallbackVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateFallbackVisibility);
    };
  }, [pathname]);

  if (!showFallback) {
    return null;
  }

  return <SeeAlso pages={[]} pageLocale={pageLocale} isGlobalFallback={true} />;
}
