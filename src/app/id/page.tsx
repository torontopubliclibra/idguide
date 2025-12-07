"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Guides() {
    useEffect(() => {
      document.title = "Driver's licenses & I.D. cards | I.D. Guide";
    }, []);
  return (
    <div className="page">
      <main className={styles.id}>
        <h2 className="page-title">Driver&apos;s licenses &amp; I.D. cards</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>The process for updating your driver&apos;s license or I.D. card will vary depending on your province or territory of residency:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/on/health">Ontario driver&apos;s licenses &amp; I.D. cards</Link>
              </li>
            </ul>
            <p>
              <small>We&apos;re working to add more provinces and territories. Check back soon for expanded support across Canada.</small>
            </p>
          </div>
          <hr />
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/start">Get started</Link></li>
              <li><Link href="/guides">Guides</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}