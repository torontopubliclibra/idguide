import { LanguageToggle } from './LanguageToggle';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./footer.module.css";
import { t } from "../lib/i18n";
import changelogData from '../about/changelog.json';

export default function Footer({ locale }: { locale: string }) {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerCol}>
                    <div className={styles.footerLogo}>{t("Site.name", "I.D. Guide", locale)}</div>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/start">{t("Pages.start", "Get started", locale)}</Link></li>
                        <li><Link href="/guides">{t("Pages.guides", "Guides", locale)}</Link></li>
                        <li><Link href="/downloads">{t("Pages.downloads", "Downloads", locale)}</Link></li>
                        <li><Link href="mailto:contact@idguide.ca">{t("Site.getInTouch", "Get in touch", locale)}</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/about">{t("Site.aboutTheProject", "About the project", locale)}</Link></li>
                        <li><Link href="/resources">{t("Pages.resources", "Resources", locale)}</Link></li>
                        <li><Link href="/workshops">{t("Pages.workshops", "Workshops", locale)}</Link></li>
                        <li><Link href="/about#disclaimers">{t("Pages.disclaimers", "Disclaimers", locale)}</Link></li>
                        <li><Link href="/privacy">{t("Pages.privacy", "Privacy policy", locale)}</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div style={{alignItems: 'center', display: 'inline-flex', gap: '0.5rem'}}>
                    {t("Site.name", "I.D. Guide", locale)} <span>(<Link href="/about#changelog">v{changelogData[0].version}</Link>)</span> | <LanguageToggle locale={locale} />
                </div>
                <div>
                    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" style={{alignItems: 'center', display: 'inline-flex', gap: '0.5em'}}>
                        <Image src='/by-nc-sa.svg' alt="Creative Commons BY-NC-SA logo" width={70} height={25}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}