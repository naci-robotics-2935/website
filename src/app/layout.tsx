import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import site from "@content/site.json";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.teamName} | FRC Team ${site.teamNumber}`,
    template: `%s | ${site.teamName} ${site.teamNumber}`,
  },
  description: site.shortDescription,
  keywords: [
    "FRC",
    `Team ${site.teamNumber}`,
    site.teamName,
    "FIRST Robotics Competition",
    "robotics",
    site.location,
    site.schoolName,
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.siteUrl,
    siteName: `${site.teamName} | FRC ${site.teamNumber}`,
    title: `${site.teamName} | FRC Team ${site.teamNumber}`,
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.teamName} | FRC Team ${site.teamNumber}`,
    description: site.shortDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

/* Tells Google this is a real organization, which helps it show the
   team properly in search results. */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: `${site.teamName} (FRC Team ${site.teamNumber})`,
  sport: "FIRST Robotics Competition",
  url: site.siteUrl,
  description: site.shortDescription,
  memberOf: { "@type": "Organization", name: "FIRST Robotics Competition" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
