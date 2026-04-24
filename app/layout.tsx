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

const TITLE = "Kultowa Bistro — Bar · Bistro · Pizza · Rogoźno";
const DESCRIPTION =
  "Ciepło, styl i smak. Kultowe spotkania w Rogoźnie — przyjazne wnętrze, lokalna kuchnia i pizza jak u mamy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "pl_PL",
    type: "website",
    siteName: "Kultowa Bistro",
  },
};

export const viewport: Viewport = {
  themeColor: "#efe7d8",
  colorScheme: "light",
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
        <ReservationProvider>{children}</ReservationProvider>
      </body>
    </html>
  );
}
