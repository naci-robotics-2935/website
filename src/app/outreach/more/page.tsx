import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import programs from "@content/programs.json";

export const metadata: Metadata = {
  title: "More Outreach",
  description:
    "HackNights, FIRST LEGO League, and MiniBots: the programs NACI Robotics runs beyond the competition season.",
};

export default function MoreOutreach() {
  return (
    <>
      <PageHeader
        eyebrow="More outreach"
        title={programs.heading}
        intro="The programs we run beyond our own competition season."
      />

      <section className="py-20">
        <Container className="space-y-24">
          {programs.programs.map((program) => (
            <article key={program.id} id={program.id}>
              <Eyebrow>{program.question}</Eyebrow>
              <h2 className="display mt-4 text-4xl">{program.title}</h2>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div className="space-y-8">
                  {program.sections.map((section) => (
                    <div key={section.heading}>
                      <h3 className="display text-xl">{section.heading}</h3>
                      <p className="mt-3 text-muted">{section.body}</p>
                    </div>
                  ))}
                </div>
                <Placeholder label={`${program.title} photo`} ratio="4/3" />
              </div>

              {program.skills ? (
                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  {program.skills.map((group) => (
                    <div key={group.group}>
                      <Eyebrow>{group.group}</Eyebrow>
                      <ul className="mt-5 space-y-3">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="border-l border-border pl-4 text-sm text-muted"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
