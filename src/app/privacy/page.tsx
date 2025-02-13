import StaticPage from "@/components/StaticPage";
import { privacyData } from "@/config/privacy";

export const metadata = privacyData.metadata;

export default function PrivacyPage() {
  return <StaticPage {...privacyData} />;
}
