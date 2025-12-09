"use client";
import Link from 'next/link';
import { useEffect } from "react";
import styles from "./page.module.css";

export default function About() {
    useEffect(() => {
      document.title = 'About | I.D. Guide';
    }, []);
  return (
    <div className="page">
      <main className={styles.about}>
        <h2 className="page-title">About</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p><span className={styles.strong}>I.D. Guide</span> is a free, community-driven resource designed to help people navigate legal name, gender marker, and identity document changes in Canada. We aim to make this process less stressful and more accessible—especially for trans, non-binary, Two-Spirit, and gender non-conforming communities. Right now, we focus on Ontario and Canada-wide processes, with plans to expand and offer guidance for more provinces and territories in the future.</p>

          <p>Everyone deserves clear, accurate, and up-to-date information—but government agencies often make these processes confusing or hard to access. I.D. Guide brings together practical, step-by-step instructions and forms in one place to help you navigate these changes confidently. While we do not provide legal advice, our goal is to empower you to make informed choices and advocate for yourself.</p>

          <p>The project is led by <Link href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Rosamund Teagle</Link>, a designer and web/software developer based in Toronto. Since 2021, Dana has delivered workshops on name and gender marker changes for organizations across Ontario. To learn more or book a presentation, visit our <Link href="/workshops">workshops page</Link>. If you would like to help support Dana and her work, you can send her a tip <Link href="https://danateagle.com/paypal" target='_blank'>via PayPal</Link>.</p>

          <hr/>

          <h3 id='disclaimers'>Disclaimers</h3>
          <p>I.D. Guide is an independent project and is not affiliated with any government agency or official body. All information is provided in good faith, but users should always verify details with the relevant authorities.</p>

          <p>While we strive to keep all information up to date, laws and procedures can change. Please check official sources or contact the appropriate agency for the most current requirements.</p>

          <p>The content on this site is for informational purposes only and does not constitute legal advice. For legal advice specific to your situation, consult a qualified legal professional.</p>

          <p>If you spot an error, have a suggestion, or need information in a different format, please <Link href="mailto:contact@idguide.ca">contact us</Link>. Your feedback helps keep this resource accurate and useful for everyone. For details about how your information is handled, see our <Link href="/privacy">privacy policy</Link>.</p>

          <hr />

          <h3 id='changelog'>Changelog</h3>
          <ul style={{marginBottom: "-1rem"}}>
            <li>v1.0.0 - Initial launch</li>
          </ul>
          
          <hr />
          
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
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}