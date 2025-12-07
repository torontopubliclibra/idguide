"use client";
"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Guides() {
    useEffect(() => {
      document.title = 'Guides | I.D. Guide';
    }, []);
  return (
    <div className="page">
      <main className={styles.guides}>
        <h2 className="page-title">Guides</h2>
        <div className="stacks flipped"></div>
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
              <Link href="/on/id">Driver&apos;s license and photo card updates</Link>
            </li>
          </ul>
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
        <div className="stacks"></div>
      </main>
    </div>
  );
}