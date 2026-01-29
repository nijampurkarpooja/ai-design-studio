"use client";

import { useScrollHeader } from "@/lib/hooks/use-scroll-header";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const isFloating = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isFloating
            ? "border-b border-border bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60"
            : "border-b border-transparent bg-transparent"
        )}
        role="banner"
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-accent-purple sm:text-xl"
            aria-label="Lumen – Home"
          >
            Lumen
          </Link>
          {/* <nav
          aria-label="Main"
          className="flex flex-wrap items-center justify-end gap-1 sm:gap-2"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-hover hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </nav> */}

          <nav
            aria-label="Main"
            className="hidden flex-wrap items-center justify-end gap-1 sm:gap-2 md:flex"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-hover hover:text-text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-md p-2 text-text-secondary transition-colors hover:bg-hover hover:text-text-primary"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <div
        className={clsx(
          "fixed inset-y-0 right-0 z-40 w-full max-w-xs border-l border-border bg-background/95 shadow-lg backdrop-blur-md transition-transform duration-300 ease-out md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Main" className="flex flex-col gap-1 p-6 pt-20">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="rounded-md px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-hover hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <button
        type="button"
        onClick={closeMenu}
        className={clsx(
          "fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-label="Close menu"
        tabIndex={-1}
      />
    </>
  );
}
