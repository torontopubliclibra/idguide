"use client";


import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";
import "../skip-link.css";

export default function Guides() {
  useEffect(() => {
    document.title = 'Guides | I.D. Guide';
  }, []);
  return (
    <div className="page">
      <a href="#main" className="skip-link">Skip to main content</a>
      <main id="main" className={styles.guides}>
        <h2 className="page-title">Guides</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#alberta">Alberta</Link></li>
              <li><Link href="#manitoba">Manitoba</Link></li>
              <li><Link href="#ontario">Ontario</Link></li>
              <li><Link href="#canada-wide">Canada-wide</Link></li>
            </ul>
          </div>
          <hr style={{margin: '0.5rem 0', marginTop: '1rem'}}/>
          <div>
            <h3 id="alberta">Alberta</h3>
            <ul>
              <li>
                <Link href="/ab/name">Legal name changes</Link>
              </li>
            </ul>
            <hr/>
            <h3 id="manitoba">Manitoba</h3>
            <ul>
              <li>
                <Link href="/mb/name">Legal name changes</Link>
              </li>
            </ul>
            <hr/>
            <h3 id="ontario">Ontario</h3>
            <ul>
              <li>
                <Link href="/on/name">Legal name changes</Link>
              </li>
              <li>
                <Link href="/on/birth">Birth certificate updates</Link>
              </li>
              <li>
                <Link href="/on/health">Health card updates</Link>
              </li>
              <li>
                <Link href="/on/id">Driver&apos;s license and I.D. card updates</Link>
              </li>
            </ul>
            <hr/>
            <h3 id="canada-wide">Canada-wide</h3>
            <ul>
              <li>
                <Link href="/passport">Passport updates</Link>
              </li>
              <li>
                <Link href="/pr">Permanent resident card updates</Link>
              </li>
              <li>
                <Link href="/sin">Social Insurance Registry updates</Link>
              </li>
              <li>
                <Link href="/cra">Canada Revenue Agency updates</Link>
              </li>
            </ul>
          </div>
          <hr style={{margin: '1rem 0'}}/>
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/start">Get started</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/downloads">Downloads</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}