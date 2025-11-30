import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation"; // <-- IMPORTED NAVIGATION

// Load custom Japanese fonts
const japanRamen = localFont({
  src: "../../public/fonts/japanRamen.otf",
  variable: "--font-japan-ramen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OASIS 2025 | Whispers Of Edo",
  description:
    "The official website of Oasis 2025 | Whispers Of Edo. Asia's Largest Student-Run College Cultural Festival returns for its 53rd edition in 2025! Est. 1971",
  applicationName: "OASIS 2025",
  keywords: [
    "oasis",
    "Oasis",
    "oasis bits pilani",
    "bits",
    "bits pilani",
    "bits pilani pilani campus",
    "bppc",
    "college fest",
    "oasis 2025",
    "2025",
    "oasis bits",
    "bits oasis",
    "bits pilani oasis",
    "oasis bppc",
    "college fest bits",
    "bits pilani fest",
    "oasis 2025 dates",
    "bits pilani cultural fest",
    "oasis bits pilani 2025",
    "oasis in pilani",
    "bppc fest",
    "whispers of edo",
    "edo japan",
    "edo period",
    "japanese theme",
    "japanese culture fest",
    "geisha",
    "hanami",
    "traditional japan",
    "edo era celebration",
    "whispers of edo theme",
    "cultural japan oasis",
    "japan-inspired fest",
    "oasis 2025 whispers of edo",
    "oasis japan theme",
    "edo vibes",
    "shuriken",
    "rocktaves",
    "engineering",
    "bits fest 2025",
    "student fest india",
  ],
  authors: [{ name: "Department of Visual Media, BITS Pilani" }],
  openGraph: {
    type: "website",
    title: "OASIS 2025 | Whispers Of Edo",
    description:
      "Asia's Largest Student-Run College Cultural Festival returns for its 53rd edition in 2025! Est. 1971",
    url: "https://www.bits-oasis.org/",
    siteName: "OASIS 2025 | Whispers Of Edo",
    images: [
      {
        url: "https://www.bits-oasis.org/logo2.png",
        alt: "OASIS 2025 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OASIS 2025 | Whispers Of Edo",
    description:
      "Asia's Largest Student-Run College Cultural Festival returns for its 53rd edition in 2025! Est. 1971",
    images: ["https://www.bits-oasis.org/logo2.png"],
    site: "@bitsoasis",
  },
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
		<html lang="en"><head>
				{/* Preload critical assets */}
				<link rel="preload" as="image" href="/videos/ink-spread-5.gif" />
				<link rel="preload" as="font" href="/fonts/japanRamen.ttf" type="font/ttf" crossOrigin="anonymous" />
			</head><body className={`${japanRamen.variable} antialiased`}>
				{/* RENDER NAVIGATION BAR HERE, IT WILL APPEAR ON ALL PAGES */}
				<Navigation />

				{/* Portal roots for modals and backdrops */}
				{/* <div id="modal-root"></div> */}
				{/* <div id="backdrop-root"></div> */}
				<div id="root">{children}</div>
			</body></html>
	)
}
