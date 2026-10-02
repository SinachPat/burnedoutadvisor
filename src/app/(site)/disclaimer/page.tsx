import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Disclaimer" };

// TODO: the live copy refers to "forums" and to a "terms of use" page at burnedout.xyz/terms. Neither exists here;
// link to /terms-and-conditions once it has content.
export default function DisclaimerPage() {
  const email = site.legal.email;

  return (
    <LegalPage title="Disclaimer">
      <p>
        BurnedOut Media is committed to keeping this website up to date and accurate. Should you nevertheless
        encounter anything that is incorrect or out of date, we would appreciate it if you could let us know. Please
        indicate where on the website you read the information. We will then look at this as soon as possible.
        {email && (
          <>
            {" "}
            Please send your response by email to: <a href={`mailto:${email}`}>{email}</a>.
          </>
        )}
      </p>
      <p>
        We are not liable for loss as a result of inaccuracies or incompleteness, nor for loss resulting from
        problems caused by or inherent to the dissemination of information through the internet, such as
        disruptions or interruptions. When using web forms, we strive to limit the number of required fields to a
        minimum. For any loss suffered as a result of the use of data, advice or ideas provided by or on behalf of
        BurnedOut Media via this website, BurnedOut Media accepts no liability.
      </p>
      <p>
        The use of the website and all its components (including forums) is subject to terms of use. The mere use of
        this website implies the knowledge and the acceptance of these terms of use.
      </p>
      <p>
        Responses and privacy inquiries submitted by email or using a web form will be treated in the same way as
        letters. This means that you can expect a response from us within a period of 1 month at the latest. In the
        case of complex requests, we will let you know within 1 month if we need a maximum of 3 months.
      </p>
      <p>
        Any personal data you provide us with in the context of your response or request for information will only
        be used in accordance with our <a href="/privacy-statement-us">privacy statement</a>.
      </p>
      <p>
        BurnedOut Media shall make every reasonable effort to protect its systems against any form of unlawful use.
        BurnedOut Media shall implement appropriate technical and organizational measures to this end, taking into
        account, among other things, the state of the art. However, it shall not be liable for any loss whatsoever,
        direct and/or indirect, suffered by a user of the website, which arises as a result of the unlawful use of
        its systems by a third party.
      </p>
      <p>
        BurnedOut Media accepts no responsibility for the content of websites to which or from which a hyperlink or
        other reference is made. Products or services offered by third parties shall be subject to the applicable
        terms and conditions of those third parties.
      </p>
      <p>
        Our employees shall make every effort to guarantee the accessibility of our website and to continuously
        improve it. Including for people who use special software due to a disability.
      </p>
      <p>All intellectual property rights to content on this website are vested in BurnedOut Media.</p>
      <p>
        Copying, disseminating and any other use of these materials is not permitted without the written permission
        of BurnedOut Media, except and only insofar as otherwise stipulated in regulations of mandatory law (such as
        the right to quote), unless specific content dictates otherwise.
      </p>
      <p>
        If you have any questions or problems with the accessibility of the website, please do not hesitate to
        contact us.
      </p>
    </LegalPage>
  );
}
