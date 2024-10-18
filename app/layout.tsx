import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "500", "600", "800", "900", "300"],
});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

const WorkSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--WorkSans",
});

export const metadata: Metadata = {
  title: "Horizon - international Bank for everyone",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} ${WorkSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
