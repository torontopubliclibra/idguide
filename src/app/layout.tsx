import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopBar from "./components/topBar";
import Footer from "./components/footer";
import Analytics from "./components/Analytics";
import { Suspense } from "react";
import { getLocaleFromHost } from "./lib/getLocale";
import { headers as nextHeaders } from "next/headers";
import { t } from "./lib/i18n";

export const metadata: Metadata = {
  title: "I.D. Guide",
  description:
    "Navigating name and gender marker changes can feel overwhelming, but I.D. Guide is here to help—offering step-by-step guides, downloadable forms, and resources to support you every step of the way.",
  keywords: [
    "Trans I.D.", "TG I.D.", "I.D. Guide", "ID Guide", "name change", "legal name change", "change of name", "name change Ontario", "name change Alberta", "name change Manitoba", "change name Ontario", "change name Alberta", "change name Manitoba", "how to change name Ontario", "how to change name Alberta", "how to change name Manitoba", "gender marker", "sex marker", "gender marker change", "identity documents", "ID", "Canada", "Ontario", "Alberta", "Manitoba", "British Columbia", "Quebec", "Saskatchewan", "Nova Scotia", "New Brunswick", "trans", "transgender", "trans technology", "non-binary", "Two-Spirit", "legal forms", "passport", "health card", "birth certificate", "driver's license", "photo I.D.", "permanent resident", "PR card", "permanent residency", "social insurance", "CRA", "LGBTQ", "step-by-step guides", "accessible resources", "French name change", "French resources", "Francophone", "French language forms", "name change French", "changer de nom", "changer de nom Ontario", "changer de nom Alberta", "changer de nom Manitoba", "comment changer de nom Ontario", "comment changer de nom Alberta", "comment changer de nom Manitoba", "documents d'identité", "transgenre", "non-binaire", "Deux-Esprits", "ressources accessibles", "formulaires juridiques", "guide étape par étape",
    "Newfoundland and Labrador", "Prince Edward Island", "Yukon", "Northwest Territories", "Nunavut", "legal gender change", "gender change Canada", "gender change Ontario", "gender change Alberta", "gender change Manitoba", "change gender marker", "change sex designation", "driver's licence", "photo ID", "provincial ID", "citizenship card", "immigration documents", "status card", "Indian status", "birth registration", "LGBTQ2S", "LGBTQIA", "queer", "gender diverse", "gender nonconforming", "intersex", "ally", "support", "advocacy", "legal help", "legal support", "accessible guides", "plain language", "easy read", "step-by-step instructions", "printable forms", "downloadable guides", "legal transition", "transition documents", "document update", "update ID", "update documents", "update records", "update legal name", "update gender marker",
    "name changes", "legal name changes", "Application for Change of Name (DVS3132)", "Resources", "Healthcare", "Legal support", "Peer groups", "2SLGBTQ+", "identity documents", "gender marker changes", "Dana Rosamund Teagle", "community", "resource", "sitemap", "disclaimers", "terms of service", "accessibility", "privacy policy", "about", "contact", "donate", "funding", "sponsors", "acknowledgements", "contributors", "updates", "maintenance", "website", "project", "LGBTQ+", "LGBTQ2S+", "LGBTQ2-Spirit", "education", "resources", "guides", "workshops", "presentations", "facilitation", "Dana Teagle", "designer", "web developer", "software developer", "Toronto", "name change workshops", "gender marker workshops", "Canadian", "Birth", "certificates", "birth record", "birth certificate update", "parental information", "health", "taxes", "revenue", "T4", "T1", "Canada Revenue Agency", "forms", "downloads", "presentation materials", "applications", "Guides", "birth certificates", "health cards", "driver's licenses", "I.D. cards", "passports", "permanent resident cards", "Social Insurance Registry", "cards", "OHIP", "health insurance", "medical insurance", "healthcare", "hospital", "doctor", "medical", "Driver's", "licenses", "I.D.", "ID cards", "X marker", "driving", "transportation", "application for an adult legal change of name", "Name", "changes", "application to change name", "legal name", "Application for Change of Sex Designation on a Birth Registration of an Adult (11325e)", "Statutory Declaration for a Change of Sex Designation (11324e)", "Service Ontario", "ServiceOntario", "Registrar General", "Ontario health insurance plan", "change of information form", "Ontario photo card", "application to change an adult's name", "Ontario name change application", "PR", "PR cards", "permanent residence", "permanent resident cards", "temporary resident", "temporary residence", "immigration", "Government of Canada", "Privacy", "policy", "data", "information", "collection", "use", "Social Insurance Number", "Social Security Number", "citizen", "work", "government programs", "benefits", "Service Canada", "ServiceCanada", "start", "get started", "training", "workplaces", "unions", "community organizations", "organizing", "events", "groups", "LGBT YouthLine", "Windsor Hackforge", "CUPE 3902", "CUPE 3903", "CAMH"
  ],
  openGraph: {
    title: "I.D. Guide",
    description:
      "Navigating name and gender marker changes can feel overwhelming, but I.D. Guide is here to help—offering step-by-step guides, downloadable forms, and resources to support you every step of the way.",
    url: "https://idguide.ca/",
    siteName: "I.D. Guide",
    images: [
      {
        url: "https://idguide.ca/idguide.png",
        width: 1200,
        height: 630,
        alt: "Stacks of paperwork with colourful paperclips",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I.D. Guide",
    description:
      "Navigating name and gender marker changes can feel overwhelming, but I.D. Guide is here to help—offering step-by-step guides, downloadable forms, and resources to support you every step of the way.",
    site: "https://idguide.ca/",
    creator: "Dana Rosamund Teagle",
    images: ["https://idguide.ca/idguide.png"],
  },
  alternates: {
    canonical: "https://idguide.ca/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await nextHeaders();
  const host = hdrs.get("host") || "";
  const locale = getLocaleFromHost(host);
  
  return (
    <html lang={locale} dir="ltr" className={locale}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y8RN4Q791P"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y8RN4Q791P', { page_path: window.location.pathname });
          `}
        </Script>
        <link
          rel="preload"
          href="/Special_Gothic/SpecialGothic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Special_Gothic_Expanded_One/SpecialGothicExpandedOne.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href="https://idguide.ca/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
      </head>
      <body>
        <a
          href="#main"
          className="skip-link"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          {t('HomePage.skipToMain', 'Skip to main content', locale)}
        </a>
        <Suspense>
          <Analytics />
        </Suspense>
        <TopBar locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}