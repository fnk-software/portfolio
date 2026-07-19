import "./globals.css";
import { profile } from "@/lib/data";

export const metadata = {
  metadataBase: new URL("https://farrukhniaz.vercel.app"),
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  keywords: [
    "Farrukh Niaz",
    "Principal Software Engineer",
    ".NET Core",
    "C#",
    "ASP.NET MVC",
    "Software Engineer Pakistan",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    url: "https://farrukhniaz.vercel.app",
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
};

export const viewport = {
  themeColor: "#0a0e14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
