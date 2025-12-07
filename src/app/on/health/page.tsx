import Link from 'next/link';
import styles from "./page.module.css";

export default function OnHealth() {
  return (
    <div className="page">
      <main className={styles.health}>
        <h2 className="page-title">Ontario health cards</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>

          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#important-considerations">Important considerations</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="process">Process</h3>
          <p>There is no fee to get a new Ontario health card.</p>
          <p>To change your name, visit a ServiceOntario location and bring a completed <Link href="/downloads#on-health">Change of Information form (0280-82e)</Link> plus an original copy of one of the following:</p>
          <ol>
            <li><Link href="/birth-certificates">Canadian birth certificate</Link></li>
            <li>Canadian change of name certificate (such as the one you get after an <Link href="/name-changes">Ontario name change</Link>)</li>
            <li>Citizenship or immigration status document in your new name</li>
          </ol>
          <p>Since June 2016, Ontario health cards no longer display sex designation.</p>

          <h3 id="important-considerations">Important considerations</h3>
          <h4>French language characters</h4>
          <p>Since August 2022, you can add French language characters to your name on your Ontario health card. To do this, visit ServiceOntario with documents that show your legal name with those characters. If your citizenship or immigration document doesn&#39;t show your name with French characters, you may be able to use another proof of residency or identity document.</p>

          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><Link href="https://www.ontario.ca/page/replace-cancel-or-change-information-your-health-card#section-3" target="_blank" rel="noreferrer">ServiceOntario - Replace, cancel or change information on your health card</Link></li>
          </ul>
          <hr />

          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/on/name">Ontario legal name changes</Link></li>
              <li><Link href="/on/birth">Ontario birth certificates</Link></li>
              <li><Link href="/on/id">Ontario driver&#39;s licenses & photo cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}