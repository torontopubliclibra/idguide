"use client";

import { useEffect, useState } from "react";

export function LanguageToggle({ locale }: { locale: string }) {
  const [toEnglish, setToEnglish] = useState("/");
  const [toFrench, setToFrench] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { protocol, hostname, port, pathname, search, hash } = window.location;
      const baseHost = hostname.replace(/^(fr\.)+/, "");
      const portPart = port ? `:${port}` : "";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToEnglish(`${protocol}//${baseHost}${portPart}${pathname}${search}${hash}`);
      setToFrench(`${protocol}//fr.${baseHost}${portPart}${pathname}${search}${hash}`);
    }
  }, []);

  const handleLanguageClick = (lang: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", lang);
    }
  };

  return (
    <span>
      <a
        href={toEnglish}
        style={{ textDecoration: locale === "en" ? "underline" : undefined }}
        onClick={() => handleLanguageClick("en")}
      >
        EN
      </a>
      {" / "}
      <a
        href={toFrench}
        style={{ textDecoration: locale === "fr" ? "underline" : undefined }}
        onClick={() => handleLanguageClick("fr")}
      >
        FR
      </a>
    </span>
  );
}