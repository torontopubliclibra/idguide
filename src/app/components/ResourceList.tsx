import { t } from "../lib/i18n";
import React from "react";

interface Resource {
  name: string;
  url: string;
  description?: string[];
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
}

const ResourceList: React.FC<ResourceListProps> = ({
  resources,
  pageLocale,
  showRegionHeaders = false,
  regionalResources = [],
}) => {
  return (
    <>
      {resources && resources.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>{t("ResourcesPage.organization", "Organization", pageLocale)}</th>
              <th>{t("ResourcesPage.service", "Service", pageLocale)}</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, idx) => (
              <tr key={idx}>
                <td>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.name}
                  </a>
                </td>
                <td>
                  {Array.isArray(resource.description)
                    ? resource.description.join(", ")
                    : typeof resource.description === "string"
                    ? resource.description
                    : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showRegionHeaders &&
        regionalResources &&
        regionalResources.length > 0 &&
        regionalResources.map((region, rIdx) => (
          <div key={rIdx}>
            <h3 style={{marginBottom: '1rem'}} id={region.id}>{region.region}</h3>
            <table>
              <thead>
                <tr>
                  <th>{t("ResourcesPage.organization", "Organization", pageLocale)}</th>
                  <th>{t("ResourcesPage.service", "Service", pageLocale)}</th>
                </tr>
              </thead>
              <tbody>
                {region.resources.map((resource, idx) => (
                  <tr key={idx}>
                    <td>
                      <a href={resource.url} target="_blank" rel="noreferrer">
                        {resource.name}
                      </a>
                    </td>
                    <td>
                      {Array.isArray(resource.description)
                        ? (resource.description.length > 1
                            ? resource.description.join(", ")
                            : resource.description[0])
                        : typeof resource.description === "string"
                        ? resource.description
                        : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </>
  );
};

export default ResourceList;
