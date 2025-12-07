import Link from 'next/link';
import styles from "./page.module.css";

export default function SIN() {
  return (
    <div className="page">
      <main className={styles.sin}>
        <h2 className="page-title">Social Insurance Registry</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>Jump to:</p>
            <ul>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#important-considerations">Important considerations</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="process">Process</h3>
          <p>By law, you must update your SIN (Social Insurance Number) record when you change your name. To do this you will need to submit an application either online, by mail, or in person.</p>
          <p>There are several documents required for this process, which may vary greatly depending on your citizenship/residency. We recommend visiting the online portal for the requirement and submission guidelines.</p>
          <p>Visit the <Link href="https://www.canada.ca/en/employment-social-development/services/sin/receiving-updating" target="_blank" rel="noreferrer">Service Canada SIN portal</Link> for details.</p>

          <h3 id="important-considerations">Important considerations</h3>
          <p>If you are updating your sex designation, you may now choose an X marker or choose to not declare your gender. Service Canada will add a note to your record with your choice.</p>
          <p>However, please note: Service Canada has stated for the last 4+ years that until their computer systems are upgraded to register this information, &quot;male&quot; or &quot;female&quot; will still appear on your SIN record.</p>
        <hr/>
          <h3 id="sources">Sources</h3>
          <ul>
            <li><Link href="https://www.canada.ca/en/employment-social-development/services/sin/receiving-updating" target="_blank" rel="noreferrer">Government of Canada - Receiving and updating your SIN</Link></li>
          </ul>
          <hr/>
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/cra">Canada Revenue Agency</Link></li>
              <li><Link href="/passport">Canadian passports</Link></li>
              <li><Link href="/pr">Permanent residency cards</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
