import Link from "next/link";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import site from "@content/site.json";
import { getCurrentYear } from "@/lib/year";

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-auto border-t border-border">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="display text-2xl">Join our journey</h2>
            <p className="mt-3 max-w-sm text-sm text-muted">
              {site.teamName} is always looking for students, mentors, and
              sponsors.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Contact us
            </Link>
          </div>

          <div className="space-y-6 sm:justify-self-end">
            <div>
              <Eyebrow>Find us</Eyebrow>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Instagram {site.socials.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {site.email}
                  </a>
                </li>
                <li>{site.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-border pt-6">
          <p className="eyebrow">
            Team {site.teamNumber} &middot; {site.schoolName}
          </p>
          <p className="eyebrow">
            &copy; {year} {site.teamName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
