
"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const downloadSections = [
  {
    id: "on-name",
    title: "Ontario name changes",
    links: [
      {
        id: "11155e",
        href: "/data/11155e.pdf",
        label: "Ontario Name Change Application",
        description: "11155e",
      },
      {
        id: "11320e",
        href: "/data/11320e.pdf",
        label: "Request for Non-Publication in The Ontario Gazette",
        description: "11320e",
      },
      {
        id: "5349e",
        href: "/data/5349e.pdf",
        label: "Requirements for a Police Record Check for a Change of Name",
        description: "5349e",
      },
    ],
    more: { href: "/on/name", label: "More about Ontario name changes" },
  },
  {
    id: "on-birth",
    title: "Ontario birth certificates",
    links: [
      {
        id: "11325e",
        href: "/data/11325e.pdf",
        label: "Ontario Birth Certificate Sex Designation Form",
        description: "11325e",
      },
      {
        id: "11324e",
        href: "/data/11324e.pdf",
        label: "Ontario Birth Certificate Sex Designation Statutory Declaration",
        description: "11324e",
      },
    ],
    more: { href: "/on/birth", label: "More about Ontario birth certificates" },
  },
  {
    id: "on-health",
    title: "Ontario health cards",
    links: [
      {
        id: "0280-82e",
        href: "/data/0280-82e.pdf",
        label: "Ontario Health Card Change of Information Form",
        description: "0280-82e",
      },
    ],
    more: { href: "/on/health", label: "More about Ontario health cards" },
  },
  {
    id: "passport",
    title: "Canadian passports",
    links: [
      {
        id: "pptc-153",
        href: "/data/pptc153.pdf",
        label: "Adult General Passport Application",
        description: "pptc-153",
      },
      {
        id: "pptc-643",
        href: "/data/pptc643.pdf",
        label: "Canadian Passport Sex Identifier Update Form",
        description: "pptc-643",
      },
    ],
    more: { href: "/passport", label: "More about Canadian passports" },
  },
  {
    id: "presentation-materials",
    title: "Presentation materials",
    links: [
      {
        id: "tg-id-1025-pdf",
        href: "/data/tg-id-1025.pdf",
        label: "Ontario TG I.D. slideshow",
        description: "PDF format",
      },
      {
        id: "tg-id-1025-odp",
        href: "/data/tg-id-1025.odp",
        label: "Ontario TG I.D. slideshow",
        description: "ODP format",
      },
      {
        id: "tg-id-1025-pptx",
        href: "/data/tg-id-1025.pptx",
        label: "Ontario TG I.D. slideshow",
        description: "PPTX format",
      },
    ],
    more: null,
  },
];

export default function Downloads() {
  return (
    <div className="page">
      <main className={styles.downloads}>
        <h2 className="page-title">Downloads</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>
            Here you&#39;ll find official forms, guides, and presentation materials to help with name changes, gender marker updates, and more. All files are free to download. If you need help finding the right document, check the related guide or <Link href="mailto:danar.teagle@gmail.com">contact us</Link> for support.
          </p>
          {downloadSections.map(section => (
            <section key={section.id}>
              <h3 id={section.id}>
                {section.title}
              </h3>
              <ul>
                {section.links.map(link => (
                  <li key={link.id} style={{margin: '1rem 0'}}>
                    <Link
                      id={link.id}
                      className="download"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{display: 'block'}}
                    >
                      <span className="link-title" style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
                        <span className="button-label">{link.label} ({link.description})</span>
                        <Image src="/download.svg" alt="download icon" width={18} height={18} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {section.more && (
                <>
                  <hr style={{marginTop: '2rem'}}/>
                  <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
                    <Link href={section.more.href} className="link" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5em'}}>
                      <span className="button-label">{section.more.label}</span>
                    </Link>
                  </div>
                </>
              )}
            </section>
          ))}
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}