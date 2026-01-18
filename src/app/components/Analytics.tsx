"use client";
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-Y8RN4Q791P";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pathname + (searchParams ? `?${searchParams}` : ""),
    });
  }, [pathname, searchParams]);

  return null;
}
