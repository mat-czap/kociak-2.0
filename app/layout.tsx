import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ReservationProvider } from "./components/ReservationProvider";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

// Production origin — drives metadataBase, canonical, OG/Twitter URLs,
// robots.txt sitemap pointer and JSON-LD @id. Override via env when the
// deploy domain changes; the fallback is a sensible guess so local builds
// still produce absolute URLs.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kultowabistro.pl";
const TITLE = "Kultowa Bistro — Bar · Bistro · Pizza · Rogoźno";
const DESCRIPTION =
  "Ciepło, styl i smak. Kultowe spotkania w Rogoźnie — przyjazne wnętrze, lokalna kuchnia i pizza jak u mamy.";
const OG_IMAGE = "/photos/1st_splash_image2.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Kultowa Bistro",
  },
  description: DESCRIPTION,
  applicationName: "Kultowa Bistro",
  keywords: [
    "Kultowa Bistro",
    "bistro Rogoźno",
    "pizza Rogoźno",
    "restauracja Rogoźno",
    "lunch Rogoźno",
    "obiady Rogoźno",
    "Wojska Polskiego 4 Rogoźno",
  ],
  authors: [{ name: "Kultowa Bistro" }],
  creator: "Kultowa Bistro",
  publisher: "Kultowa Bistro",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "pl_PL",
    type: "website",
    siteName: "Kultowa Bistro",
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1920,
        height: 1080,
        alt: "Wnętrze Kultowa Bistro — sala z welurową ławą i roślinami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#efe7d8",
  colorScheme: "light",
};

// JSON-LD Restaurant schema. Feeds Google Rich Results, Maps/Knowledge
// Graph and the "about this business" panel. Mirrors the facts shown in
// the Footer (address, phone, hours, Facebook) so the two never drift.
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: "Kultowa Bistro",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+48723715712",
  email: "kultowa-bistro@wp.pl",
  image: [
    `${SITE_URL}${OG_IMAGE}`,
    `${SITE_URL}/logo-full.png`,
  ],
  priceRange: "$$",
  servesCuisine: ["Polish", "Pizza", "European"],
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Wojska Polskiego 4",
    postalCode: "64-610",
    addressLocality: "Rogoźno",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.752329,
    longitude: 16.989439,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "12:00",
    closes: "22:00",
  },
  sameAs: [
    "https://www.facebook.com/p/Kultowa-Bistro-61587042214247/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <ReservationProvider>{children}</ReservationProvider>
      </body>
    </html>
  );
}
