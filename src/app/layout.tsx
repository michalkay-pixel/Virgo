import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virgo Laser Clinic | Harrow's Premier Laser & Aesthetic Destination",
  description:
    "Timeless skin, tailored to you. Experience Harrow's premier destination for laser hair removal and aesthetic artistry with the world's most advanced Soprano ICE Platinum technology.",
  keywords: [
    "laser hair removal Harrow",
    "aesthetic clinic Harrow",
    "Soprano ICE Platinum",
    "skin treatments",
    "Jolanta Kay",
    "Virgo Laser Clinic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

