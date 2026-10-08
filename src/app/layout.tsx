import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getDictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";

const inter = Inter({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE_CONFIG.themeColor,
  colorScheme: "light dark",
};

const dict = getDictionary("en");
const baseUrl = SITE_CONFIG.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: dict.meta.title,
  description: dict.meta.description,
  keywords: [...dict.meta.keywords],
  applicationName: SITE_CONFIG.brandName,
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: SITE_CONFIG.brandName,
    title: dict.meta.title,
    description: dict.meta.description,
    locale: "en_US",
    images: [
      {
        url: `${baseUrl}/api/og?locale=en`,
        width: 1200,
        height: 630,
        alt: dict.meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: dict.meta.title,
    description: dict.meta.description,
    images: [`${baseUrl}/api/og?locale=en`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('smmzin-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-reveal');",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <div className="ambient" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
