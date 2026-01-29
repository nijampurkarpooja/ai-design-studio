"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD_PX = 24;

export function useScrollHeader(): boolean {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isFloating;
}
