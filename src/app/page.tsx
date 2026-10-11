import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import site from "@content/site.json";
import first from "@content/first.json";
import events from "@content/events.json";
import recruitment from "@content/recruitment.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Eyebrow>
              Team {site.teamNumber} &middot; {site.location}
            </Eyebrow>
            <h1 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-7 max-w-xl text-muted">{site.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-6 py-2.5 text-sm text-muted transition-colors hover:border-faint hover:text-foreground"
              >
                Join the team
              </Link>
            </div>
          </div>
          <Placeholder label="Team or robot hero photo" ratio="4/3" />
        </Container>
      </section>

      {/* Our team */}
      <section className="border-b border-border py-20">
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <h2 className="display mt-4 text-3xl sm:text-4xl">
            The people behind 2935
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Team photo", "Build season", "Competition", "Drive team"].map(
              (label) => (
                <Placeholder key={label} label={label} ratio="1/1" />
              ),
            )}
          </div>
        </Container>
      </section>

      {/* About FIRST */}
      <section className="border-b border-border py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>About FIRST</Eyebrow>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              {first.heading}
            </h2>
            <a
              href={first.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-accent transition-opacity hover:opacity-80"
            >
              Learn more about FRC
            </a>
          </div>
          <p className="text-muted">{first.body}</p>
        </Container>
      </section>

      {/* Events */}
      <section className="border-b border-border py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Events</Eyebrow>
              <h2 className="display mt-4 text-3xl sm:text-4xl">
                Where you can find us
              </h2>
            </div>
            <Link
              href="/community/events"
              className="text-sm text-accent transition-opacity hover:opacity-80"
            >
              View all events
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {events.events.map((event) => (
              <div
                key={event.name}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="display text-xl">{event.name}</h3>
                <p className="eyebrow mt-3">
                  {event.date || "Date to be announced"}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Season updates */}
      <section className="border-b border-border py-20">
        <Container>
          <Eyebrow>Season updates</Eyebrow>
          <h2 className="display mt-4 text-3xl sm:text-4xl">
            What we have been up to
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Update photo", "Update photo", "Update photo"].map((l, i) => (
              <Placeholder key={i} label={l} ratio="4/3" />
            ))}
          </div>
        </Container>
      </section>

      {/* Recruitment */}
      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="display text-3xl sm:text-5xl">
            {recruitment.heading}
          </h2>
          <p className="mt-6 text-muted">{recruitment.body}</p>
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
