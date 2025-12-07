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
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="mailto:contact@idguide.ca">Contact us</Link></li>
                        <li><Link href="/about#sitemap">Sitemap</Link></li>
                        <li><Link href="/about#changelog">Version 1.0.0</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerTitle}>Quick links</div>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/start" title="Get started">Start</Link></li>
                        <li><Link href="/guides">Guides</Link></li>
                        <li><Link href="/downloads">Downloads</Link></li>
                        <li><Link href="/workshops">Workshops</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.footerTitle}>Other resources</div>
                    <ul className={styles.footerLinks}>
                        <li><Link href="https://www.translifeline.org/" target="_blank" rel="noopener noreferrer">Trans Lifeline</Link></li>
                        <li><Link href="https://justicetrans.org/" target="_blank" rel="noopener noreferrer">Justice Trans</Link></li>
                        <li><Link href="https://juritrans.ca" target="_blank" rel="noopener noreferrer">Juritrans</Link></li>
                        <li><Link href="https://egale.ca/" target="_blank" rel="noopener noreferrer">Egale Canada</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div style={{alignItems: 'center', display: 'inline-flex', gap: '0.5rem'}}>
                    I.D. Guide, 2025  | <Link href="/privacy">Privacy Policy</Link>
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