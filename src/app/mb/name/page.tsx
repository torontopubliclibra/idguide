"use client";

import Link from 'next/link';
import { useEffect } from "react";
import { usePageLocale } from '../../hooks/usePageLocale';
import { useRenderCopy } from '../../hooks/useRenderCopy';
import styles from "./page.module.css";
import { t } from "../../lib/i18n";
import JumpTo from '../../components/JumpTo';
import SeeAlso from '../../components/SeeAlso';
import SourcesList from '../../components/SourcesList';
import sources from './sources.json';
import copy from './copy.json';
import LastUpdated from "../../components/LastUpdated";

export default function MbName() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.manitobaNameChanges", "Manitoba name changes", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">{t("Pages.manitobaNameChanges", "Manitoba name changes", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <JumpTo pageLocale={pageLocale} sections={[
            "process",
            "requirements",
            "commissioning",
            "submitting",
            "sources"
          ]} />
          <hr />

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          {useRenderCopy()(copy["process"])}

          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>

          <h4>{t("Subheadings.eligibility", "Eligibility", pageLocale)}</h4>
          {useRenderCopy()(copy["eligibility"])}
{/* 
          <h4>{t("Subheadings.informationYoullNeedToProvide", "Information you'll need to provide", pageLocale)}</h4>
          <ol>
            <li>Current legal name and new chosen name</li>
            <li>Proof of Manitoba residency (e.g., health card, driver&#39;s license, or Manitoba ID)</li>
            <li>Identity document (government-issued, with photo and ID number)</li>
            <li>Birth certificate (or explanation if unavailable)</li>
            <li>Marital status and previous name changes (if any)</li>
            <li>Reason for name change (e.g., “to reclaim Indigenous name” or “to reflect my gender”)</li>
            <li>Notarized/commissioned documents (see below)</li>
            <li>All court documents for guardianship/custody (if applying for a child)</li>
            <li>All documents must be originals or confirmed copies (by eligible witness)</li>
            <li>Documents in other languages must be translated by a certified translator</li>
          </ol> */}
          <h3 id="commissioning">{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h3>
          <p>Affidavits must be signed by a Commissioner for Oaths, RCMP, lawyer, notary, judge, or other authorized person (see The Evidence Act of Manitoba). Witnesses can also confirm photocopies of your documents by comparing originals and signing the copies.</p>
          <blockquote>
            <p>For trans I.D. clinics and commissioning services, see <Link href="/mb/resources" target='blank'>Manitoba resources</Link> for a list of local and province-wide organizations.</p>
          </blockquote>
          <h3 id="submitting">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>
          <p>Submit your application and documents in person (by appointment) or by mail to:</p>
          <textarea readOnly name="address" id="address" value={
            `Vital Statistics Branch\nAttn: Legal Change of Name\n254 Portage Avenue\nWinnipeg MB   R3C 0B6`
          } />
          <p>To book an appointment: <a href="tel:204-945-3701">204-945-3701</a> or <a href="tel:866-949-9296">866-949-9296</a></p>
          <p>If mailing, use a tracked service if possible. Fees can be paid by cash, debit, or credit in person.</p>
          <p>If accepted, you will receive instructions for a certified criminal record check. Do not undergo a criminal record check until instructed.</p>
          <p>Your change of name certificate will show both your previous and new names. Use this certificate to update other documents, like your <Link href="/id">driver&#39;s license, photo card</Link>, or <Link href="/health">health card</Link>.</p>
          <hr />
          <SourcesList sources={sources} />
          <hr />
          <SeeAlso pages={["start", "mb/resources"]} pageLocale={pageLocale}/>
        </div>
        <div className="stacks"></div>
        <LastUpdated page="mb/name" pageLocale={pageLocale} />
      </main>
    </div>
  );
}