import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./components/topBar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "I.D. Guide | Helping you navigate name and gender marker changes",
  description:
    "Navigating name and gender marker changes can feel overwhelming, but I.D. Guide is here to help—offering step-by-step guides, downloadable forms, and resources to support you every step of the way.",
  keywords: [
    "name change", "gender marker", "sex marker", "legal name change", "identity documents", "Canada", "Ontario", "Alberta", "British Columbia", "Quebec", "Saskatchewan", "Manitoba", "Nova Scotia", "New Brunswick", "trans", "trans technology", "non-binary", "Two-Spirit", "legal forms", "passport", "health card", "birth certificate", "driver's license", "permanent resident", "permanent residency", "social insurance", "CRA", "LGBTQ", "step-by-step guides", "accessible resources"
  ],
  openGraph: {
    title: "I.D. Guide | Helping you navigate name and gender marker changes",
    description:
      "Navigating name and gender marker changes can feel overwhelming, but I.D. Guide is here to help—offering step-by-step guides, downloadable forms, and resources to support you every step of the way.",
    url: "https://idguide.ca/",
    siteName: "I.D. Guide",
    images: [
      {
        url: "https://idguide.ca/stacks.jpg",
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
    title: "I.D. Guide | Helping you navigate name and gender marker changes",
    description:
      "Navigating name and gender marker changes can feel overwhelming, but I.D. Guide is here to help—offering step-by-step guides, downloadable forms, and resources to support you every step of the way.",
    site: "https://danateagle.com",
    creator: "Dana Rosamund Teagle",
    images: ["https://idguide.ca/stacks.jpg"],
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
      </head>
      <body> 
        <a href="#main" className="skip-link" style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to main content</a>
        <TopBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
