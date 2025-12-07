import Link from 'next/link';
import Image from 'next/image';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <p>
                    <b>I.D. Guide</b> is a free, community-driven resource for name and gender marker changes in Canada.
                </p>
                <br/>
                <p>
                    <Link href="/about">About</Link> | <Link href="/guides">Guides</Link> | <Link href="/downloads">Downloads</Link> | <Link href="/workshops">Workshops</Link> | <Link href="mailto:danar.teagle@gmail.com">Contact</Link>
                </p>
                <br/>
                <p>
                    <Link href="/about#changelog">v1.0.0</Link> | Last updated: Nov 2025 | <Link href="/about#sitemap">Sitemap</Link>
                </p>
            </div>
            <div className={styles.legal}>
                <p>
                    <small>
                        No legal advice is provided. Content is for informational purposes only. Developed and maintained by <Link href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Teagle</Link>.
                    </small>
                </p>
            </div>
        </footer>
    );
}