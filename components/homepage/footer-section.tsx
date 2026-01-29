"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/app/components/ui/button";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { FooterData } from "@/types/homepage";

interface FooterSectionProps {
  data: FooterData;
  className?: string;
}

function SocialIcon({ name, href }: { name: string; href: string }) {
  const iconMap: Record<string, string> = {
    twitter: "X",
    linkedin: "in",
    instagram: "ig",
    dribbble: "db",
  };

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

export function FooterSection({ data, className }: FooterSectionProps) {
  return (
    <footer className={clsx("relative border-t border-card-border", className)}>
      <SectionContainer innerClassName="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Pre-footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <p className="mb-6 text-base leading-relaxed text-text-secondary sm:text-lg">
              {data.preFooterText}
            </p>

            <motion.div
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className="mb-8"
            >
              <Button href={data.cta.href} variant="primary" size="lg">
                {data.cta.text}
              </Button>
            </motion.div>

            <div className="mb-12 space-y-2 text-sm text-text-muted">
              <p>{data.programInfo}</p>
              <p>{data.stats}</p>
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
            {data.navLinks.map((link) => (
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
            <p className="text-xs text-text-muted">{data.copyright}</p>

            <div className="flex items-center gap-3">
              {data.socialLinks.map((social) => (
                <SocialIcon key={social.name} name={social.name} href={social.href} />
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </footer>
  );
}
