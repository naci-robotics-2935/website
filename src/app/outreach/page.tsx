import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import outreach from "@content/outreach.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Outreach",
  description: site.about,
};

export default function Outreach() {
  return (
    <>
      <PageHeader
        eyebrow="Outreach"
        title={outreach.heading}
        intro={outreach.subheading}
      />

      <section className="border-b border-border py-20">
        <Container className="space-y-20">
          {outreach.events.map((event, i) => (
            <article
              key={event.title}
              className={`grid gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Placeholder label={`${event.title} photo`} ratio="4/3" />
              <div>
                <Eyebrow>Outreach</Eyebrow>
                <h2 className="display mt-4 text-3xl">{event.title}</h2>
                <p className="mt-5 text-muted">{event.description}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>About {site.teamName}</Eyebrow>
            <Link
              href="/outreach/more"
              className="mt-6 inline-block text-sm text-accent transition-opacity hover:opacity-80"
            >
              See more outreach
            </Link>
          </div>
          <p className="text-muted">{site.about}</p>
        </Container>
      </section>
    </>
  );
}
