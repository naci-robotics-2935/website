import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Community",
  description: `${site.teamName} in the community: events, partnerships, and the teams we work with.`,
};

export default function Community() {
  return (
    <>
      <PageHeader
        title="Community"
        intro={`Robotics in ${site.location} is bigger than one team. Here is where we show up and who we work with.`}
      />

      <section className="py-16">
        <Container className="max-w-3xl space-y-6">
          <p className="leading-relaxed text-muted">
            TODO: write a short section about the team&apos;s place in the
            community. Which other teams you work with, what events you attend,
            and how people can get involved.
          </p>
          <Link
            href="/community/events"
            className="inline-block rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            See Our Events
          </Link>
        </Container>
      </section>
    </>
  );
}
