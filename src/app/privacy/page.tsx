import Link from "next/link";
import styles from "./page.module.css";

export default function Privacy() {

  return (
    <div className="page">
      <main className={styles.privacy}>
        <h2 className="page-title">Privacy Policy</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
            <p className={styles.strong}>Last Revised: December 7, 2025</p>
            <section>
            <p>
                I.D. Guide values your privacy. This page explains what information we collect, how we use it, and your choices. We aim to keep things simple and transparent. Our website may link to other sites for your convenience. We are not responsible for the privacy practices or content of those external sites.
            </p>
            </section>
            <h3>What We Collect</h3>
            <section>
            <p>
                We do not collect or store any health or citizenship data. The only personal information we may collect is what you provide if you contact us (like your name or email address). Like most websites, we use basic analytics and cookies to understand how people use our site and to improve your experience. This may include information like your browser type, device, and general usage patterns.
            </p>
            </section>
            <h3>How We Use Information</h3>
            <section>
            <p>
                We use information you provide (such as through our email) only to respond to your inquiry or improve our site. We do not sell, rent, or share your personal information with third parties. Analytics and cookies help us understand site traffic and usage, but do not identify you personally.
            </p>
            </section>
            <h3>Security</h3>
            <section>
            <p>
                We take reasonable steps to protect any information you share with us. However, no website can guarantee complete security. Please use caution when sharing information online.
            </p>
            </section>
            <h3>Changes to This Policy</h3>
            <section>
            <p>
                We may update this policy from time to time. Any changes will be posted on this page with the revision date above.
            </p>
            </section>
            <h3>Contact Us</h3>
            <section>
            <p>
                If you have any questions about this Privacy Policy or how your information is handled, please contact us at <Link href="mailto:contact@idguide.ca">contact@idguide.ca</Link>.
            </p>
            </section>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
