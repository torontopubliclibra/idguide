import Link from 'next/link';
import styles from "./page.module.css";

export default function CRA() {
  return (
    <div className="page">
      <main className={styles.about}>
        <h2 className="page-title">Canada Revenue Agency</h2>
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

          <h3 id="process">Process</h3>
          <p>You are currently able to update your information by phone, mail, or fax.</p>
          <p>For information on the different processes for submission via phone, or mail/fax, we recommend visiting the online portal for addresses and phone numbers relevant to your area.</p>

          <h3 id="requirements">Requirements</h3>
          <p>You will need to provide the CRA with a letter containing the following:</p>
          <ul>
            <li>An original or certified true copy of one of the following documents:
              <ul>
                <li>A name change certificate from a provincial/territorial vital statistics department</li>
                <li>A court order issued under an act on change of name</li>
              </ul>
            </li>
            <li>Your old and new names</li>
            <li>Your social insurance number</li>
            <li>Your signature</li>
          </ul>
        <hr/>
          <h3 id="sources">Sources</h3>
          <ul>
            <li><Link href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/should-you-tell-cra-about-your-change-name" target="_blank" rel="noreferrer">Government of Canada - Should you tell the CRA about your change of name?</Link></li>
          </ul>
                    <hr/>
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/sin">Social Insurance Registry</Link></li>
              <li><Link href="/passport">Canadian passports</Link></li>
              <li><Link href="/pr">Permanent residency cards</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
