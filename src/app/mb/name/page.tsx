"use client";
import Link from 'next/link';
import { useEffect } from "react";
import styles from "./page.module.css";

export default function MbName() {
    useEffect(() => {
      document.title = 'Manitoba name changes | I.D. Guide';
    }, []);
  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">Manitoba name changes</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#requirements">Requirements</Link></li>
              <li><Link href="#submitting-your-application">Submitting your application</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id='process'>Process</h3>
          <p>To legally change your name in Manitoba, fill out the <Link  href="/downloads#mb-name">Legal Change of Name Application (Adult)</Link>.</p>
          <h3 id='requirements'>Requirements</h3>
          <h4>Information you&#39;ll need to provide</h4>
          <ol>
            <li>Current legal name and new chosen name</li>
            <li>Proof of Manitoba residency (e.g., health card, driver&#39;s license, or Manitoba ID)</li>
            <li>Identity document (government-issued, with photo and ID number)</li>
            <li>Birth certificate (or explanation if unavailable)</li>
            <li>Marital status and previous name changes (if any)</li>
            <li>Reason for name change (e.g., “to reflect my preferred gender”)</li>
            <li>Notarized/commissioned documents (see below)</li>
          </ol>
          <h4>Notarization/Commissioning</h4>
          <p>Documents must be confirmed/notarized by a Commissioner of Oaths, RCMP, lawyer, or at the Vital Statistics Agency.</p>
          <blockquote>
            <p>For trans I.D. clinics and commissioning services, see <Link href="/mb/resources" target='blank'>Manitoba resources</Link> for a list of local and province-wide organizations.</p>
          </blockquote>
          <h3 id='submitting-your-application'>Submitting your application</h3>
          <p>Forms can be submitted in person at the <a href="https://www.google.com/maps/place/254+Portage+Ave,+Winnipeg,+MB+R3C+0B6" target="_blank" rel="noreferrer">Vital Statistics Branch (254 Portage Ave, Winnipeg)</a>, or by mail/fax. In-person submission is recommended for faster processing and support.</p>
          <p>If mailing or faxing, expect a 2-8 month backlog. Fees can be paid by cash, debit, or credit. As of 2024, trans individuals are exempt from the publication fee in the Manitoba Gazette and can request this exemption on the form. Fingerprinting may be required. The Vital Statistics Agency will provide instructions and an information sheet if so.</p>
          <h3 id='sources'>Sources</h3>
          <ul>
            <li><a href="https://queerwinnipeg.ca/posts/how-to-change-your-legal-name-or-sex-in-manitoba/" target="_blank" rel="noreferrer">Queer Winnipeg - How to Change Your Legal Name or Sex in Manitoba</a></li>
            <li><a href="https://vitalstats.gov.mb.ca/change_of_name.html" target="_blank" rel="noreferrer">Manitoba Vital Statistics - Change of Name</a></li>
            <li><a href="https://rainbowresourcecentre.org/" target="_blank" rel="noreferrer">Rainbow Resource Centre</a></li>
            <li><a href="https://www.sunshinehousewpg.org/2s-trans-id-peer-support" target="_blank" rel="noreferrer">Sunshine House 2S/Trans ID Peer Support</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
