
"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function MbResources() {
  useEffect(() => {
    document.title = "Manitoba resources | I.D. Guide";
  }, []);
  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">Manitoba resources</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people in Manitoba.
          </p>
          <p>If you have a suggestion for this page, or you spot an error, please <Link href="mailto:contact@idguide.ca">contact us</Link>.</p>
          <hr />
          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#province-wide">Province-wide</Link></li>
              <li><Link href="#winnipeg">Winnipeg</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="province-wide">Province-wide</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.manitobahumanrights.ca/" target="_blank" rel="noreferrer">Manitoba Human Rights Commission</a></td>
                <td>Human rights advocacy and support</td>
              </tr>
              <tr>
                <td><a href="https://justicetrans.org/projects/2s-trans-self-advocacy-workbook/" target="_blank" rel="noreferrer">JusticeTrans 2S Trans+ Self Advocacy Workbook</a></td>
                <td>Self-advocacy workbook</td>
              </tr>
              <tr>
                <td><a href="https://klinic.mb.ca/all-services/trans-health-trans-health-klinic/" target="_blank" rel="noreferrer">Trans Health Klinic Community Health</a></td>
                <td>Medical, psychosocial, and peer supports</td>
              </tr>
            </tbody>
          </table>
          <h3 id="winnipeg">Winnipeg</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://rainbowresourcecentre.org/" target="_blank" rel="noreferrer">Rainbow Resource Centre</a></td>
                <td>I.D. clinics, support programs, and drop-ins</td>
              </tr>
              <tr>
                <td><a href="https://www.sunshinehousewpg.org/" target="_blank" rel="noreferrer">Sunshine House</a></td>
                <td>Peer support, drop-ins, and community resources</td>
              </tr>
              <tr>
                <td><a href="https://www.sunshinehousewpg.org/2s-trans-id-peer-support" target="_blank" rel="noreferrer">Sunshine House 2S/Trans ID Peer Support</a></td>
                <td>I.D. peer support</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/start">Get started</Link></li>
              <li><Link href="/mb/name">Manitoba name change guide</Link></li>
              <li><Link href="/resources">Canada-wide resources</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
