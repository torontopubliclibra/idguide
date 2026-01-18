
"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";


export default function AbResources() {
  useEffect(() => {
    document.title = "Alberta resources | I.D. Guide";
  }, []);
  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">Alberta resources</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            This table lists organizations offering trans I.D. clinics, legal support, peer groups, and other resources for 2SLGBTQ+ people in Alberta. You&apos;ll find options for major cities, province-wide services, and online support.
          </p>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.slsedmonton.com/trans-id-project" target="_blank" rel="noreferrer">Student Legal Services of Edmonton Trans I.D. Clinic</a></td>
                <td>Legal support for I.D. changes</td>
                <td>Edmonton</td>
              </tr>
              <tr>
                <td><a href="https://albertahumanrights.ab.ca/">Alberta Human Rights Commission</a></td>
                <td>Human rights advocacy and support</td>
                <td>Province-wide</td>
              </tr>
              <tr>
                <td><a href="https://www.transwellnessinitiative.ca/" target="_blank" rel="noreferrer">Trans Wellness Initiative</a></td>
                <td>Medical and community resources</td>
                <td>Province-wide</td>
              </tr>
              <tr>
                <td><a href="https://www.skippingstone.ca/" target="_blank" rel="noreferrer">Skipping Stone</a></td>
                <td>Peer support, drop-ins</td>
                <td>Calgary</td>
              </tr>
              <tr>
                <td><a href="https://clg.ab.ca/">Calgary Legal Guidance</a></td>
                <td>Legal services and support</td>
                <td>Calgary</td>
              </tr>
              <tr>
                <td><a href="https://www.calgaryoutlink.ca/" target="_blank" rel="noreferrer">Calgary Outlink</a></td>
                <td>Peer support, groups, and community resources</td>
                <td>Calgary</td>
              </tr>
              <tr>
                <td><a href="https://pridecentreofedmonton.ca/" target="_blank" rel="noreferrer">Pride Centre of Edmonton</a></td>
                <td>Peer support, groups, and community resources</td>
                <td>Edmonton</td>
              </tr>
              <tr>
                <td><a href="https://www.connectfund.org/" target="_blank" rel="noreferrer">Connect Fund</a></td>
                <td>Medical funding support</td>
                <td>Province-wide</td>
              </tr>
              <tr>
                <td><a href="https://www.foriaclinic.com/" target="_blank" rel="noreferrer">Foria Clinic</a></td>
                <td>Virtual healthcare services</td>
                <td>Province-wide</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p>If you have a suggestion for a resource to add, or you spot an error, please <Link href="mailto:contact@idguide.ca">contact us</Link>. Your feedback helps keep this resource accurate and useful for everyone.</p>
          <hr />
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/start">Get started</Link></li>
              <li><Link href="/ab/name">Alberta name change guide</Link></li>
              <li><Link href="/resources">Canada-wide resources</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
