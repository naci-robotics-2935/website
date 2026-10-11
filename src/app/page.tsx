import Link from "next/link";
import Container from "@/components/Container";
import { Text } from "@/components/Todo";
import site from "@content/site.json";
import subteams from "@content/subteams.json";
import events from "@content/events.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            FRC Team {site.teamNumber} &middot; {site.location}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              About Our Team
            </Link>
            <Link
              href="/contact"
              className="rounded border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-background"
            >
              Join Us
            </Link>
          </div>
        </Container>
      </section>

      {/* Subteams */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What We Build
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            A competition robot takes more than one skill set. Our {site.memberCount}{" "}
            members work across six subteams.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subteams.map((team) => (
              <div
                key={team.name}
                className="rounded-lg border border-border p-6"
              >
                <h3 className="font-semibold">{team.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About FIRST */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              About FIRST
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              FIRST (For Inspiration and Recognition of Science and Technology)
              runs the largest student robotics program in the world. In the
              FIRST Robotics Competition, teams get a brand new game each
              January and roughly six weeks to design, build, program, and
              test a robot to play it.
            </p>
            <a
              href="https://www.firstinspires.org/robotics/frc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
            >
              Learn more about FRC &rarr;
            </a>
          </div>
          <div className="rounded-lg border border-border bg-background p-6">
            <h3 className="font-semibold">Our Season</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <strong className="text-foreground">January:</strong> Kickoff.
                The new game is revealed and we start strategy and CAD.
              </li>
              <li>
                <strong className="text-foreground">Jan to Feb:</strong> Build
                season. Fabrication, wiring, and code, most nights a week.
              </li>
              <li>
                <strong className="text-foreground">March to April:</strong>{" "}
                Competition. District events, then playoffs.
              </li>
              <li>
                <strong className="text-foreground">Offseason:</strong> Training
                new members, outreach, and prototyping.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Upcoming Events
            </h2>
            <Link
              href="/community/events"
              className="text-sm font-semibold text-accent hover:underline"
            >
              View all events &rarr;
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.name}
                className="rounded-lg border border-border p-6"
              >
                <h3 className="font-semibold">{event.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  <Text value={event.date} /> &middot;{" "}
                  <Text value={event.location} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recruitment */}
      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Robots Need Builders
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            You do not need experience to join. If you are interested in
            coding, design, electrical, media, fundraising, or event planning,
            there is a place for you on this team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Get In Touch
          </Link>
        </Container>
      </section>
    </>
  );
}
