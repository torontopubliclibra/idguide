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
      document.title = 'Start | I.D. Guide';
    }, []);
  const [toggles, setToggles] = useState({
    name: true,
    gender: true,
    birthOn: false,
    citizen: false,
    pr: false,
  });

  function handleToggleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setToggles((prevToggles) => {
      if (name === 'birthOn' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          citizen: true,
          pr: false,
        };
      }
      if (name === 'citizen' && !checked) {
        return {
          ...prevToggles,
          [name]: checked,
          birthOn: false,
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
        <h2 className="page-title">Star</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>To get started, use the checkboxes below to customize an action plan. The steps will update automatically based on your selections.</p>
          <br />
          <p><span className={styles.strong}>I want to:</span></p>
          <ul>
            <li>
              <Checkbox id="name" label="Change my legal name in Ontario" checked={toggles.name} onChange={handleToggleChange} />
            </li>
            <li>
              <Checkbox id="gender" label="Update my gender marker" checked={toggles.gender} onChange={handleToggleChange} />
            </li>
          </ul>
          <p><span className={styles.strong}>My citizenship status:</span></p>
          <ul>
            {
              ((toggles.name) || (toggles.gender)) && !(toggles.pr) ? (
              <li>
                <Checkbox id="citizen" label="Canadian citizen" checked={toggles.citizen} onChange={handleToggleChange} />
              </li>
            ) : (
              <li style={{filter: 'opacity(0.5)'}}>
                <Checkbox id="citizen" label="Canadian citizen" checked={toggles.citizen} onChange={handleToggleChange} disabled />
              </li>
              )
            }
            {
              ((toggles.name) || (toggles.gender)) && !(toggles.pr) ? (
                <li>
                  <Checkbox id="birthOn" label="Canadian citizen with an Ontario birth certificate" checked={toggles.birthOn} onChange={handleToggleChange} />
                </li>
              ) : (
                <li style={{filter: 'opacity(0.5)'}}>
                  <Checkbox id="birthOn" label="Canadian citizen with an Ontario birth certificate" checked={toggles.birthOn} onChange={handleToggleChange} />
                </li>
              )
            }
            {
              ((toggles.name) || (toggles.gender)) && !(toggles.citizen) ? (
              <li>
                <Checkbox id="pr" label="Permanent resident" checked={toggles.pr} onChange={handleToggleChange} />
              </li>
            ) : (
              <li style={{filter: 'opacity(0.5)'}}>
                <Checkbox id="pr" label="Permanent resident" checked={toggles.pr} onChange={handleToggleChange} disabled />
              </li>
              )
            }
          </ul>
          <h3>Your action plan:</h3>
          <ol>
            {
              (toggles.name) ? (
                <li>
                  <Link href="/on/name">Change your legal name with the Ontario government</Link>
                </li>
              ) : null
            }
            {
              (toggles.gender) && (toggles.birthOn)? (
                <li>
                  <Link href="/on/birth">Update the gender marker on your Ontario birth certificate</Link>
                </li>
              ) : null
            }
            {
              (toggles.name) ? (
                <li>
                  <Link href="/on/health">Update the name on your Ontario health card</Link>
                </li>
              ) : null
            }
            {
               ((toggles.name) || (toggles.gender)) ? (
                <li>
                  <Link href="/on/id">Update the { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } on your Ontario driver&apos;s license or photo card</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) && (toggles.citizen) ? (
                <li>
                  <Link href="/passport">Update the { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } on your Canadian passport</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) && (toggles.pr) ? (
                <li>
                  <Link href="/pr">Update the { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } on your Canadian permanent residency card</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) ? (
                <li>
                  <Link href="/sin">Update your { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } with the Social Insurance registry</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) ? (
                <li>
                  <Link href="/cra">Update your { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } with the Canada Revenue Agency</Link>
                </li>
              ) : null
            }
          </ol>
          {
            !(toggles.name) && !(toggles.gender) ? (
              <ul>
                <li>
                  Please select one or both checkboxes above to see your action plan.
                </li>
              </ul>
            ) : <p>
                Each guide above provides step-by-step instructions, required forms, and tips to help make the process as smooth as possible.
              </p>
          }
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}