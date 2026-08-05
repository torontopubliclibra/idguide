import { useMemo } from "react";
import { t } from "../lib/i18n";
import styles from "./ResourceList.module.css";

interface Resource {
  name: string;
  url: string;
  description?: string[] | string;
}

interface RegionalResource {
  region: string;
  resources: Resource[];
  id: string;
}

interface ResourceListProps {
  resources: Resource[];
  pageLocale: string;
  showRegionHeaders?: boolean;
  regionalResources?: RegionalResource[];
  activeTag?: string | null;
  onTagChange?: (tag: string | null) => void;
}

function normalizeDescriptions(description?: string[] | string): string[] {
  if (Array.isArray(description)) {
    return description.map((item) => item.trim()).filter(Boolean);
  }

  if (typeof description === "string") {
    return description
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

export function collectResourceTags(resources: Resource[], regionalResources: RegionalResource[] = []) {
  const tagMap = new Map<string, string>();
  const allResources = [...resources, ...regionalResources.flatMap((region) => region.resources)];

  allResources.forEach((resource) => {
    normalizeDescriptions(resource.description).forEach((tag) => {
      const normalizedTag = normalizeTag(tag);
      if (!tagMap.has(normalizedTag)) {
        tagMap.set(normalizedTag, tag);
      }
    });
  });

  return Array.from(tagMap.values()).sort((left, right) => left.localeCompare(right));
}

interface ResourceTagFiltersProps {
  tags: string[];
  pageLocale: string;
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export function ResourceTagFilters({ tags, pageLocale, activeTag, onTagChange }: ResourceTagFiltersProps) {
  const selectedTagLabel = activeTag ? tags.find((tag) => normalizeTag(tag) === activeTag) ?? null : null;

  if (tags.length === 0) {
    return null;
  }

  return (
    <div className={styles.filters}>
      <span className={styles.filterLabel}>
        {t("ResourcesPage.filterByTag", "Filter by tag", pageLocale)}
      </span>
      <div className={styles.filterButtons}>
        <button
          type="button"
          className={!activeTag ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton}
          onClick={() => onTagChange(null)}
        >
          {t("ResourcesPage.allTags", "All", pageLocale)}
        </button>
        {tags.map((tag) => {
          const normalizedTag = normalizeTag(tag);
          const isActive = activeTag === normalizedTag;

          return (
            <button
              key={normalizedTag}
              type="button"
              className={isActive ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton}
              onClick={() => onTagChange(isActive ? null : normalizedTag)}
              aria-pressed={isActive}
            >
              {tag}
            </button>
          );
        })}
      </div>
      {selectedTagLabel && (
        <p className={styles.filterSummary}>
          {t("ResourcesPage.filteredBy", "Showing results for:", pageLocale)} {selectedTagLabel}
        </p>
      )}
    </div>
  );
}

const ResourceList = ({
  resources,
  pageLocale,
  showRegionHeaders = false,
  regionalResources = [],
  activeTag = null,
  onTagChange,
}: ResourceListProps) => {
  const availableTags = useMemo(() => collectResourceTags(resources, regionalResources), [resources, regionalResources]);

  function resourceMatchesTag(resource: Resource) {
    if (!activeTag) {
      return true;
    }

    return normalizeDescriptions(resource.description).some((tag) => normalizeTag(tag) === activeTag);
  }

  function renderTags(resource: Resource) {
    const tags = normalizeDescriptions(resource.description);

    if (tags.length === 0) {
      return <span className={styles.emptyCell}>—</span>;
    }

    return (
      <div className={styles.tagList}>
        {tags.map((tag) => {
          const normalizedTag = normalizeTag(tag);
          const isActive = activeTag === normalizedTag;

          return (
            <button
              key={`${resource.name}-${normalizedTag}`}
              type="button"
              className={isActive ? `${styles.tag} ${styles.tagActive}` : styles.tag}
              onClick={() => onTagChange?.(isActive ? null : normalizedTag)}
              aria-pressed={isActive}
            >
              {tag}
            </button>
          );
        })}
      </div>
    );
  }

  function renderRows(sectionResources: Resource[]) {
    const filteredResources = sectionResources.filter(resourceMatchesTag);

    if (filteredResources.length === 0) {
      return null;
    }

    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t("ResourcesPage.title", "Title", pageLocale)}</th>
            <th>{t("ResourcesPage.url", "URL", pageLocale)}</th>
            <th>{t("ResourcesPage.tags", "Tags", pageLocale)}</th>
          </tr>
        </thead>
        <tbody>
          {filteredResources.map((resource, idx) => (
            <tr key={`${resource.name}-${idx}`}>
              <td data-label={t("ResourcesPage.title", "Title", pageLocale)} className={styles.titleCell}>
                {resource.name}
              </td>
              <td data-label={t("ResourcesPage.url", "URL", pageLocale)} className={styles.urlCell}>
                <a href={resource.url} target="_blank" rel="noreferrer">
                  {resource.url}
                </a>
              </td>
              <td data-label={t("ResourcesPage.tags", "Tags", pageLocale)}>{renderTags(resource)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  function renderRegionSection(region: RegionalResource) {
    const filteredResources = region.resources.filter(resourceMatchesTag);

    if (filteredResources.length === 0) {
      return null;
    }

    return (
      <div key={region.id} className={styles.regionSection}>
        <h3 id={region.id} className={styles.regionHeading}>
          {region.region}
        </h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{t("ResourcesPage.title", "Title", pageLocale)}</th>
              <th>{t("ResourcesPage.url", "URL", pageLocale)}</th>
              <th>{t("ResourcesPage.tags", "Tags", pageLocale)}</th>
            </tr>
          </thead>
          <tbody>
            {filteredResources.map((resource, idx) => (
              <tr key={`${resource.name}-${idx}`}>
                <td data-label={t("ResourcesPage.title", "Title", pageLocale)} className={styles.titleCell}>
                  {resource.name}
                </td>
                <td data-label={t("ResourcesPage.url", "URL", pageLocale)} className={styles.urlCell}>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.url}
                  </a>
                </td>
                <td data-label={t("ResourcesPage.tags", "Tags", pageLocale)}>{renderTags(resource)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const hasAnyResources = resources.length > 0 || regionalResources.length > 0;
  const hasVisibleRegionalResources = regionalResources.some((region) =>
    region.resources.some(resourceMatchesTag)
  );

  return (
    <div className={styles.wrapper}>
      {hasAnyResources && !showRegionHeaders && renderRows(resources)}
      {showRegionHeaders &&
        regionalResources &&
        regionalResources.length > 0 &&
        regionalResources.map(renderRegionSection)}
      {showRegionHeaders && !hasVisibleRegionalResources && (
        <p className={styles.emptyState}>
        </p>
      )}
    </div>
  );
};

export default ResourceList;
