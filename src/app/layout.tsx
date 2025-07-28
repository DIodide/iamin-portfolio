import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibraheem Amin - Developer Portfolio",
  description:
    "Portfolio of Ibraheem Amin, Princeton University, CS Major. Showcasing projects in AI, full-stack development, and systems design.",
  keywords: [
    "Ibraheem Amin",
    "Princeton University",
    "Computer Science",
    "Developer",
    "Portfolio",
    "AI",
    "Full Stack",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ibraheem Amin" }],
  creator: "Ibraheem Amin",
  metadataBase: new URL("https://iamin-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iamin-portfolio.vercel.app",
    title: "Ibraheem Amin - Developer Portfolio",
    description:
      "Portfolio of Ibraheem Amin, Princeton University, CS Major. Showcasing projects in AI, full-stack development, and systems design.",
    siteName: "Ibraheem Amin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibraheem Amin - Developer Portfolio",
    description:
      "Portfolio of Ibraheem Amin, Princeton University, CS Major. Showcasing projects in AI, full-stack development, and systems design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark"]}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
