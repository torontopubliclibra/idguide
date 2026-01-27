import { useMemo } from "react";
import { marked } from "marked";

const renderer = new marked.Renderer();
renderer.link = function ({ href, title, text }) {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer"${title ? ` title="${title}"` : ''}>${text}</a>`;
};
marked.setOptions({ renderer });

export function useRenderCopy() {
  return useMemo(() => {
    return function renderCopy(md: string | undefined | null): React.ReactElement | null {
      if (!md) return null;
      return (
        <span
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          dangerouslySetInnerHTML={{ __html: marked(md) }}
        />
      );
    };
  }, []);
}
