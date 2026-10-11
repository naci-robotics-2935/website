import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Text, isTodo } from "@/components/Todo";
import sponsors from "@content/sponsors.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Sponsors",
  description: `The organizations that make ${site.teamName}'s season possible, and how your company can support FRC Team ${site.teamNumber}.`,
};

export default function Sponsors() {
  return (
    <>
      <PageHeader title="Our Sponsors" intro={sponsors.intro} />

      <section className="py-16">
        <Container className="space-y-12">
          {sponsors.tiers.map((tier) => (
            <div key={tier.name}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
                {tier.name}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tier.sponsors.map((sponsor, i) => (
                  <div
                    key={i}
                    className="flex min-h-24 items-center justify-center rounded-lg border border-border bg-surface p-6 text-center"
                  >
                    {isTodo(sponsor.name) ? (
                      <span className="todo">{sponsor.name}</span>
                    ) : sponsor.url ? (
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-accent hover:underline"
                      >
                        {sponsor.name}
                      </a>
                    ) : (
                      <span className="font-semibold">{sponsor.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">
            Become A Sponsor
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Sponsoring {site.teamName} puts your name in front of our school
            and community, and it directly funds students learning engineering.
            We can put together a package that fits any budget.
          </p>
          <p className="mt-4 text-sm text-muted">
            Contact: <Text value={site.email} />
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Talk To Us
          </Link>
        </Container>
      </section>
    </>
  );
}
