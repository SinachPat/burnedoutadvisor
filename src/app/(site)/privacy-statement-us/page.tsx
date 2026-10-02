import type { Metadata } from "next";
import { LegalPage, PortNotice } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Privacy Statement (US)" };

// Long, Complianz-generated, with supplements for 20 US states (see docs/CONTENT.md §5).
// Port the text verbatim (or regenerate it for the new stack's actual cookies and processors) before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Statement (US)" updated="August 11, 2026">
      <PortNotice source="burnedoutadvisor.com/privacy-statement-us" />
    </LegalPage>
  );
}
