import Image from "next/image";
import { Eyebrow, Section } from "@/components/ui/primitives";
import { hosts } from "@/content/home";
import { images } from "@/content/site";

export function Hosts({ id = "team" }: { id?: string }) {
  return (
    <Section id={id} tone="foam">
      <h2 className="text-4xl sm:text-5xl">{hosts.title}</h2>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
        {hosts.people.map((person) => {
          const photo = images[person.key];
          return (
            <article key={person.key} className="grid gap-6 sm:grid-cols-[11rem_1fr] sm:items-start">
              <Image
                src={photo.src}
                width={photo.w}
                height={photo.h}
                alt={person.name}
                sizes="176px"
                className="aspect-square w-44 rounded-card object-cover"
              />
              <div>
                <h3 className="text-2xl">{person.name}</h3>
                <Eyebrow className="mt-2 text-lagoon">{person.role}</Eyebrow>
                <p className="mt-4 text-slate">{person.bio}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
