import Link from 'next/link';
import styles from "./page.module.css";

export default function Passport() {
  return (
    <div className="page">
      <main className={styles.passport}>
        <h2 className="page-title">Canadian passports</h2>
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

          <h3 id="options">Options for gender/sex identifier</h3>
          <p>There are 3 options for gender/sex identification on Canadian passports:</p>
          <ol>
            <li>F (female)</li>
            <li>M (male)</li>
            <li>X (another gender)</li>
          </ol>
				  <p>Depending on whether your supporting documents have the gender/sex identifier you want, the application process for your passport will vary.</p>

          <h3 id="process">Process</h3>
          <h4>With supporting documents</h4>
          <p>If your name or gender/sex identifier have already been changed on your proof of citizenship, you are not eligible for the Canadian passport renewal process and will need to apply for a brand new passport.</p>
          <p>You can do so by filling out the <Link href="/downloads#passport">Adult General Paspport Application (pptc-153)</Link> and providing the required proof of citizenship. Learn more about passport applications at <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/new-adult-passport/required-documents-photos" target="_blank" rel="norefferer">this link</Link>.</p>
          <p>You will not need to provide any additional documentation of your new gender/sex identifier if:</p>
          <ul>
            <li>your proof of citizenship (such as a <Link href="/on/birth">Canadian birth certificate</Link> or Canadian citizenship certificate), your proof of immigration status, or your previous passport has the gender/sex identifier that you want for your new passport</li>
            <li>your previous passport has the X marker</li>
          </ul>

				  <h4>Without supporting documents</h4>
				  <p>If your gender/sex identifier has not been updated on your proof of citizenship, you will need to provide a completed <Link href="/downloads#passport">Sex or Gender Identifier Update Request Form (pptc-643)</Link> along with your application.</p>

          <h3 id="important-considerations">Important considerations</h3>
				  <p>Unfortunately, the Government of Canada states they cannot guarantee that other countries you visit or travel through will accept the sex or gender identifier on your Canadian passport, especially in regards to the X marker, and you may still be asked to provide your sex as either male or female when travelling. Find more information at <Link href="https://travel.gc.ca/travelling/health-safety/lgbt-travel" target="_blank" rel="norefferer">this link</Link> about travelling abroad as a 2SLGBTQI+ Canadian.</p>

          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/new-adult-passport/required-documents-photos" target="_blank" rel="norefferer">Government of Canada - What you need to apply for a passport</Link></li>
            <li><Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/change-sex" target="_blank" rel="norefferer">Government of Canada - Choose or update the gender identifier on your passport or travel document</Link></li>
            <li><Link href="https://travel.gc.ca/travelling/health-safety/lgbt-travel" target="_blank" rel="norefferer">Government of Canada - Travel and your sexual orientation, gender identity, gender expression and sex characteristics</Link></li>
          </ul>
          <hr />

          <div className="pageNav">
            <p>See also: </p>
            <ul>
              <li><Link href="/on/birth">Ontario birth certificates</Link></li>
              <li><Link href="/on/health">Ontario health cards</Link></li>
              <li><Link href="/on/id">Ontario driver&apos;s licenses & photo cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}