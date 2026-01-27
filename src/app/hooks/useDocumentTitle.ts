import { useEffect } from 'react';

/**
 * Custom hook to set the document title.
 * @param {string} title - The title to set for the document.
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    console.log('Setting document title:', title);
    if (title) {
      document.title = title;
    }
  }, []);
}
