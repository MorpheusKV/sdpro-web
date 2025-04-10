import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SDpro Gebäudereinigung Münster | Professionelle Reinigungsfirma",
  description:
    "SDpro Gebäudereinigung bietet professionelle Reinigungsdienste in Münster an – Büroreinigung, Praxisreinigung, Fensterputzen und mehr.",
  keywords:
    "Gebäudereinigung Münster, Reinigungsfirma, Büroreinigung, Fensterputzen, Unterhaltsreinigung, SDpro",
  robots: "index, follow",
  icons: {
    icon: "/favicon-logo.ico",
  },

  openGraph: {
    title: "SDpro Gebäudereinigung Münster",
    description:
      "Professionelle Reinigungsdienste für Büros, Praxen, Fenster & mehr – SDpro Münster.",
    url: "https://www.sd-pro-gebäudereinigung.de",
    type: "website",
    locale: "de_DE",
    siteName: "SDpro Gebäudereinigung",
    images: [
      {
        url: "/images/social-media.png",
        width: 1200,
        height: 630,
        alt: "SDpro Gebäudereinigung Münster",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SDpro Gebäudereinigung Münster",
    description:
      "Professionelle Reinigungsdienste für Unternehmen & Privatkunden.",
    images: ["/images/seo-social-cover.webp"],
    creator: "@sdpro_clean",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
