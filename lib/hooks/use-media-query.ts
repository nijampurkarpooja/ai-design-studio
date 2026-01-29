"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleChange = () => setMatches(media.matches);

    const media = window.matchMedia(query);
    if (media.matches !== matches) handleChange();
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [query, matches]);

  return matches;
}
