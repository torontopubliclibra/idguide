import Link from 'next/link';
import Image from 'next/image';
import styles from "./nav.module.css";
import { t } from "../lib/i18n";

export default function Nav(props: {mobileOpen: boolean, closeMobileNav: () => void, locale: string}) {
    const { locale } = props;
    return (
        <nav className={props.mobileOpen ? `${styles.mobileOpen} ${styles.navContainer}` : `${styles.navContainer}`} onClick={props.closeMobileNav}>
            <ul className={styles.nav}>
                <li>
                    <Link href="/start">
                        {t("Pages.start", "Start", locale)}
                        <Image src="/icon/start.svg" alt={t("Nav.startIconAlt", "Start icon", locale)} width={20} height={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/about" title={t("Pages.about", "About", locale)}>
                        {t("Pages.about", "About", locale)}
                        <Image src="/icon/info.svg" alt={t("Nav.aboutIconAlt", "About icon", locale)} width={20} height={20} />
                    </Link>
                </li>
                <li className={`${styles.dropdown}`}>
                    <Link href="/guides">
                        {t("Pages.guides", "Guides", locale)}
                        <Image src="/icon/guide.svg" alt={t("Nav.guidesIconAlt", "Guides icon", locale)} width={20} height={20} />
                    </Link>
                    <ul className={styles.subNav}>
                        <li>
                            <Link href="/name">{t("Pages.nameChanges", "Name changes", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/birth">{t("Pages.birthCertificates", "Birth certificates", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/health">{t("Pages.healthCards", "Health cards", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/id">{t("Pages.idCards", "Driver's licenses & I.D. cards", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/passport">{t("Pages.passports", "Passports", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/pr" title={t("Pages.prCards", "Permanent resident cards", locale)}>{t("Pages.prCards", "Permanent resident cards", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/sin" title={t("Pages.sin", "SIN", locale)}>{t("Pages.sin", "SIN", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/cra" title={t("Pages.cra", "CRA", locale)}>{t("Pages.cra", "CRA", locale)}</Link>
                        </li>
                    </ul>
                </li>
                <li className={`${styles.dropdown}`}>
                    <Link href="/resources" title={t("Pages.resources", "Resources", locale)}>
                        {t("Pages.resources", "Resources", locale)}
                        <Image src="/icon/resources.svg" alt={t("Nav.resourcesIconAlt", "Resources icon", locale)} width={20} height={20} />
                    </Link>
                    <ul className={styles.subNav}>
                        <li>
                            <Link href="/ab/resources">{t("Pages.abResources", "Alberta resources", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/mb/resources">{t("Pages.mbResources", "Manitoba resources", locale)}</Link>
                        </li>
                        <li>
                            <Link href="/on/resources">{t("Pages.onResources", "Ontario resources", locale)}</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/search" title={t("Pages.search", "Search", locale)}>
                        {t("Pages.search", "Search", locale)}
                        <Image src="/icon/search.svg" alt={t("Nav.searchIconAlt", "Search icon", locale)} width={20} height={20} />
                    </Link>
                </li>
                <li className={styles.desktopOnly}>
                    <Link href="https://en.wikipedia.org/wiki/Main_Page" title={t("Nav.exitTitle", "Exit", locale)}>
                        {t("Site.exit", "Exit", locale)}
                        <Image src="/icon/close.svg" alt={t("Site.exitIconAlt", "Exit icon", locale)} width={20} height={20} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}