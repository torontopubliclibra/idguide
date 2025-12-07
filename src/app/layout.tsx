import type { Metadata } from "next";
import { Special_Gothic, Special_Gothic_Expanded_One } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topBar";
import Footer from "./components/footer";

const specialGothic = Special_Gothic({
  variable: "--font-special-gothic",
  subsets: ["latin"],
  weight: "variable",
});

const specialGothicExpanded = Special_Gothic_Expanded_One({
  variable: "--font-special-gothic-expanded-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "I.D. Guide | Helping you navigate name and gender marker changes",
  description:
    "Free, step-by-step guides, official forms, and resources for updating legal names, gender markers, and identity documents in Ontario and across Canada. Accessible, community-driven support for trans, non-binary, Two-Spirit, and gender-diverse people.",
  keywords: [
    "name change", "gender marker", "identity documents", "Ontario", "Canada", "trans", "non-binary", "Two-Spirit", "legal forms", "passport", "health card", "birth certificate", "driver's license", "permanent resident", "social insurance", "CRA", "LGBTQ", "step-by-step guides", "accessible resources"
  ],
  openGraph: {
    title: "I.D. Guide | Helping you navigate name and gender marker changes",
    description:
      "Step-by-step guides, official forms, and resources for updating identity documents in Ontario and Canada. Community-driven support for trans, non-binary, Two-Spirit, and gender-diverse people.",
    url: "https://idguide.ca/",
    siteName: "I.D. Guide",
    images: [
      {
        url: "https://idguide.ca/og-image.png",
        width: 1200,
        height: 630,
        alt: "I.D. Guide logo and tagline",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I.D. Guide | Helping you navigate name and gender marker changes",
    description:
      "Step-by-step guides, official forms, and resources for updating identity documents in Ontario and Canada. Community-driven support for trans, non-binary, Two-Spirit, and gender-diverse people.",
    site: "@danateagle",
    creator: "@danateagle",
    images: ["https://idguide.ca/og-image.png"],
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
      <body className={`${specialGothic.variable} ${specialGothicExpanded.variable}`}> 
        <a href="#main" className="skip-link" style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to main content</a>
        <TopBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
