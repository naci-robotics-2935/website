"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import site from "@content/site.json";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [{ label: "Our FRC Robots", href: "/about/robots" }],
  },
  {
    label: "Outreach",
    href: "/outreach",
    children: [{ label: "More Outreach", href: "/outreach/more" }],
  },
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-mono text-sm text-accent">
            {site.teamNumber}
          </span>
          <span className="display text-base">{site.teamName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`block px-3 py-2 text-sm transition-colors hover:text-foreground ${
                  isActive(item.href) ? "text-foreground" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full min-w-52 rounded-lg border border-border bg-surface p-1 opacity-0 shadow-xl transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-raised hover:text-foreground"
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
          className="eyebrow rounded border border-border px-3 py-2 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <nav className="border-t border-border md:hidden">
          <Container className="py-2">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm ${
                    isActive(item.href) ? "text-foreground" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 pl-4 text-sm text-faint"
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
