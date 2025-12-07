"use client";
import Link from 'next/link';
import { useEffect } from "react";
import styles from "./page.module.css";


export default function PR() {
    useEffect(() => {
      document.title = 'Permanent resident cards | I.D. Guide';
    }, []);
  return (
    <div className="page">
      <main className={styles.pr}>
        <h2 className="page-title">Permanent resident cards</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>Jump to:</p>
            <ul>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#requirements">Requirements</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="process">How to update your name</h3>
          <p>If you need to update the name on your permanent resident card, you must apply for a new card (reissued cards are not available for name changes). Complete the <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5445-applying-permanent-resident-card-card-first-application-replacement-renewal-change-gender-identifier" target="_blank" rel="noreferrer">PR Card Application (IMM 5445)</Link> to start the process.</p>

          <h3 id="requirements">Requirements</h3>
          <p>Along with the identity documents listed in Step 1 of the PR Card Application, you&#39;ll also need:</p>
          <ul>
            <li>A copy of your Record of Landing (IMM 1000) or Confirmation of Permanent Residence (IMM 5292 or IMM 5688)</li>
            <li>A legal document proving your name change (such as an Ontario Change of Name certificate)</li>
          </ul>
          <p>If your name change document was issued outside of Canada, you must also provide a provincial ID in your new name (such as a driver&#39;s license, photo card, or health card).</p>
        <hr/>
          <h3 id="sources">Sources</h3>
          <ul>
            <li><Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5445-applying-permanent-resident-card-card-first-application-replacement-renewal-change-gender-identifier" target="_blank" rel="noreferrer">Government of Canada - Applying for a permanent resident card</Link></li>
            <li><Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5530-request-reissue-permanent-resident-card-card" target="_blank" rel="noreferrer">Government of Canada - Request to Reissue a Permanent Resident Card</Link></li>
          </ul>
          <hr/>
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/sin">Social Insurance Registry</Link></li>
              <li><Link href="/cra">Canada Revenue Agency</Link></li>
              <li><Link href="/passport">Canadian passports</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
