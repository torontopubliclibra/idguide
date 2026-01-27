import { useMemo } from "react";

export function usePageLocale(): "en" | "fr" {
  return useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split(".")[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);
}