"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function OnName() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#process">{t("Subheadings.process", "Process", pageLocale)}</Link></li>
              <li><Link href="#requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</Link></li>
              <li><Link href="#submitting-your-application">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id='process'>{t("Subheadings.process", "Process", pageLocale)}</h3>
          <p>To legally change your name in Ontario, you must complete the <Link href="/downloads#on-name">{t("NameChanges.ontarioApplicationName", "Ontario application to change an adult's name", pageLocale)}</Link>. The fee is $137.00.</p>
          <h3 id='requirements'>{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          <h4>Birth certificate details</h4>
          <p>If your name change is approved and you were born in Ontario, you will automatically receive a new birth certificate in your new name.</p>
          <blockquote>Note: The default birth certificate issued does not include parental information. If you want a birth certificate with parental information or a certified copy of your birth registration, you must apply separately and pay the required fee.</blockquote>
          <h4>{t("Subheadings.informationYoullNeedToProvide", "Information you'll need to provide", pageLocale)}</h4>
          <p>The application asks for detailed personal information, including:</p>
          <ol>
            <li>Full current legal name</li>
            <li>New chosen name</li>
            <li>Mailing address and contact information</li>
            <li>Date and location of birth</li>
            <li>Marital/relationship status</li>
            <li>Parental information</li>
            <li>Details of any previous name change</li>
            <li>Information about any current or past criminal offences</li>
            <li>Information about any current or past financial judgments, fines, or bankruptcy</li>
          </ol>
          <p>You must also provide supporting documents, such as your birth certificate (original or certified copy), and translations if not in English or French.</p>
          <h4>{t("Subheadings.extraSectionsAndDocuments", "Extra sections and documents", pageLocale)}</h4>
          <ul>
            <li>If you are married or in a conjugal relationship, you must notify your partner or spouse and complete Part 2.</li>
            <li>If you are 16 or 17, you need consent from everyone with legal custody and must complete Part 3.</li>
            <li>If you have any law enforcement orders, criminal convictions, or pending charges, you&#39;ll need a police record check. Download the <Link href="/downloads#on-name">Requirements for a Police Record Check for a Change of Name form (5349e)</Link> to ensure the check meets all requirements.</li>
            <li>If you were born elsewhere in Canada and want a new birth certificate, contact the province or territory where you were born after you get your change of name certificate.</li>
          </ul>
          <h4>{t("Subheadings.guarantorStatement", "Guarantor statement", pageLocale)}</h4>
          <p>You&#39;ll need a guarantor who can confirm you&#39;ve lived in Ontario for the past 12 months. Most people use a medical professional, but other options include provincial judges, justices of the peace, chiefs of Indian bands, marriage officiants, medical practitioners, lawyers, municipal heads/clerks, school principals, and bank managers/signing officers. If you can&#39;t find someone who meets the requirements, you can use a non-relative who has known you for at least five years and can confirm your Ontario residency. Have your guarantor complete and sign the statement before you submit your application.</p>
          <h4>{t("Subheadings.previousIdentityDocuments", "Previous identity documents", pageLocale)}</h4>
          <ul>
            <li>If you were born in Ontario and have a valid birth certificate, include the originals (or certified copies) of all previously issued short- or long-form certificates.</li>
            <li>If you were born elsewhere in Canada, submit either an original birth certificate or a certified copy from your province or territory of birth.</li>
            <li>If you don&#39;t have a birth certificate, you&#39;ll likely need to apply for one before submitting your name change application.</li>
            <li>If any supporting documents are not in English or French, you must provide a translation. <b>Translation requirements:</b> Include a complete photocopy of the original document, a complete photocopy of the translation, and an original written declaration from the translator. The translator must state they understand both languages and that the translation is complete and correct. If the translator is not a professional, the declaration must be sworn before a commissioner for taking affidavits. If the declaration appears on the translation, submit the original translation (not a photocopy).</li>
          </ul>
          <h4>{t("Subheadings.requestForNonPublication", "Request for non-publication", pageLocale)}</h4>
          <p>By default, all name changes in Ontario are published in The Ontario Gazette (online only). If you are transgender, First Nations, Inuit, or Métis, you can request non-publication by submitting a <Link href="/downloads#on-name">Request for Non-Publication form (11320e)</Link> with your application. If you do not want your previous name published, we strongly recommend including this form. Fill out the request and submit it with your application.</p>
          <h4>Indigenous applicants and single name changes</h4>
          <p>If you are First Nations, Inuit, or Métis, you may be eligible to have ServiceOntario fees waived when reclaiming a traditional Indigenous name or changing to a single name as part of your culture. You can also request non-publication of your name change in The Ontario Gazette. For more information and forms, see the ServiceOntario website or contact ServiceOntario directly.</p>
          <p>You can apply to change your name (or your child&#39;s name) to a single name if it is part of your or your child&#39;s traditional culture. Indigenous applicants may also reclaim a traditional name at no cost. You must submit the Request for a Name Change with a Single Name form along with your application. Follow all instructions on the forms and provide any required supporting documents.</p>
          <h4>{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h4>
          <p>You must sign the statutory declaration (page 16) in front of a commissioner for taking affidavits, who will stamp or seal the document to verify your identity and the accuracy of your information. The commissioner does not need to know you personally. Many notary/commissioner offices in Ontario will commission these documents for trans individuals for free; otherwise, the typical fee is $30-45. If submitting in person, ServiceOntario can commission for free.</p>
          <blockquote>
            <p>For trans I.D. clinics and commissioning services, see <Link href="/on/resources" target='blank'>Ontario resources</Link> for a list of local and province-wide organizations.</p>
          </blockquote>
          <h3 id="submitting-your-application">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>
          <h4>{t("Subheadings.byMail", "By mail", pageLocale)}</h4>
          <p>Mail your completed form, payment, and required documents to:</p>
          <textarea readOnly name="address" id="address" value={
            `ServiceOntario, Office of the Registrar General, P.O. Box 3000, 189 Red River Road, Thunder Bay, ON, P7B 5W0`}
          />
          <p>Tip: Use a registered or tracked mail service to avoid lost applications.</p>
          <h4>{t("Subheadings.inPerson", "In person", pageLocale)}</h4>
          <p>If you prefer to submit in person and are in Toronto, bring your completed form, payment, and documents to:</p>
          <textarea readOnly name="address" id="address" value={
            `ServiceOntario, 47 Sheppard Avenue East, Unit 417, 4th Floor, Toronto, ON, M2N 5N1 `}
          />
          <h4>{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h4>
          <p>Give yourself plenty of time to gather information and complete the forms. It may take several weeks to get everything ready.</p>
          <p>Print clearly with blue or black ink. Don&#39;t use correction fluid. If you make a mistake or need to change information:</p>
          <ul>
            <li>Put brackets around the incorrect info</li>
            <li>Write the correct info</li>
            <li>Initial each change</li>
            <li>Have the commissioner initial each change before it&#39;s sworn</li>
          </ul>
          <p>Your change of name certificate will show both your previous and new names. Use this certificate to update other documents, like your <Link href="/on/id">driver&#39;s license, photo card</Link>, or <Link href="/on/health">health card</Link>. By law, you must notify the Ministry of Transportation within 6 days of legally changing your name if you have a driver&#39;s license.</p>
          <p>If you want to update your gender marker and were born in Ontario, you can submit the <Link href="/downloads#on-birth">Application for Change of Sex Designation on a Birth Registration of an Adult (11325e)</Link> along with your name change application. For details, see the <Link href="/on/birth">birth certificates guide</Link>.</p>
          <h4>{t("Subheadings.deliveryTime", "Delivery time", pageLocale)}</h4>
          <p>As of 2026, change of name applications are taking 18-24 weeks to process. It also may take longer for single name or reclaimed name changes. If you were born in Ontario, you&#39;ll also get your updated birth certificate. If you were born elsewhere in Canada, notice of your name change is sent to the vital statistics office in your province or territory, and you&#39;ll likely need to apply there for a new birth certificate. Contact ServiceOntario if you have not received your certificate after 24 weeks.</p>
          <div className={styles.imageContainer}>
            <Image src="/on-name-example.jpeg" alt="Sample Ontario change of name certificate showing old and new names" width={1200} height={500} />
          </div>
          <hr />
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.ontario.ca/page/change-name" target="_blank" rel="noreferrer">ServiceOntario - Change of name</Link></li>
          </ul>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/on/birth">Ontario birth certificates</Link></li>
              <li><Link href="/on/health">Ontario health cards</Link></li>
              <li><Link href="/on/id">Ontario driver&#39;s licenses & I.D. cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}