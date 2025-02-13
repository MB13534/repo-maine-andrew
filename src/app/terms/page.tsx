import StaticPage from "@/components/StaticPage";
import { termsData } from "@/config/terms";

export const metadata = termsData.metadata;

export default function TermsPage() {
  return <StaticPage {...termsData} />;
}
