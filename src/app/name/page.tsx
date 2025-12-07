"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Guides() {
    useEffect(() => {
      document.title = 'Name changes | I.D. Guide';
    }, []);
  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">Name changes</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>The process for changing your legal name will vary depending on your province or territory of residency:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/on/name">Ontario legal name changes</Link>
              </li>
              <li>
                <Link href="/ab/name">Alberta legal name changes</Link>
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