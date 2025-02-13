import StaticPage from "@/components/StaticPage";
import { legalData } from "@/config/legal";

export const metadata = legalData.metadata;

export default function LegalPage() {
  return <StaticPage {...legalData} />;
}
