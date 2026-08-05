'use client'

import { useState, useEffect } from "react";
import { usePageLocale } from "../hooks/usePageLocale";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import SeeAlso from "../components/SeeAlso";

type Goal = "name" | "gender" | "both" | null;
type Province = "alberta" | "manitoba" | "ontario" | "other" | null;
type CitizenshipStatus = "citizen" | "pr" | null;

interface StartSelections {
  goal: Goal;
  province: Province;
  status: CitizenshipStatus;
}

interface ActionItem {
  href: string;
  label: string;
}

interface ChoiceOption<Value extends string> {
  id: string;
  value: Value;
  label: string;
}

interface ChoiceStepSectionProps<Value extends string> {
  sectionId: string;
  heading: string;
  name: string;
  options: ChoiceOption<Value>[];
  selected: Value | null;
  onSelect: (value: Value) => void;
}

function ChoiceStepSection<Value extends string>({
  sectionId,
  heading,
  name,
  options,
  selected,
  onSelect,
}: ChoiceStepSectionProps<Value>) {
  return (
    <section className={styles.stepSection} aria-labelledby={sectionId}>
      <h3 id={sectionId}><span className={styles.strong}>{heading}</span></h3>
      <ul className={styles.choiceList}>
        {options.map((option) => (
          <li key={option.id}>
            <label className={styles.choiceCard + " choiceCard"} htmlFor={option.id}>
              <input
                id={option.id}
                type="radio"
                name={name}
                checked={selected === option.value}
                onChange={() => onSelect(option.value)}
              />
              <span>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

function buildActionPlan(selections: StartSelections, pageLocale: string): ActionItem[] {
  const name = selections.goal === "name" || selections.goal === "both";
  const gender = selections.goal === "gender" || selections.goal === "both";
  const onlyName = name && !gender;
  const onlyGender = gender && !name;
  const isOntario = selections.province === "ontario";
  const isAlberta = selections.province === "alberta";
  const isManitoba = selections.province === "manitoba";
  const isCitizen = selections.status === "citizen";
  const isPR = selections.status === "pr";

  const actions: ActionItem[] = [];

  if (name) {
    if (!isOntario && !isAlberta && !isManitoba) {
      actions.push({ href: "/name", label: t("StartPage.action.changeLegalName", undefined, pageLocale) });
    }
    if (isOntario) actions.push({ href: "/on/name", label: t("StartPage.action.changeLegalNameOntario", undefined, pageLocale) });
    if (isAlberta) actions.push({ href: "/ab/name", label: t("StartPage.action.changeLegalNameAlberta", undefined, pageLocale) });
    if (isManitoba) actions.push({ href: "/mb/name", label: t("StartPage.action.changeLegalNameManitoba", undefined, pageLocale) });
  }

  if (gender && isCitizen) {
    actions.push({ href: "/birth", label: t("StartPage.action.updateGenderBirthCertificate", undefined, pageLocale) });
  }

  if (name) {
    if (!isOntario) actions.push({ href: "/health", label: t("StartPage.action.updateNameHealthCard", undefined, pageLocale) });
    if (isOntario) actions.push({ href: "/on/health", label: t("StartPage.action.updateNameOntarioHealthCard", undefined, pageLocale) });
  }

  if ((name || gender) && isOntario) {
    actions.push({
      href: "/on/id",
      label: t(
        onlyGender
          ? "StartPage.action.updateGenderOntarioID"
          : onlyName
            ? "StartPage.action.updateNameOntarioID"
            : "StartPage.action.updateNameGenderOntarioID",
        undefined,
        pageLocale,
      ),
    });
  }

  if ((name || gender) && !isOntario) {
    actions.push({
      href: "/id",
      label: t(
        onlyGender
          ? "StartPage.action.updateGenderID"
          : onlyName
            ? "StartPage.action.updateNameID"
            : "StartPage.action.updateNameGenderID",
        undefined,
        pageLocale,
      ),
    });
  }

  if ((name || gender) && isPR) {
    actions.push({
      href: "/pr",
      label: t(
        onlyGender
          ? "StartPage.action.updateGenderPR"
          : onlyName
            ? "StartPage.action.updateNamePR"
            : "StartPage.action.updateNameGenderPR",
        undefined,
        pageLocale,
      ),
    });
  }

  if (name || gender) {
    actions.push({
      href: "/sin",
      label: t(
        onlyGender
          ? "StartPage.action.updateGenderSIN"
          : onlyName
            ? "StartPage.action.updateNameSIN"
            : "StartPage.action.updateNameGenderSIN",
        undefined,
        pageLocale,
      ),
    });
    actions.push({
      href: "/cra",
      label: t(
        onlyGender
          ? "StartPage.action.updateGenderCRA"
          : onlyName
            ? "StartPage.action.updateNameCRA"
            : "StartPage.action.updateNameGenderCRA",
        undefined,
        pageLocale,
      ),
    });
  }

  if ((name || gender) && isCitizen) {
    actions.push({
      href: "/passport",
      label: t(
        onlyGender
          ? "StartPage.action.updateGenderPassport"
          : onlyName
            ? "StartPage.action.updateNamePassport"
            : "StartPage.action.updateNameGenderPassport",
        undefined,
        pageLocale,
      ),
    });
  }

  return actions;
}

export default function Start() {
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.start", undefined, pageLocale)} | ${t("Site.name", undefined, pageLocale)}`;
  }, [pageLocale]);

  const defaultSelections: StartSelections = {
    goal: null,
    province: null,
    status: null,
  };

  const [selections, setSelections] = useState<StartSelections>(() => {
    if (typeof window === 'undefined') return defaultSelections;
    const saved = window.localStorage.getItem('idguide-start-selections');
    if (saved) {
      try {
        return { ...defaultSelections, ...JSON.parse(saved) };
      } catch {
        // ignore parse error, keep defaults
      }
    }
    return defaultSelections;
  });
  const [hasHydratedSelections] = useState<boolean>(true);

  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (typeof window === 'undefined' || !hasHydratedSelections) return;
    window.localStorage.setItem('idguide-start-selections', JSON.stringify(selections));
  }, [selections, hasHydratedSelections]);

  const canProceed =
    (step === 1 && Boolean(selections.goal)) ||
    (step === 2 && Boolean(selections.province)) ||
    (step === 3 && Boolean(selections.status)) ||
    step === 4;

  const actionPlan = buildActionPlan(selections, pageLocale);

  const goalOptions: ChoiceOption<Exclude<Goal, null>>[] = [
    { id: "goal-both", value: "both", label: t("StartPage.changeNameAndGender", "Change my legal name and gender marker", pageLocale) },
    { id: "goal-name", value: "name", label: t("StartPage.changeLegalName", "Change your legal name", pageLocale) },
    { id: "goal-gender", value: "gender", label: t("StartPage.updateGenderMarker", "Update your gender marker", pageLocale) },
  ];

  const provinceOptions: ChoiceOption<Exclude<Province, null>>[] = [
    { id: "province-ontario", value: "ontario", label: t("Site.ontario", "Ontario", pageLocale) },
    { id: "province-manitoba", value: "manitoba", label: t("Site.manitoba", "Manitoba", pageLocale) },
    { id: "province-alberta", value: "alberta", label: t("Site.alberta", "Alberta", pageLocale) },
    { id: "province-other", value: "other", label: t("StartPage.otherProvinceTerritory", "Another province or territory", pageLocale) },
  ];

  const statusOptions: ChoiceOption<Exclude<CitizenshipStatus, null>>[] = [
    { id: "status-citizen", value: "citizen", label: t("StartPage.canadianCitizen", "Canadian citizen", pageLocale) },
    { id: "status-pr", value: "pr", label: t("StartPage.permanentResident", "Permanent resident", pageLocale) },
  ];

  function goNext() {
    if (!canProceed || step >= 4) return;
    setStep((prev) => Math.min(prev + 1, 4));
  }

  function goBack() {
    if (step <= 1) return;
    setStep((prev) => Math.max(prev - 1, 1));
  }

  function resetWizard() {
    setSelections(defaultSelections);
    setStep(1);
  }

  return (
    <div className="page">
      <main className={styles.start}>
        <h2 className="page-title">{t("Pages.start", undefined, pageLocale)}<Image src="/icon/start.svg" alt={t("Pages.start", "Start", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={`main ${styles.main}`}>
          {step < 4 && (
            <>
              <p>{t("StartPage.introWizard", "Answer three quick questions to build your personalized action plan.", pageLocale)}</p>
              <p className={styles.stepStatus}>
                {t("StartPage.stepLabel", "Step", pageLocale)} {step} {t("StartPage.ofLabel", "of", pageLocale)} 3
              </p>
            </>
          )}

          {step === 1 && (
            <ChoiceStepSection
              sectionId="start-step-1"
              heading={t("StartPage.imLookingTo", "I'm looking to:", pageLocale)}
              name="goal"
              options={goalOptions}
              selected={selections.goal}
              onSelect={(goal) => setSelections((prev) => ({ ...prev, goal }))}
            />
          )}

          {step === 2 && (
            <ChoiceStepSection
              sectionId="start-step-2"
              heading={t("StartPage.selectProvince", "Select your province:", pageLocale)}
              name="province"
              options={provinceOptions}
              selected={selections.province}
              onSelect={(province) => setSelections((prev) => ({ ...prev, province }))}
            />
          )}

          {step === 3 && (
            <ChoiceStepSection
              sectionId="start-step-3"
              heading={t("StartPage.selectCitizenshipStatus", "Select your citizenship status:", pageLocale)}
              name="status"
              options={statusOptions}
              selected={selections.status}
              onSelect={(status) => setSelections((prev) => ({ ...prev, status }))}
            />
          )}

          {step === 4 && (
            <section className={styles.stepSection} aria-labelledby="start-step-4">
              <h3 id="start-step-4" style={{ marginTop: 0 }}>{t("StartPage.actionPlan", "Your action plan", pageLocale)}:</h3>
              <ol className={styles.actionPlanContainer + " actionPlanContainer"}>
                {actionPlan.map(({ href, label }, i) => (
                  <li key={href + i}>
                    <Link href={href} target="_blank">{label}</Link>
                  </li>
                ))}
              </ol>
              <p>{t("StartPage.guidesHelp", undefined, pageLocale)}</p>
            </section>
          )}

          <div className={styles.actionsRow}>
            <button type="button" className={styles.secondaryButton + " actionButton"} onClick={goBack} disabled={step === 1}>
              {t("StartPage.back", "Back", pageLocale)}
            </button>
            {step < 4 && (
              <button type="button" className={styles.primaryButton + " actionButton"} onClick={goNext} disabled={!canProceed}>
                {t("StartPage.next", "Next", pageLocale)}
              </button>
            )}
            {step === 4 && (
              <button type="button" className={styles.primaryButton + " actionButton"} onClick={resetWizard}>
                {t("StartPage.startOver", "Start over", pageLocale)}
              </button>
            )}
          </div>

          <SeeAlso pages={["guides", "downloads", "resources"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
