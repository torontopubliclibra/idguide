"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function OnResources() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.ontarioResources", "Ontario resources", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.ontarioResources", "Ontario resources", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.ontarioIntro", "This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people in Ontario.", pageLocale)}
          </p>
          <p>
            {t("ResourcesPage.suggestion", "If you have a resource to suggest, please", pageLocale)}{" "}
            <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.
          </p>
          <hr />
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</Link></li>
              <li><Link href="#toronto">Toronto</Link></li>
              <li><Link href="#mississauga">Mississauga</Link></li>
              <li><Link href="#windsor">Windsor</Link></li>
              <li><Link href="#hamilton">Hamilton</Link></li>
              <li><Link href="#ottawa">Ottawa</Link></li>
              <li><Link href="#kitchener-waterloo">Kitchener/Waterloo</Link></li>
              <li><Link href="#thunder-bay">Thunder Bay</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.legalaid.on.ca/legal-clinics/" target="_blank" rel="noreferrer">Legal Aid Ontario</a></td>
                <td>Legal clinics and support</td>
              </tr>
              <tr>
                <td><a href="https://www.youthline.ca/" target="_blank" rel="noreferrer">LGBT YouthLine</a></td>
                <td>Peer support, helpline, and resources</td>
              </tr>
              <tr>
                <td><a href="https://www.rainbowhealthontario.ca/" target="_blank" rel="noreferrer">Rainbow Health Ontario</a></td>
                <td>Healthcare resources</td>
              </tr>
              <tr>
                <td><a href="https://www.connectfund.org/" target="_blank" rel="noreferrer">Connect Fund</a></td>
                <td>Medical funding support</td>
              </tr>
              <tr>
                <td><a href="https://www.foriaclinic.com/" target="_blank" rel="noreferrer">Foria Clinic</a></td>
                <td>Virtual healthcare services</td>
              </tr>
              <tr>
                <td><a href="https://www.ohrc.on.ca/en" target="_blank" rel="noreferrer">Ontario Human Rights Commission</a></td>
                <td>Human rights advocacy and support</td>
              </tr>
              <tr>
                <td><a href="https://www.halco.org/" target="_blank" rel="noreferrer">HIV AIDS Legal Clinic of Ontario (HALCO)</a></td>
                <td>Legal support for people living with HIV/AIDS</td>
              </tr>
            </tbody>
          </table>
          <h3 id="toronto">Toronto</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.the519.org/programs/trans-id-clinic/" target="_blank" rel="noreferrer">The 519 Trans I.D. Clinic</a></td>
                <td>I.D. clinic and legal services</td>
              </tr>
              <tr>
                <td><a href="https://www.wtcls.org/" target="_blank" rel="noreferrer">West Toronto Community Legal Services</a></td>
                <td>Legal services and support</td>
              </tr>
              <tr>
                <td><a href="https://www.maggiestoronto.org/" target="_blank" rel="noreferrer">Maggie&#39;s Toronto</a></td>
                <td>Legal support for sex workers</td>
              </tr>
              <tr>
                <td><a href="https://www.aboriginallegal.ca/" target="_blank" rel="noreferrer">Aboriginal Legal Services of Toronto</a></td>
                <td>Legal services and support for Aboriginal people</td>
              </tr>
              <tr>
                <td><a href="https://www.friendsofruby.ca/" target="_blank" rel="noreferrer">Friends of Ruby</a></td>
                <td>Social support and community resources</td>
              </tr>
              <tr>
                <td><a href="https://sherbourne.on.ca/primary-and-family-health-care/2slgbtq-health/" target="_blank" rel="noreferrer">Sherbourne Health</a></td>
                <td>Healthcare services</td>
              </tr>
            </tbody>
          </table>
          <h3 id="mississauga">Mississauga</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.mississaugalegalclinic.ca/" target="_blank" rel="noreferrer">Mississauga Legal Clinic</a></td>
                <td>Legal services and support</td>
              </tr>
            </tbody>
          </table>
          <h3 id="windsor">Windsor</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.transwellness.ca/" target="_blank" rel="noreferrer">Trans Wellness Ontario</a></td>
                <td>Peer support, groups, and community resources</td>
              </tr>
            </tbody>
          </table>
          <h3 id="hamilton">Hamilton</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://hamiltontranshealth.ca/" target="_blank" rel="noreferrer">Hamilton Trans Health Coalition</a></td>
                <td>Healthcare services</td>
              </tr>
            </tbody>
          </table>
          <h3 id="ottawa">Ottawa</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.kindspace.ca/" target="_blank" rel="noreferrer">Kindspace</a></td>
                <td>Peer support, groups, and community resources</td>
              </tr>
              <tr>
                <td><a href="https://www.centretownchc.org/trans-health" target="_blank" rel="noreferrer">Centretown Community Health Centre</a></td>
                <td>Healthcare services</td>
              </tr>
            </tbody>
          </table>
          <h3 id="kitchener-waterloo">Kitchener/Waterloo</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.ok2bme.ca/" target="_blank" rel="noreferrer">OK2BME</a></td>
                <td>Peer support, groups, and community resources</td>
              </tr>
            </tbody>
          </table>
          <h3 id="thunder-bay">Thunder Bay</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://norwestchc.org/programs-services/2slgbtqia/" target="_blank" rel="noreferrer">NorWest Community Health Centres</a></td>
                <td>Healthcare services</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/on/name">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}</Link></li>
              <li><Link href="/resources">{t("Pages.canadaWideResources", "Canada-wide resources", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
