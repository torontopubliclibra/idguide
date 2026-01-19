'use client'

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

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
  useEffect(() => {
    document.title = 'Get started | I.D. Guide';
  }, []);

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
      if (name === 'ontario' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          alberta: false,
          manitoba: false,
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
      return {
        ...prevToggles,
        [name]: checked,
      };
    });
  }

  return (
    <div className="page">
      <main className={styles.start}>
        <h2 className="page-title">Get started</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>To get started, use the checkboxes below to customize an action plan. The steps will update automatically based on your selections.</p>
          <hr/>
          <p style={{marginTop: 10}}><span className={styles.strong}>You want to:</span></p>
          <ul className={styles.startList}>
            <li>
              <Checkbox id="name" label="Change your legal name" checked={toggles.name} onChange={handleToggleChange} />
            </li>
            <li>
              <Checkbox id="gender" label="Update your gender marker" checked={toggles.gender} onChange={handleToggleChange} />
            </li>
          </ul>
          <p><span className={styles.strong}>You live in:</span></p>
          <ul className={styles.startList}>
              <li>
                <Checkbox id="ontario" label="Ontario" checked={toggles.ontario} onChange={handleToggleChange} />
              </li>
              <li>
                <Checkbox id="alberta" label="Alberta" checked={toggles.alberta} onChange={handleToggleChange} />
              </li>
              <li>
                <Checkbox id="manitoba" label="Manitoba" checked={toggles.manitoba} onChange={handleToggleChange} />
              </li>
          </ul>
          <p><span className={styles.strong}>Your citizenship status is:</span></p>
          <ul className={styles.startList}>
              <li>
                <Checkbox id="citizen" label="Canadian citizen" checked={toggles.citizen} onChange={handleToggleChange} />
              </li>
              <li>
                <Checkbox id="pr" label="Permanent resident" checked={toggles.pr} onChange={handleToggleChange} />
              </li>
          </ul>
          <h3>Your action plan:</h3>
          <ol>
            {toggles.name && !toggles.ontario && !toggles.alberta && !toggles.manitoba && (
              <li>
                <Link href="/name" target="_blank">Change your legal name</Link>
              </li>
            )}
            {toggles.name && toggles.ontario && (
              <li>
                <Link href="/on/name" target="_blank">Change your legal name with the Ontario Office of the Registrar General</Link>
              </li>
            )}
            {toggles.name && toggles.alberta && (
              <li>
                <Link href="/ab/name" target="_blank">Change your legal name with the Alberta Vital Statistics Agency</Link>
              </li>
            )}
            {toggles.name && toggles.manitoba && (
              <li>
                <Link href="/mb/name" target="_blank">Change your legal name with the Manitoba Vital Statistics Agency</Link>
              </li>
            )}
            {toggles.gender && (toggles.citizen) && (
              <li>
                <Link href="/birth" target="_blank">Update the gender marker on your birth certificate</Link>
              </li>
            )}
            {toggles.name && !toggles.ontario && (
              <li>
                <Link href="/health" target="_blank">Update the name on your health card</Link>
              </li>
            )}
            {toggles.name && toggles.ontario && (
              <li>
                <Link href="/on/health" target="_blank">Update the name on your Ontario health card</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && toggles.ontario && (
              <li>
                <Link href="/on/id" target="_blank">Update the {toggles.name && toggles.gender ? 'name and gender marker' : toggles.name ? 'name' : 'gender marker'} on your Ontario driver&apos;s license or I.D. card</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && !toggles.ontario && (
              <li>
                <Link href="/id" target="_blank">Update the {toggles.name && toggles.gender ? 'name and gender marker' : toggles.name ? 'name' : 'gender marker'} on your driver&apos;s license or I.D. card</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && toggles.citizen && (
              <li>
                <Link href="/passport" target="_blank">Update the {toggles.name && toggles.gender ? 'name and gender marker' : toggles.name ? 'name' : 'gender marker'} on your Canadian passport</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && toggles.pr && (
              <li>
                <Link href="/pr" target="_blank">Update the {toggles.name && toggles.gender ? 'name and gender marker' : toggles.name ? 'name' : 'gender marker'} on your permanent residency card</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && (
              <li>
                <Link href="/sin" target="_blank">Update your {toggles.name && toggles.gender ? 'name and gender marker' : toggles.name ? 'name' : 'gender marker'} with the Social Insurance registry</Link>
              </li>
            )}
            {(toggles.name || toggles.gender) && (
              <li>
                <Link href="/cra" target="_blank">Update your {toggles.name && toggles.gender ? 'name and gender marker' : toggles.name ? 'name' : 'gender marker'} with the Canada Revenue Agency</Link>
              </li>
            )}
          </ol>
          <hr/>
          {!(toggles.name) && !(toggles.gender) ? (
            <ul className={styles.startList}>
              <li>
                Please select one or both checkboxes above to see your action plan.
              </li>
            </ul>
          ) : (
            <p>
              Each guide above provides step-by-step instructions, required forms, and tips to help make the process as smooth as possible.
            </p>
          )}
          <hr />
          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/downloads">Downloads</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}