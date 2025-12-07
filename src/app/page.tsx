"use client";
import Link from "next/link";
import { useEffect } from "react";
import "./globals.css";
import styles from "./page.module.css";


export default function Home() {
    useEffect(() => {
      document.title = 'I.D. Guide | Helping you navigate name and gender marker changes';
    }, []);
  return (
    <div className={`page ${styles.page}`}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div>
            <p className={styles.headline}>
              You deserve identity documents that reflect your life <em><small>(and don&#39;t make it more difficult)</small></em>.
            </p>
            <p>
              Navigating name and gender marker changes can feel overwhelming, but <span className={styles.strong}>I.D. Guide</span> is here to help—offering <Link href="/guides">step-by-step guides</Link>, <Link href="/downloads">downloadable forms</Link>, and <Link href="/workshops">resources</Link> to support you every step of the way.
            </p>
            <p>
              Ready to begin? <Link href="/start">Start your journey here</Link>.
            </p>
          </div>
          <div className={styles.group}>
            <div className="stacks flipped"></div>
            <div className={styles.guides}>
              <h3>We can help with your:</h3>
              <ul>
                <li>
                  <Link href="/name">Legal name change</Link>
                </li>
                <li>
                  <Link href="/health">Health card updates</Link>
                </li>
                <li>
                  <Link href="/id">Driver&#39;s license or I.D. card updates</Link>
                </li>
                <li>
                  <Link href="/passport">Canadian passport updates</Link>
                </li>
                <li>
                  <Link href="/pr">Permanent resident card updates</Link>
                </li>
                <li>
                  <Link href="/guides">and more...</Link>
                </li>
              </ul>
            </div>
            <div className="stacks"></div>
          </div>
        </div>
      </main>
    </div>
  );
}