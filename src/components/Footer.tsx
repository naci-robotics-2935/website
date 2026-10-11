import Link from "next/link";
import Container from "./Container";
import { isTodo } from "./Todo";
import site from "@content/site.json";
import { getCurrentYear } from "@/lib/year";

const SOCIAL_LABELS: Record<string, string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  github: "GitHub",
};

export default async function Footer() {
  const year = await getCurrentYear();
  const socials = Object.entries(site.socials);

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold">Join Our Journey</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {site.teamName} is always looking for students, mentors, and
              sponsors. Reach out and we will get back to you.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              Contact Us
            </Link>
          </div>

          <div className="sm:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Follow Us
            </h3>
            <ul className="mt-3 space-y-2">
              {socials.map(([key, url]) =>
                isTodo(url) ? (
                  <li key={key} className="text-sm">
                    <span className="todo">
                      {SOCIAL_LABELS[key] ?? key}: {url}
                    </span>
                  </li>
                ) : (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {SOCIAL_LABELS[key] ?? key}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted">
          <p>
            FRC Team {site.teamNumber} &middot; {site.schoolName} &middot;{" "}
            {site.location}
          </p>
          <p className="mt-1">
            &copy; {year} {site.teamName}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
