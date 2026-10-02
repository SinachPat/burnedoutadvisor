import type { Metadata } from "next";
import { LegalPage, PortNotice } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Terms and Conditions" };

// The live page is published but empty, so there is nothing to port. These need to be written
// (and should cover the $ retreat purchase: cancellations, refunds, transfers).
export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <PortNotice source="burnedoutadvisor.com/terms-and-conditions, which is empty today" />
    </LegalPage>
  );
}
