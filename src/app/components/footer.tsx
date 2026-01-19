import Link from 'next/link';
import Image from 'next/image';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerCol}>
                    <div className={styles.footerLogo}>I.D. Guide</div>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/start">Get started</Link></li>
                        <li><Link href="/guides">Guides</Link></li>
                        <li><Link href="/downloads">Downloads</Link></li>
                        <li><Link href="mailto:contact@idguide.ca">Get in touch</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/about">About the project</Link></li>
                        <li><Link href="/resources">Resources</Link></li>
                        <li><Link href="/workshops">Workshops</Link></li>
                        <li><Link href="/about#disclaimers">Disclaimers</Link></li>
                        <li><Link href="/privacy">Privacy policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div style={{alignItems: 'center', display: 'inline-flex', gap: '0.5rem'}}>
                    I.D. Guide <span>(<Link href="/about#changelog">v1.0.3</Link>)</span> | <Link href="/about#sitemap">Sitemap</Link>
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