import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Text } from "@/components/Todo";
import site from "@content/site.json";
import subteams from "@content/subteams.json";

export const metadata: Metadata = {
  title: "About Us",
  description: `Who we are: ${site.teamName}, FRC Team ${site.teamNumber} from ${site.schoolName} in ${site.location}.`,
};

export default function About() {
  return (
    <>
      <PageHeader title="About Us" intro={site.shortDescription} />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-4 leading-relaxed text-muted">
              <Text value={site.foundedYear} />. TODO: write two or three
              paragraphs on the team history. How the team started at{" "}
              {site.schoolName}, how it has grown, what you are proud of, and
              what the team is like to be part of.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              TODO: second paragraph. This is a good place to mention awards,
              memorable seasons, or how many students have gone on to study
              engineering.
            </p>
          </div>

          <aside className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-semibold">Team At A Glance</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Team Number</dt>
                <dd className="font-semibold">{site.teamNumber}</dd>
              </div>
              <div>
                <dt className="text-muted">School</dt>
                <dd className="font-semibold">{site.schoolName}</dd>
              </div>
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="font-semibold">{site.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Members</dt>
                <dd className="font-semibold">{site.memberCount}</dd>
              </div>
              <div>
                <dt className="text-muted">Founded</dt>
                <dd className="font-semibold">
                  <Text value={site.foundedYear} />
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">Our Subteams</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subteams.map((team) => (
              <div
                key={team.name}
                className="rounded-lg border border-border bg-background p-6"
              >
                <h3 className="font-semibold">{team.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/about/robots"
            className="mt-8 inline-block text-sm font-semibold text-accent hover:underline"
          >
            See our FRC robots &rarr;
          </Link>
        </Container>
      </section>
    </>
  );
}
