import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import events from "@content/events.json";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events and meetings for NACI Robotics, Team 2935.",
};

export default function Events() {
  return (
    <>
      <PageHeader eyebrow="Events" title={events.heading} />

      <section className="py-20">
        <Container className="divide-y divide-border border-y border-border">
          {events.events.map((event) => (
            <article
              key={event.name}
              className="flex flex-wrap items-baseline justify-between gap-4 py-7"
            >
              <h2 className="display text-2xl">{event.name}</h2>
              <p className="eyebrow">
                {event.date || "Date to be announced"}
                {event.location ? ` / ${event.location}` : ""}
              </p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
