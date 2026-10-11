"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import site from "@content/site.json";

/* Add or rename pages here and the header updates everywhere. */
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [{ label: "Our FRC Robots", href: "/about/robots" }],
  },
  { label: "Outreach", href: "/outreach" },
  {
    label: "Community",
    href: "/community",
    children: [{ label: "Events", href: "/community/events" }],
  },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact Us", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 font-bold">
          <span className="text-lg text-accent">{site.teamNumber}</span>
          <span className="text-base">{site.teamName}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`block rounded px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full min-w-48 rounded-md border border-border bg-background p-1 opacity-0 shadow-lg transition-all group-hover:visible group-focus-within:visible group-hover:opacity-100 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="rounded border border-border px-3 py-2 text-sm md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Mobile nav */}
      {open ? (
        <nav className="border-t border-border bg-background md:hidden">
          <Container className="py-2">
            {NAV.map((item) => (
              <div key={item.href} className="py-0.5">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 pl-4 text-sm text-muted"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
