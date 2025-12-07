import Link from 'next/link';
import Image from 'next/image';
import styles from "./nav.module.css";

export default function Nav(props: {mobileOpen: boolean, closeMobileNav: () => void}) {
    return (
        <nav className={props.mobileOpen ? `${styles.mobileOpen} ${styles.navContainer}` : `${styles.navContainer}`} onClick={props.closeMobileNav}>
            <ul className={styles.nav}>
                <li>
                    <Link href="/start" title="Get started">
                        Start
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
                            <Link href="/name">Name changes</Link>
                        </li>
                        <li>
                            <Link href="/birth">Birth certificates</Link>
                        </li>
                        <li>
                            <Link href="/health">Health cards</Link>
                        </li>
                        <li>
                            <Link href="/id">Driver&apos;s licenses & I.D. cards</Link>
                        </li>
                        <li>
                            <Link href="/passport">Canadian passports</Link>
                        </li>
                        <li>
                            <Link href="/pr" title='Permanent resident cards'>Permanent resident cards</Link>
                        </li>
                        <li>
                            <Link href="/sin" title='Social Insurance Registry'>Social Insurance Registry</Link>
                        </li>
                        <li>
                            <Link href="/cra" title='Canada Revenue Agency'>Canada Revenue Agency</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/about" title='About'>
                        About
                        <Image src="/info.svg" alt="About icon" width={20} height={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/workshops" title='Workshops'>
                        Workshops
                        <Image src="/workshop.svg" alt="Workshop icon" width={20} height={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/downloads" title='Downloads'>
                        Downloads
                        <Image src="/download.svg" alt="Download icon" width={20} height={20} />
                    </Link>
                </li>
                <li className={styles.desktopOnly}>
                    <Link href="https://en.wikipedia.org/wiki/Main_Page" title='Quick exit to Wikipedia.org'>
                        Exit
                        <Image src="/close.svg" alt="Exit icon" width={20} height={20} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}