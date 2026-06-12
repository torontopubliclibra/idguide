"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Nav from "./nav";
import { t } from "../lib/i18n";
import { ReturnToEnglish } from './ReturnToEnglish';

export default function TopBar({ locale }: { locale: string }) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        function handleCloseMobileNav() {
            setIsMobileNavOpen(false);
        }

        window.addEventListener('idguide:close-mobile-nav', handleCloseMobileNav);

        return () => {
            window.removeEventListener('idguide:close-mobile-nav', handleCloseMobileNav);
        };
    }, []);

    useEffect(() => {
        setIsMobileNavOpen((prev) => (prev ? false : prev));
    }, [pathname, searchParams]);

    useEffect(() => {
        if (!isMobileNavOpen) {
            return;
        }

        const onResize = () => {
            if (window.innerWidth > 1200) {
                setIsMobileNavOpen(false);
            }
        };

        const onHashChange = () => {
            setIsMobileNavOpen(false);
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileNavOpen(false);
            }
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('hashchange', onHashChange);
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('hashchange', onHashChange);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isMobileNavOpen]);

    function toggleMobileNav() {
        setIsMobileNavOpen((prev) => {
            const next = !prev;
            if (next) {
                window.dispatchEvent(new Event('idguide:close-mobile-options'));
            }
            return next;
        });
    }

    function closeMobileNav() {
        setIsMobileNavOpen(false);
    }

    return (
        <>
            <div className="top-bar">
                <Link href="/" onClick={closeMobileNav}>
                    <h1>
                        {t("Site.name", "I.D. Guide", locale)}
                    </h1>
                </Link>
                <Nav mobileOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} locale={locale} />
                <button
                    onClick={toggleMobileNav}
                    className={isMobileNavOpen ? "mobileMenuToggle isOpen" : "mobileMenuToggle"}
                    aria-label={isMobileNavOpen ? t("TopBar.closeMenu", "Close menu", locale) : t("TopBar.openMenu", "Open menu", locale)}
                >
                    <span className="mobileMenuToggleIconWrap">
                        <Image
                            src={isMobileNavOpen ? '/icon/menu-open.svg' : '/icon/menu.svg'}
                            alt={t("TopBar.menuIconAlt", "Menu icon", locale)}
                            width={40}
                            height={40}
                            className="mobileMenuToggleIcon"
                        />
                    </span>
                </button>
            </div>
            {isMobileNavOpen && (
                <button
                    type="button"
                    className="mobileMenuBackdrop"
                    aria-label={t("TopBar.closeMenu", "Close menu", locale)}
                    onClick={closeMobileNav}
                />
            )}
            {locale === "fr" && (
                <div className="fr-disclaimer-bar">
                    La traduction française est actuellement une fonctionnalité bêta. Certaines sections du site peuvent être incomplètes ou mal traduites. <ReturnToEnglish />.
                </div>
            )}
        </>
    );
}