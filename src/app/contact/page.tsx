import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.teamName}, Team ${site.teamNumber}.`,
};

/* Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT in Vercel to a Formspree form URL
   to turn the form on. Until then the page shows the team email instead,
   so the form never silently goes nowhere. */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

const FIELD =
  "mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-faint";

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact us" title="How can we help?" />

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Reach us</Eyebrow>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-faint">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-accent transition-opacity hover:opacity-80"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-faint">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition-opacity hover:opacity-80"
                  >
                    {site.socials.instagramHandle}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-faint">Address</dt>
                <dd className="mt-1 text-muted">{site.address}</dd>
              </div>
            </dl>
          </div>

          <div>
            {FORM_ENDPOINT ? (
              <form action={FORM_ENDPOINT} method="POST" className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="text-sm text-muted">
                      First name
                    </label>
                    <input id="firstName" name="firstName" className={FIELD} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm text-muted">
                      Last name
                    </label>
                    <input id="lastName" name="lastName" className={FIELD} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="who" className="text-sm text-muted">
                    Who are you?
                  </label>
                  <input id="who" name="who" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-muted">
                    Tell us what you need help with
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={FIELD}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Send
                </button>
              </form>
            ) : (
              <p className="text-sm">
                <span className="todo">
                  TODO: the contact form is off until an endpoint is set. Make a
                  free form at formspree.io, then add
                  NEXT_PUBLIC_CONTACT_FORM_ENDPOINT in Vercel to turn it on.
                </span>
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
