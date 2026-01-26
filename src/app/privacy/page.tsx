"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";

export default function Privacy() {

  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.privacy", "Privacy policy", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <main className={styles.privacy}>
        <h2 className="page-title">{t("Pages.privacy", "Privacy policy", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
            <section>
            <p>
                I.D. Guide values your privacy. This page explains what information we collect, how we use it, and your choices. We aim to keep things simple and transparent. Our website may link to other sites for your convenience. We are not responsible for the privacy practices or content of those external sites.
            </p>
            </section>
            <h4>What We Collect</h4>
            <section>
            <p>
                We do not collect or store any user data. The only personal information we may collect is what you provide if you contact us (like your name or email address). Like most websites, we use basic analytics and cookies to understand how people use our site and to improve your experience. This may include information like your browser type, device, and general usage patterns.
            </p>
            </section>
            <h4>How We Use Information</h4>
            <section>
            <p>
                We use the information you provide (such as through our email) only to respond to your inquiry or improve our site. We do not sell, rent, or share your personal information with third parties. Analytics and cookies help us understand site traffic and usage, but do not identify you personally. You can disable cookies through your browser settings, but this may affect your experience on our site.
            </p>
            </section>
            <h4>Security</h4>
            <section>
            <p>
                We take reasonable steps to protect any information you share with us. However, no website can guarantee complete security. Please use caution when sharing any information online or when using insecure networks and public devices.
            </p>
            </section>
            <h4>Changes to This Policy</h4>
            <section>
            <p>
                We may update this policy from time to time. Any changes will be posted on this page with the revision date above.
            </p>
            </section>
            <h4>Contact Us</h4>
            <section>
            <p>
                If you have any questions about this Privacy Policy or how your information is handled, please contact us at <Link href="mailto:contact@idguide.ca">contact@idguide.ca</Link>.
            </p>
            </section>
        </div>
        <div className="stacks"></div>
        <LastUpdated page="privacy" pageLocale={pageLocale} />
      </main>
    </div>
  );
}
