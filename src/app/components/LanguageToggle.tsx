"use client";

export function LanguageToggle({ locale }: { locale: string }) {
  const handleLanguageClick = (lang: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", lang);
    }
  };

  let toEnglish = "/";
  let toFrench = "/";

  if (typeof window !== "undefined") {
    const { protocol, hostname, port, pathname, search, hash } = window.location;
    let baseHost = hostname;

    if (hostname.startsWith("fr.")) {
      baseHost = hostname.replace(/^fr\./, "");
    }

    const portPart = port ? `:${port}` : "";

    toEnglish = `${protocol}//${baseHost}${portPart}${pathname}${search}${hash}`;
    toFrench = `${protocol}//fr.${baseHost}${portPart}${pathname}${search}${hash}`;
  }

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