import { LanguageToggle } from './LanguageToggle';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./footer.module.css";
import { t } from "../lib/i18n";
import changelogData from '../changelog.json';

export default function Footer({ locale }: { locale: string }) {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerCol}>
                    <div className={styles.footerLogo}>{t("Site.name", "I.D. Guide", locale)}</div>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/start">{t("Pages.getStarted", "Get started", locale)}</Link></li>
                        <li><Link href="/about">{t("Site.aboutTheProject", "About the project", locale)}</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/guides">{t("Pages.guides", "Guides", locale)}</Link></li>
                        <li><Link href="/resources">{t("Pages.resources", "Resources", locale)}</Link></li>
                        
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/workshops">{t("Pages.workshops", "Workshops", locale)}</Link></li>
                        <li><Link href="/downloads">{t("Pages.downloads", "Downloads", locale)}</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 0}}>
                    <Image src="/icon/id-card.svg" alt="I.D. Guide logo" width={50} height={50} style={{filter: 'invert(87%) sepia(6%) saturate(990%) hue-rotate(202deg) brightness(92%) contrast(93%)'}}/>
                    <ul className={styles.footerLinks}>
                        <li><Link href="mailto:contact@idguide.ca">{t("Site.getInTouch", "Get in touch", locale)}</Link></li>
                        <li><Link href="/about#sitemap">{t("Pages.sitemap", "Sitemap", locale)}</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div style={{alignItems: 'center', display: 'inline-flex', gap: '0.5rem'}}>
                    <Link href="/about#changelog">v{changelogData[0].version}</Link><span> | </span><Link href="/about#disclaimers">{t("Site.disclaimers", "Disclaimers", locale)}</Link><span> | </span><Link href="/privacy">{t("Site.privacyPolicy", "Privacy", locale)}</Link><span> | </span><LanguageToggle locale={locale} />
                </div>
                <div>
                    <a href="/about#license" style={{alignItems: 'center', display: 'inline-flex', gap: '0.5em'}}>
                        <Image src='/icon/by-nc-sa.svg' alt="Creative Commons BY-NC-SA logo" width={70} height={25}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}