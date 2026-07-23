import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Apex Developments | Serviced Accommodation, Property Development & Renovations",
  description:
    "Apex Developments provides serviced accommodation, property development, and renovation services across Scotland, delivering high-quality residential projects, modern short-term stays, and exceptional craftsmanship.",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${inter.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18344624491"
        />

        <Script id="google-ads-tag">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18344624491');
    `}
        </Script>

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
