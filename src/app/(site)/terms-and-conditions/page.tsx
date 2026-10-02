import type { Metadata } from "next";
import { LegalBlocks, LegalPage } from "@/components/legal/legal-page";
import { termsBlocks, termsUpdated } from "@/content/terms";

export const metadata: Metadata = { title: "Terms and Conditions" };

// Copied from the old site's terms (see src/content/terms.ts). Needs a legal review before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" updated={termsUpdated}>
      <LegalBlocks blocks={termsBlocks} />
    </LegalPage>
  );
}
