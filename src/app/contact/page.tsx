import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { Text, isTodo } from "@/components/Todo";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.teamName}, FRC Team ${site.teamNumber}. For students who want to join, for mentors, and for sponsors.`,
};

/* Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT in Vercel (and .env.local) to a
   Formspree form URL to turn the form on. Until then the page shows the
   team email instead, so it is never a form that silently goes nowhere. */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        intro="Whether you are a student who wants to join, a mentor, or a company interested in sponsoring, we would like to hear from you."
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Reach Us</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold">Email</dt>
                <dd className="mt-1 text-muted">
                  {isTodo(site.email) ? (
                    <Text value={site.email} />
                  ) : (
                    <a
                      href={`mailto:${site.email}`}
                      className="text-accent hover:underline"
                    >
                      {site.email}
                    </a>
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-semibold">School</dt>
                <dd className="mt-1 text-muted">{site.schoolName}</dd>
              </div>
              <div>
                <dt className="font-semibold">Location</dt>
                <dd className="mt-1 text-muted">{site.location}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight">Send A Message</h2>
            {FORM_ENDPOINT ? (
              <form
                action={FORM_ENDPOINT}
                method="POST"
                className="mt-6 space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 w-full rounded border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
                >
                  Send
                </button>
              </form>
            ) : (
              <p className="mt-6 text-sm leading-relaxed">
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
