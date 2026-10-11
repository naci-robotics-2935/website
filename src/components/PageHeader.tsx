import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border pb-14 pt-20 sm:pb-20 sm:pt-28">
      <Container>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="display mt-4 max-w-4xl text-4xl sm:text-6xl">{title}</h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base text-muted">{intro}</p>
        ) : null}
      </Container>
    </section>
  );
}
