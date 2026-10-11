import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import sponsors from "@content/sponsors.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Sponsors",
  description: sponsors.subheading,
};

export default function Sponsors() {
  return (
    <>
      <PageHeader
        eyebrow="Our sponsors"
        title={sponsors.heading}
        intro={sponsors.subheading}
      />

      <section className="border-b border-border py-20">
        <Container className="space-y-16">
          {sponsors.sponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="grid gap-8 border-b border-border pb-16 last:border-0 last:pb-0 lg:grid-cols-[280px_1fr]"
            >
              <Placeholder label={`${sponsor.name} logo`} ratio="16/9" />
              <div>
                <h2 className="display text-2xl">{sponsor.name}</h2>
                <p className="mt-4 text-muted">{sponsor.description}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Support the team</Eyebrow>
          <h2 className="display mt-4 text-3xl sm:text-4xl">
            Become a sponsor
          </h2>
          <p className="mt-6 text-muted">
            Sponsorship keeps {site.teamName} running. If your organization
            would like to support the team, get in touch at {site.email}.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Contact us
          </Link>
        </Container>
      </section>
    </>
  );
}
