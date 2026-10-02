import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Imprint" };

export default function ImprintPage() {
  const { entity, address, representative, email, phone } = site.legal;

  return (
    <LegalPage title="Imprint" updated="August 11, 2026">
      <h3>The owner of this website is:</h3>
      <p>
        {entity}
        <br />
        {address.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
        {email && (
          <>
            Email: <a href={`mailto:${email}`}>{email}</a>
            <br />
          </>
        )}
        {phone && <>Phone number: {phone}</>}
      </p>

      <h3>The legal representative(s) of {entity}:</h3>
      <p>{representative}</p>

      <h2>1. General</h2>
      <p>
        We are willing or obliged to participate in dispute resolution procedures before a consumer arbitration
        board.
      </p>
    </LegalPage>
  );
}
