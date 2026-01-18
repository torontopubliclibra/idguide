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
          <div>
            <h3>Alberta</h3>
            <ul>
              <li>
                <Link href="/ab/name">Legal name changes</Link>
              </li>
            </ul>
            <hr style={{marginBottom: '2rem'}}/>
            <h3>Ontario</h3>
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
            <hr style={{marginBottom: '2rem'}}/>
            <h3>Manitoba</h3>
            <ul>
              <li>
                <Link href="/mb/name">Legal name changes</Link>
              </li>
            </ul>
            <hr style={{marginBottom: '2rem'}}/>
            <h3>Canada-wide</h3>
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
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}