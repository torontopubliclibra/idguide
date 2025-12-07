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
                    <Link href="/about">About</Link> | <Link href="/guides">Guides</Link> | <Link href="/downloads">Downloads</Link> | <Link href="mailto:contact@idguide.ca">Contact</Link>
                </p>
                <br/>
                <p>
                    <Link href="/about#changelog">v1.0.0</Link> | Last updated: Dec 2025 | <Link href="/about#sitemap">Sitemap</Link>
                </p>
            </div>
        </footer>
    );
}