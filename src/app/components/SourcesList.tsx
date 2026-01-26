import React from "react";

export interface Source {
  name: string;
  url: string;
}

interface SourcesListProps {
  sources: Source[];
}

const SourcesList: React.FC<SourcesListProps> = ({ sources }) => (
  <section>
    <h3 id="sources" style={{marginBottom: '1.25rem'}}>Sources</h3>
    <ul>
      {sources.map((source, idx) => (
        <li key={idx}>
          <a href={source.url} target="_blank" rel="noreferrer">
            {source.name}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default SourcesList;