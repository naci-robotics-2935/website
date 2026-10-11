import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import site from "@content/site.json";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.teamName} | Team ${site.teamNumber} | FIRST Robotics Competition`,
    template: `%s | ${site.teamName} ${site.teamNumber}`,
  },
  description: site.intro,
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
    siteName: `${site.teamName} | Team ${site.teamNumber}`,
    title: `${site.teamName} | Team ${site.teamNumber}`,
    description: site.intro,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: `${site.teamName} (FRC Team ${site.teamNumber})`,
  sport: "FIRST Robotics Competition",
  url: site.siteUrl,
  email: site.email,
  foundingDate: site.foundedYear,
  description: site.about,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2580 Kipling Ave",
    addressLocality: "Etobicoke",
    addressRegion: "ON",
    postalCode: "M9V 3B2",
    addressCountry: "CA",
  },
  memberOf: { "@type": "Organization", name: "FIRST Robotics Competition" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
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
