import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Load custom fonts
const saman = localFont({
  src: "../../public/fonts/Saman.ttf",
  variable: "--font-saman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IRIS 2026 | Indiverse",
  description:
    "The official website of IRIS 2026 | Indiverse. Indias's Premier Management Student-Run College Cultural Festival returns for 2026!",
  applicationName: "IRIS 2026",
  keywords: [
    "IRIS",
    "IIM",
    "Indore",
    "Madhya Pradesh",
    "IIM Indore",
    "PGP",
    "MBA",
    "Business",
    "Master of Business Administration",
    "IRIS 2026",
    "2026",
    "IRIS IIM Indore",
    "IIM IRIS",
    "management fest",
    "management",
    "college fest",
    "fest",
    "Madhya Pradesh",
    "cultural fest",
    "Indiverse",
    "college cultural fest",
    "engineering",
    "student fest India",
  ],
  authors: [{ name: "Department of Visual Media, BITS Pilani" }],
  openGraph: {
    type: "website",
    title: "IRIS 2026 | Indiverse",
    description:
    "The official website of IRIS 2026 | Indiverse. Indias's Premier Management Student-Run College Cultural Festival returns for 2026!",
    url: "https://www.iris-iimidr.com/",
    siteName: "IRIS 2026 | Indiverse",
    images: [
      {
        url: "https://www.iris-iimidr.com/",
        alt: "IRIS 2026 Logo",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "IRIS 2026 | Indiverse",
  //   description:
  //     "Asia's Largest Student-Run College Cultural Festival returns for its 53rd edition in 2025! Est. 1971",
  //   images: ["https://www.bits-oasis.org/logo2.png"],
  //   site: "@bitsoasis",
  // },
  icons: {
    icon: "/logo2.png",
  },
  verification: {
    google: "u_D4irk99rP4PM6hQYcHiNDbZAvwjoduuU3eZeo5hA8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/videos/ink-spread-5.gif" />
      </head>
      <body className={`${saman.variable} antialiased`}>
        <Navigation />
        <div id="root">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
