"use client";

export function LanguageToggle({ locale }: { locale: string }) {
  const getRedirectUrl = (lang: string) => {
    if (typeof window !== "undefined") {
      const { protocol, hostname, port, pathname, search, hash } = window.location;
      const baseHost = hostname.replace(/^(fr\.)+/, "");
      const portPart = port ? `:${port}` : "";
      if (lang === "en") {
        return `${protocol}//${baseHost}${portPart}${pathname}${search}${hash}`;
      } else {
        return `${protocol}//fr.${baseHost}${portPart}${pathname}${search}${hash}`;
      }
    }
    return "/";
  };

  const handleLanguageClick = (lang: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", lang);
      const url = getRedirectUrl(lang);
      window.location.assign(url);
    }
  };

  return (
    <span>
      <a
        href={getRedirectUrl("en")}
        style={{ textDecoration: locale === "en" ? "underline" : undefined }}
        onClick={e => handleLanguageClick("en", e)}
      >
        EN
      </a>
      {" / "}
      <a
        href={getRedirectUrl("fr")}
        style={{ textDecoration: locale === "fr" ? "underline" : undefined }}
        onClick={e => handleLanguageClick("fr", e)}
      >
        FR
      </a>
    </span>
  );
}