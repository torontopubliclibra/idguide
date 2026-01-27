'use client'

import { useState, useEffect } from "react";
import { usePageLocale } from "../hooks/usePageLocale";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import SeeAlso from "../components/SeeAlso";
import BackToTop from "../components/BackToTop";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Checkbox = ({ id, label, checked, onChange, disabled }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" name={id} id={id} checked={checked} onChange={onChange} disabled={disabled} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default function Start() {
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.start", undefined, pageLocale)} | ${t("Site.name", undefined, pageLocale)}`;
  }, [pageLocale]);


  const defaultToggles = {
    name: true,
    gender: true,
    alberta: false,
    manitoba: false,
    ontario: false,
    citizen: true,
    pr: false,
  };

  const [toggles, setToggles] = useState<typeof defaultToggles>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('idguide-toggles');
      if (saved) {
        try {
          return { ...defaultToggles, ...JSON.parse(saved) };
        } catch {
          // ignore parse error, fall back to default
        }
      }
    }
    return defaultToggles;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('idguide-toggles', JSON.stringify(toggles));
    }
  }, [toggles]);


  function handleToggleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setToggles((prev: typeof toggles) => updateToggles(prev, name, checked));
  }

  function updateToggles(prev: typeof toggles, name: string, checked: boolean) {
    const groupMap: Record<string, string[]> = {
      province: ["alberta", "manitoba", "ontario"],
      status: ["citizen", "pr"],
    };
    if (groupMap.province.includes(name) && checked) {
      return {
        ...prev,
        alberta: false,
        manitoba: false,
        ontario: false,
        [name]: true,
      };
    }
    if (groupMap.status.includes(name) && checked) {
      return {
        ...prev,
        citizen: false,
        pr: false,
        [name]: true,
      };
    }
    return {
      ...prev,
      [name]: checked,
    };
  }

  return (
    <div className="page">
      <BackToTop />
      <main className={styles.start}>
        <h2 className="page-title">{t("Pages.start", undefined, pageLocale)}<Image src="/icon/start.svg" alt={t("Pages.start", "Start", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>{t("StartPage.intro", undefined, pageLocale)}</p>
          <hr/>
          <p style={{marginTop: 10}}><span className={styles.strong}>{t("StartPage.youWantTo", "You want to", pageLocale)}:</span></p>
          <ul className={styles.startList}>
            <li>
              <Checkbox id="name" label={t("StartPage.changeLegalName", "Change your legal name", pageLocale)} checked={toggles.name} onChange={handleToggleChange} />
            </li>
            <li>
              <Checkbox id="gender" label={t("StartPage.updateGenderMarker", "Update your gender marker", pageLocale)} checked={toggles.gender} onChange={handleToggleChange} />
            </li>
          </ul>
          <p><span className={styles.strong}>{t("StartPage.youLiveIn", "You live in", pageLocale)}:</span></p>
          <ul className={styles.startList}>
              <li>
                <Checkbox id="alberta" label={t("Site.alberta", "Alberta", pageLocale)} checked={toggles.alberta} onChange={handleToggleChange} />
              </li>
              <li>
                <Checkbox id="manitoba" label={t("Site.manitoba", "Manitoba", pageLocale)} checked={toggles.manitoba} onChange={handleToggleChange} />
              </li>
              <li>
                <Checkbox id="ontario" label={t("Site.ontario", "Ontario", pageLocale)} checked={toggles.ontario} onChange={handleToggleChange} />
              </li>
          </ul>
          <p><span className={styles.strong}>{t("StartPage.citizenshipStatus", "Your citizenship status is", pageLocale)}:</span></p>
          <ul className={styles.startList}>
              <li>
                <Checkbox id="citizen" label={t("StartPage.canadianCitizen", "Canadian citizen", pageLocale)} checked={toggles.citizen} onChange={handleToggleChange} />
              </li>
              <li>
                <Checkbox id="pr" label={t("StartPage.permanentResident", "Permanent resident", pageLocale)} checked={toggles.pr} onChange={handleToggleChange} />
              </li>
          </ul>
          <h3>{t("StartPage.actionPlan", "Your action plan", pageLocale)}:</h3>

          <ol className={styles.actionPlanContainer}>
            {(() => {
              const actions = [];
              if (toggles.name) {
                if (!toggles.ontario && !toggles.alberta && !toggles.manitoba) {
                  actions.push({ href: "/name", label: t("StartPage.action.changeLegalName", undefined, pageLocale) });
                }
                if (toggles.ontario) actions.push({ href: "/on/name", label: t("StartPage.action.changeLegalNameOntario", undefined, pageLocale) });
                if (toggles.alberta) actions.push({ href: "/ab/name", label: t("StartPage.action.changeLegalNameAlberta", undefined, pageLocale) });
                if (toggles.manitoba) actions.push({ href: "/mb/name", label: t("StartPage.action.changeLegalNameManitoba", undefined, pageLocale) });
              }
              if (toggles.gender && toggles.citizen) {
                actions.push({ href: "/birth", label: t("StartPage.action.updateGenderBirthCertificate", undefined, pageLocale) });
              }
              if (toggles.name) {
                if (!toggles.ontario) actions.push({ href: "/health", label: t("StartPage.action.updateNameHealthCard", undefined, pageLocale) });
                if (toggles.ontario) actions.push({ href: "/on/health", label: t("StartPage.action.updateNameOntarioHealthCard", undefined, pageLocale) });
              }
              if ((toggles.name || toggles.gender) && toggles.ontario) {
                actions.push({ href: "/on/id", label: t("StartPage.action.updateNameGenderOntarioID", undefined, pageLocale) });
              }
              if ((toggles.name || toggles.gender) && !toggles.ontario) {
                actions.push({ href: "/id", label: t("StartPage.action.updateNameGenderID", undefined, pageLocale) });
              }
              if ((toggles.name || toggles.gender) && toggles.pr) {
                actions.push({ href: "/pr", label: t("StartPage.action.updateNameGenderPR", undefined, pageLocale) });
              }
              if (toggles.name || toggles.gender) {
                actions.push({ href: "/sin", label: t("StartPage.action.updateNameGenderSIN", undefined, pageLocale) });
                actions.push({ href: "/cra", label: t("StartPage.action.updateNameGenderCRA", undefined, pageLocale) });
              }
              if ((toggles.name || toggles.gender) && toggles.citizen) {
                actions.push({ href: "/passport", label: t("StartPage.action.updateNameGenderPassport", undefined, pageLocale) });
              }
              return actions.map(({ href, label }, i) => (
                <li key={href + i}>
                  <Link href={href} target="_blank">{label}</Link>
                </li>
              ));
            })()}
          </ol>
          {!(toggles.name) && !(toggles.gender) ? (
            <ul className={styles.startList}>
              <li>
                {t("StartPage.selectCheckboxes", undefined, pageLocale)}
              </li>
            </ul>
          ) : (
            <p>
              {t("StartPage.guidesHelp", undefined, pageLocale)}
            </p>
          )}
          <hr />
          <SeeAlso pages={["guides", "downloads", "resources"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}