import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import robots from "@content/robots.json";

export const metadata: Metadata = {
  title: "Our FRC Robots",
  description: robots.subheading,
};

export default function Robots() {
  return (
    <>
      <PageHeader
        eyebrow="Our FRC robots"
        title={robots.heading}
        intro={robots.subheading}
      />

      <section className="py-20">
        <Container className="space-y-20">
          {robots.robots.map((robot) => (
            <article
              key={robot.year}
              className="grid gap-10 lg:grid-cols-[1.2fr_1fr]"
            >
              <Placeholder
                label={`${robot.year} robot photo`}
                ratio="4/3"
              />
              <div>
                <Eyebrow>{robot.year}</Eyebrow>
                <h2 className="display mt-4 text-4xl">
                  {robot.name || robot.game}
                </h2>
                {robot.name ? (
                  <p className="mt-2 text-sm text-faint">{robot.game}</p>
                ) : null}
                <ul className="mt-8 space-y-3">
                  {robot.awards.map((award) => (
                    <li
                      key={award}
                      className="border-l border-border pl-4 text-sm text-muted"
                    >
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
