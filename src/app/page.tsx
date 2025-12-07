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
              Navigating name and gender marker changes can feel overwhelming, but <strong>I.D. Guide</strong> is here to help—offering <Link href="/guides">step-by-step guides</Link>, <Link href="/downloads">downloadable forms</Link>, and <Link href="/workshops">resources</Link> to support you every step of the way.
            </p>
            <p>
              Ready to begin? <Link href="/start">Start your journey here</Link>.
            </p>
          </div>
          <div className={styles.group}>
            <div className="stacks flipped"></div>
            <div className={styles.guides}>
              <ul>
                <li>
                  <Link href="/on/name">Change your legal name</Link>
                </li>
                <li>
                  <Link href="/on/birth">Update your birth certificate</Link>
                </li>
                <li>
                  <Link href="/on/health">Update your health card</Link>
                </li>
                <li>
                  <Link href="/on/id">Update your driver&#39;s license or photo card</Link>
                </li>
                <li>
                  <Link href="/passport">Update your passport</Link>
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