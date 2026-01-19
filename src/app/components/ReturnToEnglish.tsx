"use client";

import { useEffect, useState } from "react";

export function ReturnToEnglish() {
  const [toEnglish, setToEnglish] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { protocol, hostname, port, pathname, search, hash } = window.location;
      const baseHost = hostname.replace(/^(fr\.)+/, "");
      const portPart = port ? `:${port}` : "";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToEnglish(`${protocol}//${baseHost}${portPart}${pathname}${search}${hash}`);
    }
  }, []);

  return (
    <a href={toEnglish}>
      Retour à la version anglaise
    </a>
  );
}