import { StatusPage } from "@/app/components/ui/status-page";

export default function WorkPage() {
  return (
    <StatusPage
      title="Work"
      description={
        <span className="inline-block text-text-secondary font-medium text-base leading-relaxed sm:text-lg max-w-lg mx-auto">
          We&apos;re working on something great. Stay tuned!
        </span>
      }
      primaryAction={{ label: "Back to Home", href: "/" }}
    />
  );
}
