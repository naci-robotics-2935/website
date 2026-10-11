import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Text } from "@/components/Todo";
import events from "@content/events.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Events",
  description: `Competitions and events for ${site.teamName}, FRC Team ${site.teamNumber}.`,
};

export default function Events() {
  return (
    <>
      <PageHeader
        title="Events"
        intro="Competitions, demos, and community events we are part of this season."
      />

      <section className="py-16">
        <Container className="space-y-6">
          {events.map((event) => (
            <article
              key={event.name}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{event.name}</h2>
                  <p className="mt-1 text-sm text-muted">
                    <Text value={event.date} /> &middot;{" "}
                    <Text value={event.location} />
                  </p>
                </div>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  {event.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <Text value={event.description} />
              </p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
