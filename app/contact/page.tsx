import { StatusPage } from "@/app/components/ui/status-page";

export default function ContactPage() {
  return (
    <StatusPage
      title="Contact"
      description={
        <span className="inline-block text-text-secondary font-medium text-base leading-relaxed sm:text-lg max-w-lg mx-auto">
          We&apos;re working on something great. Stay tuned! In the meantime,
          you can reach out to us at{" "}
          <button
            type="button"
            disabled
            className="text-text-secondary font-medium text-base leading-relaxed sm:text-lg max-w-lg mx-auto underline"
          >
            hello@lumen.design
          </button>{" "}
          or{" "}
          <button
            type="button"
            disabled
            className="text-text-secondary font-medium text-base leading-relaxed sm:text-lg max-w-lg mx-auto underline"
          >
            DM us on X
          </button>
          .
        </span>
      }
      primaryAction={{ label: "Back to Home", href: "/" }}
    />
  );
}
