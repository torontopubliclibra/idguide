"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import Nav from "./nav";
import { t } from "../lib/i18n";
import { ReturnToEnglish } from './ReturnToEnglish';

export default function TopBar({ locale }: { locale: string }) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const topBarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!isMobileNavOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (topBarRef.current && !topBarRef.current.contains(event.target as Node)) {
                setIsMobileNavOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileNavOpen]);

    function toggleMobileNav() {
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    function closeMobileNav() {
        setIsMobileNavOpen(false);
    }

    return (
        <>
            <div className="top-bar" ref={topBarRef}>
                <Link href="/" onClick={closeMobileNav}>
                    <h1>
                        {t("Site.name", "I.D. Guide", locale)}
                    </h1>
                </Link>
                <Nav mobileOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} locale={locale} />
                <button
                    onClick={toggleMobileNav}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        outline: 'none',
                    }}
                    aria-label={isMobileNavOpen ? t("TopBar.closeMenu", "Close menu", locale) : t("TopBar.openMenu", "Open menu", locale)}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            transition: 'transform 0.3s ease',
                            marginRight: '20px',
                            transform: isMobileNavOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        }}
                    >
                        <Image
                            src={isMobileNavOpen ? '/menu-open.svg' : '/menu.svg'}
                            alt={t("TopBar.menuIconAlt", "Menu icon", locale)}
                            width={40}
                            height={40}
                            style={{ filter: 'invert(1)', transition: 'filter 0.3s' }}
                        />
                    </span>
                </button>
            </div>
            {locale === "fr" && (
                <div className="fr-disclaimer-bar">
                    La traduction française est actuellement une fonctionnalité bêta. Certaines sections du site peuvent être incomplètes ou mal traduites. <ReturnToEnglish />.
                </div>
            )}
        </>
    );
}