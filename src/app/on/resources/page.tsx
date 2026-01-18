
"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function OnResources() {
  useEffect(() => {
    document.title = "Ontario resources | I.D. Guide";
  }, []);
  return (
        <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">Ontario resources</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people in Ontario.
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
                  <td><a href="https://www.legalaid.on.ca/legal-clinics/" target="_blank" rel="noreferrer">Legal Aid Ontario</a></td>
                  <td>Legal clinics and support</td>
                  <td>Province-wide</td>
                </tr>
                <tr>
                  <td><a href="https://www.youthline.ca/" target="_blank" rel="noreferrer">LGBT YouthLine</a></td>
                  <td>Peer support, helpline, and resources</td>
                  <td>Province-wide</td>
                </tr>
                <tr>
                  <td><a href="https://www.rainbowhealthontario.ca/" target="_blank" rel="noreferrer">Rainbow Health Ontario</a></td>
                  <td>Healthcare resources</td>
                  <td>Province-wide</td>
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
                <tr>
                  <td><a href="https://www.ohrc.on.ca/en">Ontario Human Rights Commission</a></td>
                  <td>Human rights advocacy and support</td>
                  <td>Province-wide</td>
                </tr>
                <tr>
                  <td><a href="https://www.halco.org/">HIV AIDS Legal Clinic of Ontario (HALCO)</a></td>
                  <td>Legal support for people living with HIV/AIDS</td>
                  <td>Province-wide</td>
                </tr>
                <tr>
                  <td><a href="https://www.the519.org/programs/trans-id-clinic/" target="_blank" rel="noreferrer">The 519 Trans I.D. Clinic</a></td>
                  <td>I.D. clinic and legal services</td>
                  <td>Toronto</td>
                </tr>
                <tr>
                  <td><a href="https://www.wtcls.org/">West Toronto Community Legal Services</a></td>
                  <td>Legal services and support</td>
                  <td>Toronto</td>
                </tr>
                <tr>
                  <td><a href="https://www.maggiestoronto.org/">Maggie&#39;s Toronto</a></td>
                  <td>Legal support for sex workers</td>
                  <td>Toronto</td>
                </tr>
                <tr>
                  <td><a href="https://www.aboriginallegal.ca/" target="_blank" rel="noreferrer">Aboriginal Legal Services of Toronto</a></td>
                  <td>Legal services and support for Aboriginal people</td>
                  <td>Toronto</td>
                </tr>
                <tr>
                  <td><a href="https://www.friendsofruby.ca/">Friends of Ruby</a></td>
                  <td>Social support and community resources</td>
                  <td>Toronto</td>
                </tr>
                <tr>
                  <td><a href="https://sherbourne.on.ca/primary-and-family-health-care/2slgbtq-health/" target="_blank" rel="noreferrer">Sherbourne Health</a></td>
                  <td>Healthcare services</td>
                  <td>Toronto</td>
                </tr>
                <tr>
                  <td><a href="https://www.mississaugalegalclinic.ca/" target="_blank" rel="noreferrer">Mississauga Legal Clinic</a></td>
                  <td>Legal services and support</td>
                  <td>Mississauga</td>
                </tr>
                <tr>
                  <td><a href="https://www.transwellness.ca/" target="_blank" rel="noreferrer">Trans Wellness Ontario</a></td>
                  <td>Peer support, groups, and community resources</td>
                  <td>Windsor</td>
                </tr>
                <tr>
                  <td><a href="https://hamiltontranshealth.ca/" target="_blank" rel="noreferrer">Hamilton Trans Health Coalition</a></td>
                  <td>Healthcare services</td>
                  <td>Hamilton</td>
                </tr>
                <tr>
                  <td><a href="https://www.kindspace.ca/">Kindspace</a></td>
                  <td>Peer support, groups, and community resources</td>
                  <td>Ottawa</td>
                </tr>
                <tr>
                  <td><a href="https://www.centretownchc.org/trans-health" target="_blank" rel="noreferrer">Centretown Community Health Centre</a></td>
                  <td>Healthcare services</td>
                  <td>Ottawa</td>
                </tr>
                <tr>
                  <td><a href="https://www.ok2bme.ca/" target="_blank" rel="noreferrer">OK2BME</a></td>
                  <td>Peer support, groups, and community resources</td>
                  <td>Kitchener/Waterloo Region</td>
                </tr>
                <tr>
                  <td><a href="https://norwestchc.org/programs-services/2slgbtqia/" target="_blank" rel="noreferrer">NorWest Community Health Centres</a></td>
                  <td>Healthcare services</td>
                  <td>Thunder Bay</td>
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
              <li><Link href="/on/name">Ontario name change guide</Link></li>
              <li><Link href="/resources">Canada-wide resources</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
