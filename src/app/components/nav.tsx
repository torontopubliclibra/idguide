import Link from 'next/link';
import Image from 'next/image';
import styles from "./nav.module.css";

export default function Nav(props: {mobileOpen: boolean, closeMobileNav: () => void}) {
    return (
        <nav className={props.mobileOpen ? `${styles.mobileOpen} ${styles.navContainer}` : `${styles.navContainer}`} onClick={props.closeMobileNav}>
            <ul className={styles.nav}>
                <li>
                    <Link href="/start">
                        Get Started
                        <Image src="/start.svg" alt="Start icon" width={20} height={20} />
                    </Link>
                </li>
                <li className={`${styles.dropdown}`}>
                    <Link href="/guides">
                        Guides
                        <Image src="/guide.svg" alt="Guide icon" width={20} height={20} />
                    </Link>
                    <ul className={styles.subNav}>
                        <li>
                            <Link href="/on/name">Ontario name changes</Link>
                        </li>
                        <li>
                            <Link href="/on/birth">Ontario birth certificates</Link>
                        </li>
                        <li>
                            <Link href="/on/health">Ontario health cards</Link>
                        </li>
                        <li>
                            <Link href="/on/id">Ontario driver&apos;s licenses and photo cards</Link>
                        </li>
                        <li>
                            <Link href="/passport">Canadian passports</Link>
                        </li>
                        <li>
                            <Link href="/pr">Permanent resident cards</Link>
                        </li>
                        <li>
                            <Link href="/sin">Social Insurance Registry</Link>
                        </li>
                        <li>
                            <Link href="/cra">Canada Revenue Agency</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/about">
                        About
                        <Image src="/info.svg" alt="About icon" width={20} height={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/workshops">
                        Workshops
                        <Image src="/workshop.svg" alt="Workshop icon" width={20} height={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/downloads">
                        Downloads
                        <Image src="/download.svg" alt="Download icon" width={20} height={20} />
                    </Link>
                </li>
                <li className={styles.desktopOnly}>
                    <Link href="https://en.wikipedia.org/wiki/Main_Page">
                        Quick Exit
                        <Image src="/close.svg" alt="Exit icon" width={20} height={20} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}