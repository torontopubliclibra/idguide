"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Resources() {
  useEffect(() => {
    document.title = "Resources | I.D. Guide";
  }, []);
  return (
        <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">Resources</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people across Canada. You&#39;ll also find links below to our lists of region-specific resources.
          </p>
          <p>If you have a suggestion for this page, or you spot an error, please <Link href="mailto:contact@idguide.ca">contact us</Link>.</p>
          <br/>
            <table className={styles.resourceTable}>
              <thead>
                <tr>
                  <th>Organization</th>
                  <th>Service</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://justicetrans.org/" target="_blank" rel="noreferrer">JusticeTrans</a></td>
                  <td>Legal rights and information</td>
                </tr>
                <tr>
                  <td><a href="https://egale.ca/" target="_blank" rel="noreferrer">Egale Canada</a></td>
                  <td>Advocacy and research for 2SLGBTQI rights</td>
                </tr>
                <tr>
                  <td><a href="https://translifeline.org/" target="_blank" rel="noreferrer">Trans Lifeline</a></td>
                  <td>Peer support hotline</td>
                </tr>
              </tbody>
            </table>
          <hr />
          <ul>
            <li>
              <Link href="/ab/resources">Alberta resources</Link>
            </li>
            <li>
              <Link href="/on/resources">Ontario resources</Link>
            </li>
            <li>
              <Link href="/mb/resources">Manitoba resources</Link>
            </li>
          </ul>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
