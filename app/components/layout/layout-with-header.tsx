"use client";

import { SiteHeader } from "./site-header";

interface LayoutWithHeaderProps {
  children: React.ReactNode;
}

export function LayoutWithHeader({ children }: LayoutWithHeaderProps) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
