import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopBar from "./components/topBar";
import Footer from "./components/footer";
import Analytics from "./components/Analytics";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "I.D. Guide",
  description:
    "Navigating name and gender marker changes can feel overwhelming, but I.D. Guide is here to help—offering step-by-step guides, downloadable forms, and resources to support you every step of the way.",
  keywords: [
    "name change", "gender marker", "sex marker", "legal name change", "identity documents", "Canada", "Ontario", "Alberta", "British Columbia", "Quebec", "Saskatchewan", "Manitoba", "Nova Scotia", "New Brunswick", "trans", "trans technology", "non-binary", "Two-Spirit", "legal forms", "passport", "health card", "birth certificate", "driver's license", "permanent resident", "permanent residency", "social insurance", "CRA", "LGBTQ", "step-by-step guides", "accessible resources"
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
    site: "https://danateagle.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
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
        <a href="#main" className="skip-link" style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to main content</a>
        <Suspense>
          <Analytics />
        </Suspense>
        <TopBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
