import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title:
    "Медика 55 | Детски медицински център Варна - Детски ревматолог, педиатър",
  description:
    "Медика 55 - Детски медицински център във Варна. Детски ревматолог Д-р Мартин Бояджиев. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология. Записване: 0888 123 456. Medica 55 - Pediatric Medical Center Varna with pediatric rheumatologist Dr. Martin Boyadzhiev.",
  keywords: [
    "медика 55",
    "medica55",
    "детски медицински център",
    "детски ревматолог",
    "детски ревматолог варна",
    "detski revmatolog varna",
    "детска ревматология",
    "детски педиатър",
    "педиатрия",
    "Варна",
    "детска алергология",
    "детска гастроентерология",
    "детска пулмология",
    "детска ендокринология",
    "Бояджиев",
    "Boyadzhiev",
    "Москова",
    "Moskova",
    "Гълъбова",
    "Георгиева",
    "Georgieva",
    "Рашева",
    "Rasheva",
    "ставни болки при деца",
    "автоимунни заболявания",
    "васкулити",
    "ревматолог за деца",
    "детски лекар",
    "педиатрична ревматология",
    "pediatric rheumatology",
    "pediatric allergology",
    "pediatric gastroenterology",
    "pediatric pulmonology",
    "pediatric endocrinology",
    "Varna",
  ],
  alternates: {
    canonical: "https://medica55.org",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Медика 55 | Medica 55 - Детски медицински център Варна",
    description:
      "Медика 55 - Детски медицински център във Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология. Водещи специалисти: Бояджиев, Москова, Гълъбова, Георгиева, Рашева.",
    url: "https://medica55.org/",
    siteName: "Медика 55 | Medica 55",
    images: [
      {
        url: "https://medica55.org/logo.PNG",
        width: 800,
        height: 600,
        alt: "Medica 55 Logo",
        type: "image/png",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@medica55",
    title: "Медика 55 | Medica 55 - Детски медицински център Варна",
    description:
      "Медика 55 - Детски медицински център във Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология.",
    images: ["https://medica55.org/logo.PNG"],
  },
  metadataBase: new URL("https://medica55.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <head>
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_SITE_VERIFICATION_CODE"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:image" content="https://medica55.org/logo.PNG" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://medica55.org/logo.PNG" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="theme-color" content="#1e40af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalOrganization",
                  name: "Медика 55 | Medica 55",
                  url: "https://medica55.org/",
                  logo: "https://medica55.org/favicon.ico",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "бул. Владислав Варненчик №142-144, ет. 2",
                    addressLocality: "Варна",
                    addressCountry: "BG",
                    postalCode: "9000",
                  },
                  telephone: "0888 123 456",
                  email: "info@medica55.bg",
                  description:
                    "Детски медицински център във Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология.",
                  medicalSpecialty: [
                    "PediatricAllergyImmunology",
                    "PediatricGastroenterology",
                    "PediatricPulmonology",
                    "PediatricRheumatology",
                    "PediatricEndocrinology",
                  ],
                  openingHours: ["Mo-Fr 09:00-17:00", "Sa 09:00-13:00"],
                  priceRange: "$$",
                  areaServed: {
                    "@type": "City",
                    name: "Варна",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  name: "Медика 55 - Детски медицински център",
                  url: "https://medica55.org/",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "бул. Владислав Варненчик №142-144, ет. 2",
                    addressLocality: "Варна",
                    addressCountry: "BG",
                    postalCode: "9000",
                  },
                  telephone: "0888 123 456",
                  openingHours: ["Mo-Fr 09:00-17:00", "Sa 09:00-13:00"],
                  priceRange: "$$",
                  areaServed: {
                    "@type": "City",
                    name: "Варна",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
