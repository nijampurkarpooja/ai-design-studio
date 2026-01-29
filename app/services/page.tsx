import { StatusPage } from "@/app/components/ui/status-page";

export default function ServicesPage() {
  return (
    <StatusPage
      title="Services"
      description="We're working on something great. Stay tuned!"
      primaryAction={{ label: "Back to Home", href: "/" }}
    />
  );
}
