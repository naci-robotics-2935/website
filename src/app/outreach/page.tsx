import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Text } from "@/components/Todo";
import outreach from "@content/outreach.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Outreach",
  description: `How ${site.teamName} brings robotics to students and the wider ${site.location} community.`,
};

export default function Outreach() {
  return (
    <>
      <PageHeader title="Outreach" intro={outreach.intro} />

      <section className="border-b border-border bg-surface py-12">
        <Container>
          <dl className="grid gap-8 sm:grid-cols-3">
            {outreach.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-accent">
                  <Text value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">What We Do</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {outreach.programs.map((program) => (
              <div
                key={program.title}
                className="rounded-lg border border-border p-6"
              >
                <h3 className="font-semibold">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <Text value={program.description} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
