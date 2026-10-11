import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Text, isTodo } from "@/components/Todo";
import robots from "@content/robots.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Our FRC Robots",
  description: `Every competition robot built by ${site.teamName}, FRC Team ${site.teamNumber}.`,
};

export default function Robots() {
  return (
    <>
      <PageHeader
        title="Our FRC Robots"
        intro="Every January we get a new game and about six weeks to build a robot for it. Here is what we have built."
      />

      <section className="py-16">
        <Container className="space-y-12">
          {robots.map((robot) => (
            <article
              key={robot.year}
              className="grid gap-6 border-b border-border pb-12 last:border-0 lg:grid-cols-3"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {robot.year}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">
                  <Text value={robot.name} />
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Game: <Text value={robot.game} />
                </p>
              </div>

              <div className="lg:col-span-2">
                <p className="leading-relaxed text-muted">
                  <Text value={robot.summary} />
                </p>
                {robot.highlights?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {robot.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent">&bull;</span>
                        <Text value={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
                {isTodo(robot.image) ? (
                  <p className="mt-4">
                    <span className="todo">
                      TODO: add a photo of this robot to /public/robots/ and set
                      &quot;image&quot; in robots.json
                    </span>
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
