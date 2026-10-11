import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Community",
  description: site.about,
};

export default function Community() {
  return (
    <>
      <PageHeader eyebrow="Community" title="NACI Robotics in the community" />

      <section className="border-b border-border py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>About {site.teamName}</Eyebrow>
            <Link
              href="/community/events"
              className="mt-6 inline-block text-sm text-accent transition-opacity hover:opacity-80"
            >
              See our events
            </Link>
          </div>
          <p className="text-muted">{site.about}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Eyebrow>Out in the community</Eyebrow>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Community photo", "Community photo", "Community photo"].map(
              (label, i) => (
                <Placeholder key={i} label={label} ratio="4/3" />
              ),
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
