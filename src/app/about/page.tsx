import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import site from "@content/site.json";
import mission from "@content/mission.json";
import stats from "@content/stats.json";

export const metadata: Metadata = {
  title: "About Us",
  description: mission.body,
};

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow={`About ${site.teamName}`}
        title="Discover more about our team and the work we do"
      />

      <section className="border-b border-border py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>{mission.heading}</Eyebrow>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              {mission.subheading}
            </h2>
            <ul className="mt-8 space-y-2">
              {mission.pillars.map((pillar) => (
                <li key={pillar} className="eyebrow text-muted">
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-muted">{mission.body}</p>
        </Container>
      </section>

      <section className="border-b border-border py-20">
        <Container>
          <Eyebrow>By the numbers</Eyebrow>
          <dl className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="display text-4xl text-accent sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-3 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-border py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Compliance</Eyebrow>
            <h2 className="display mt-4 text-3xl">Lab safety</h2>
          </div>
          <p className="text-muted">{mission.compliance}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <h2 className="display mt-4 text-3xl sm:text-4xl">
            Our team members
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Team photo", "Subteam photo", "Subteam photo", "Mentors"].map(
              (label, i) => (
                <Placeholder key={i} label={label} ratio="1/1" />
              ),
            )}
          </div>
          <Link
            href="/about/robots"
            className="mt-10 inline-block text-sm text-accent transition-opacity hover:opacity-80"
          >
            See our FRC robots
          </Link>
        </Container>
      </section>
    </>
  );
}
