import Container from "./Container";

export default function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-surface py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
