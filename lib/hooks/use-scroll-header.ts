"use client";

import { useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD_PX = 24;

export function useScrollHeader(): boolean {
  const [isFloating, setIsFloating] = useState(false);

  const handleScroll = useCallback(() => {
    setIsFloating(window.scrollY > SCROLL_THRESHOLD_PX);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isFloating;
}
