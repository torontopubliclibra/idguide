import Link from 'next/link';
import styles from "./page.module.css";

export default function About() {
  return (
    <div className="page">
      <main className={styles.about}>
        <h2 className="page-title">About I.D. Guide</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>I.D. Guide is a free, community-driven resource for anyone navigating legal name, gender marker, and identity document changes in Ontario, Canada. Our goal is to make these processes clearer, less stressful, and more accessible for trans, non-binary, Two-Spirit, and gender non-conforming people—as well as for allies and service providers. </p>

          <h3>Mission</h3>
          <p>We believe everyone deserves access to accurate, up-to-date information, so this site serves as a resource of practical step-by-step instructions and forms all in one place. Please note: This site does not provide legal advice, but aims to empower you to make informed decisions and advocate for yourself.</p>

          <h3>Who runs this site?</h3>
          <p>This project is led by <Link href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Rosamund Teagle</Link>, a designer and web/software developer based in Toronto. Since 2021, Dana has delivered workshops on name and gender marker changes for organizations across Ontario. To learn more or book a presentation, visit our <Link href="/workshops">workshops page</Link>. If you would like to help support Dana and her work, you can send her a tip <Link href="https://danateagle.com/paypal" target='_blank'>via PayPal</Link>.</p>

          <h3>Accessibility & feedback</h3>
          <p>I.D. Guide is committed to accessibility and continuous improvement. If you spot an error, have a suggestion, or need information in a different format, please <Link href="mailto:danar.teagle@gmail.com">contact us</Link>. Your feedback helps keep this resource accurate and useful for everyone.</p>
          <h3 id='changelog'>Changelog</h3>
          <ul>
            <li>v1.0.0 – Initial launch</li>
          </ul>
          <h3 id='sitemap'>Sitemap</h3>
          <ul className={styles.sitemap}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link> <small>(you are here)</small></li>
            <li>
              <Link href="/guides">Guides</Link>
              <ul>
                <li><Link href="/on/name">Ontario legal name changes</Link></li>
                <li><Link href="/on/birth">Ontario birth certificates</Link></li>
                <li><Link href="/on/health">Ontario health cards</Link></li>
                <li><Link href="/on/id">Ontario driver&#39;s licenses & photo cards</Link></li>
                <li><Link href="/passport">Canadian passports</Link></li>
                <li><Link href="/pr">Permanent resident cards</Link></li>
                <li><Link href="/sin">Social Insurance Registry</Link></li>
                <li><Link href="/cra">Canada Revenue Agency</Link></li>
              </ul>
            </li>
            <li><Link href="/workshops">Workshops</Link></li>
            <li><Link href="/downloads">Downloads</Link></li>
          </ul>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}