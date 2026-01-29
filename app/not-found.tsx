import { StatusPage } from "@/app/components/ui/status-page";

export default function NotFound() {
  return (
    <StatusPage
      title="Page not found"
      description="The page you're looking for doesn't exist or has been moved."
      primaryAction={{ label: "Back to Home", href: "/" }}
    />
  );
}
