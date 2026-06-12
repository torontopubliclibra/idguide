"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { t } from "../lib/i18n";

interface MobileOptionsToggleProps {
  locale: string;
}

export default function MobileOptionsToggle({ locale }: MobileOptionsToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    document.body.classList.toggle("mobile-options-open", isOpen);

    if (isOpen) {
      window.dispatchEvent(new Event("idguide:close-mobile-nav"));
    }

    return () => {
      document.body.classList.remove("mobile-options-open");
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen((prev) => (prev ? false : prev));
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onResize = () => {
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    };

    const onCloseMobileOptions = () => {
      setIsOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const onHashChange = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("idguide:close-mobile-options", onCloseMobileOptions);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("idguide:close-mobile-options", onCloseMobileOptions);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={isOpen ? "mobileOptionsToggle isOpen" : "mobileOptionsToggle"}
        aria-expanded={isOpen}
        aria-label={isOpen ? t("Site.closeOptions", "Close options", locale) : t("Site.openOptions", "Open options", locale)}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src="/icon/options.svg"
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
        />
      </button>
      {isOpen && (
        <button
          type="button"
          className="mobileOptionsBackdrop"
          aria-label={t("Site.closeOptions", "Close options", locale)}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}