"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/app/components/ui/button";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";

const footerData = {
  eyebrow: "Ready to get started?",
  heading: "Let's create something",
  highlightedText: "extraordinary together",
  description:
    "Launch, rebrand, or get strategic design guidance. We're here to help.",
  primaryCta: {
    text: "Start a project",
    href: "#",
  },
  secondaryCta: {
    text: "View our work",
    href: "#",
  },
  programInfo: "Lumen · 2026",
  stats: "50+ projects delivered. 98% client satisfaction.",
  navLinks: [
    { text: "Work", href: "/work" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Dribbble", href: "#", icon: "dribbble" },
  ],
  copyright: "© 2026 Lumen. All rights reserved.",
};

function SocialIcon({ name, href }: { name: string; href: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="m9.237 7.004l4.84-5.505H12.93L8.727 6.28L5.371 1.5H1.5l5.075 7.228L1.5 14.499h1.147l4.437-5.047l3.545 5.047H14.5zM7.666 8.791l-.514-.72L3.06 2.344h1.762l3.302 4.622l.514.72l4.292 6.007h-1.761z"
        />
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
        />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14-2.9h.5" />
          <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026a3.5 3.5 0 0 1 6.925-1.026" />
        </g>
      </svg>
    ),
    dribbble: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" />
          <path d="M3.07 10.875c1.7.102 6.2.195 9.08-1.035s5.358-3.492 6.208-4.21" />
          <path d="M8.625 3.654c1.409 1.3 4.482 4.61 5.625 7.896s1.566 7.326 1.827 8.476" />
          <path d="M21 12c-1.313 0-4.936-.495-8.178.928c-3.522 1.547-6.072 3.946-7.184 5.438" />
        </g>
      </svg>
    ),
  };

  // svg for twitter/x icon
  //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  // 	<path fill="currentColor" d="m9.237 7.004l4.84-5.505H12.93L8.727 6.28L5.371 1.5H1.5l5.075 7.228L1.5 14.499h1.147l4.437-5.047l3.545 5.047H14.5zM7.666 8.791l-.514-.72L3.06 2.344h1.762l3.302 4.622l.514.72l4.292 6.007h-1.761z" />
  // </svg>

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card-bg/50 text-sm font-medium text-text-secondary transition-colors hover:border-accent-purple/50 hover:bg-card-bg hover:text-text-primary"
      >
        {iconMap[name.toLowerCase()] || name.charAt(0).toUpperCase()}
      </Link>
    </motion.div>
  );
}

export function FooterSection() {
  return (
    <footer className={"relative border-t border-card-border"}>
      <SectionContainer innerClassName="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            {footerData.eyebrow ? (
              <p className="mb-4 text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
                {footerData.eyebrow}
              </p>
            ) : null}

            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {footerData.highlightedText ? (
                <HighlightedText
                  text={footerData.heading}
                  highlight={footerData.highlightedText}
                />
              ) : (
                footerData.heading
              )}
            </h2>

            {footerData.description ? (
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                {footerData.description}
              </p>
            ) : null}

            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
              >
                <Button
                  href={footerData.primaryCta.href}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {footerData.primaryCta.text}
                </Button>
              </motion.div>

              {footerData.secondaryCta?.text ? (
                <Link
                  href={footerData.secondaryCta.href}
                  className="text-sm text-text-muted transition-colors hover:text-text-secondary sm:text-base"
                >
                  {footerData.secondaryCta.text}
                </Link>
              ) : null}
            </div>

            <div className="mb-12 space-y-2 text-sm text-text-muted">
              <p>{footerData.programInfo}</p>
              <p>{footerData.stats}</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            aria-label="Footer navigation"
            className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            {footerData.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted transition-colors hover:text-text-primary"
              >
                {link.text}
              </Link>
            ))}
          </motion.nav>

          {/* Social Links and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
          >
            <p className="text-xs text-text-muted">{footerData.copyright}</p>

            <div className="flex items-center gap-3">
              {footerData.socialLinks.map((social) => (
                <SocialIcon
                  key={social.name}
                  name={social.name}
                  href={social.href}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </footer>
  );
}
