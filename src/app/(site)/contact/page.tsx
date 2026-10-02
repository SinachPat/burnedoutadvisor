import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { ContactForm } from "@/components/forms/contact-form";
import { contactPage } from "@/content/webinar";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.body,
};

export default function ContactPage() {
  return (
    <section className="bg-foam">
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold">{contactPage.title}</h1>
          <Eyebrow className="mt-5 text-lagoon">{contactPage.kicker}</Eyebrow>
          <p className="mt-6 max-w-lg text-lg text-slate">{contactPage.body}</p>
        </div>
        <div>
          <h2 className="mb-6 text-3xl">{contactPage.formTitle}</h2>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
