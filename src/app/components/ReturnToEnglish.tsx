"use client";

export function ReturnToEnglish() {
  const getEnglishUrl = () => {
    if (typeof window !== "undefined") {
      const { protocol, hostname, port, pathname, search, hash } = window.location;
      const baseHost = hostname.replace(/^(fr\.)+/, "");
      const portPart = port ? `:${port}` : "";
      return `${protocol}//${baseHost}${portPart}${pathname}${search}${hash}`;
    }
    return "/";
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", "en");
      const url = getEnglishUrl();
      window.location.assign(url);
    }
  };

  return (
    <a href={getEnglishUrl()} onClick={handleClick}>
      Cliquez ici pour revenir à la version anglaise
    </a>
  );
}