'use client'

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { t } from "../lib/i18n";

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
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.start", undefined, pageLocale)} | ${t("Site.name", undefined, pageLocale)}`;
  }, [pageLocale]);

  const [toggles, setToggles] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('idguide-toggles');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore parse error, fall back to default
        }
      }
    }
    return {
      name: true,
      gender: true,
      alberta: false,
      manitoba: false,
      ontario: false,
      citizen: true,
      pr: false,
    };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('idguide-toggles', JSON.stringify(toggles));
    }
  }, [toggles]);

  function handleToggleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setToggles((prevToggles: typeof toggles) => {
      if (name === 'citizen' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          pr: false,
        };
      }
      if (name === 'pr' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          citizen: false,
        };
      }
      if (name === 'alberta' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          ontario: false,
          manitoba: false,
        };
      }
      if (name === 'manitoba' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          ontario: false,
          alberta: false,
        };
      }
      if (name === 'ontario' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          alberta: false,
          manitoba: false,
        };
      }
      return {
        ...prevToggles,
        [name]: checked,
      };
    });
  }

  return (
    <div className="page">
      <main className={styles.start}>
        <h2 className="page-title">{t("Pages.start", undefined, pageLocale)}</h2>
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
            {toggles.name && !toggles.ontario && !toggles.alberta && !toggles.manitoba && (
              <li>
                <Link href="/name" target="_blank">{t("StartPage.action.changeLegalName", undefined, pageLocale)}</Link>
              </li>
            )}
            {toggles.name && toggles.ontario && (
              <li>
                <Link href="/on/name" target="_blank">{t("StartPage.action.changeLegalNameOntario", undefined, pageLocale)}</Link>
              </li>
            )}
            {toggles.name && toggles.alberta && (
              <li>
                <Link href="/ab/name" target="_blank">{t("StartPage.action.changeLegalNameAlberta", undefined, pageLocale)}</Link>
              </li>
            )}
            {toggles.name && toggles.manitoba && (
              <li>
                <Link href="/mb/name" target="_blank">{t("StartPage.action.changeLegalNameManitoba", undefined, pageLocale)}</Link>
              </li>
            )}
            {toggles.gender && (toggles.citizen) && (
              <li>
                <Link href="/birth" target="_blank">{t("StartPage.action.updateGenderBirthCertificate", undefined, pageLocale)}</Link>
              </li>
            )}
            {toggles.name && !toggles.ontario && (
              <li>
                <Link href="/health" target="_blank">{t("StartPage.action.updateNameHealthCard", undefined, pageLocale)}</Link>
              </li>
            )}
            {toggles.name && toggles.ontario && (
              <li>
                <Link href="/on/health" target="_blank">{t("StartPage.action.updateNameOntarioHealthCard", undefined, pageLocale)}</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && toggles.ontario && (
              <li>
                <Link href="/on/id" target="_blank">{t("StartPage.action.updateNameGenderOntarioID", undefined, pageLocale)}</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && !toggles.ontario && (
              <li>
                <Link href="/id" target="_blank">{t("StartPage.action.updateNameGenderID", undefined, pageLocale)}</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && toggles.citizen && (
              <li>
                <Link href="/passport" target="_blank">{t("StartPage.action.updateNameGenderPassport", undefined, pageLocale)}</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && toggles.pr && (
              <li>
                <Link href="/pr" target="_blank">{t("StartPage.action.updateNameGenderPR", undefined, pageLocale)}</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && (
              <li>
                <Link href="/sin" target="_blank">{t("StartPage.action.updateNameGenderSIN", undefined, pageLocale)}</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && (
              <li>
                <Link href="/cra" target="_blank">{t("StartPage.action.updateNameGenderCRA", undefined, pageLocale)}</Link>
              </li>
            )}
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
          <div className="pageNav">
            <p>{t("Site.seeAlso", undefined, pageLocale)}:</p>
            <ul>
              <li><Link href="/guides">{t("Pages.guides", undefined, pageLocale)}</Link></li>
              <li><Link href="/downloads">{t("Pages.downloads", undefined, pageLocale)}</Link></li>
              <li><Link href="/resources">{t("Pages.resources", undefined, pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}