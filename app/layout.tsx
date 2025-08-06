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
  title: "Медика 55 | Medica 55 - Детски медицински център Варна",
  description:
    "Медика 55 - Детски медицински център във Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология. Водещи специалисти: Бояджиев, Москова, Гълъбова, Георгиева, Рашева. Medica 55 - Pediatric Medical Center Varna. Pediatric allergology, gastroenterology, pulmonology, rheumatology, endocrinology.",
  keywords: [
    "medica55",
    "медика 55",
    "детски медицински център",
    "педиатрия",
    "Варна",
    "детска алергология",
    "детска гастроентерология",
    "детска пулмология",
    "детска ревматология",
    "детска ендокринология",
    "Бояджиев",
    "Москова",
    "Moskova",
    "Гълъбова",
    "Георгиева",
    "Georgieva",
    "Рашева",
    "Rasheva",
    "pediatric allergology",
    "pediatric gastroenterology",
    "pediatric pulmonology",
    "pediatric rheumatology",
    "pediatric endocrinology",
    "Varna",
  ],
  alternates: {
    canonical: "https://medica55.bg",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.PNG",
  },
  openGraph: {
    title: "Медика 55 | Medica 55 - Детски медицински център Варна",
    description:
      "Медика 55 - Детски медицински център във Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология. Водещи специалисти: Бояджиев, Москова, Гълъбова, Георгиева, Рашева.",
    url: "https://medica55.bg/",
    siteName: "Медика 55 | Medica 55",
    images: [
      {
        url: "https://medica55.bg/logo.PNG",
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
    images: ["https://medica55.bg/logo.PNG"],
  },
  metadataBase: new URL("https://medica55.bg"),
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
        <link rel="apple-touch-icon" href="/logo.PNG" />
        <meta property="og:image" content="https://medica55.bg/logo.PNG" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://medica55.bg/logo.PNG" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Медика 55 | Medica 55",
              url: "https://medica55.bg/",
              logo: "https://medica55.bg/logo.PNG",
              address: {
                "@type": "PostalAddress",
                streetAddress: "бул. Владислав Варненчик №142-144, ет. 2",
                addressLocality: "Варна",
                addressCountry: "BG",
              },
              description:
                "Детски медицински център във Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология.",
              medicalSpecialty: [
                "PediatricAllergyImmunology",
                "PediatricGastroenterology",
                "PediatricPulmonology",
                "PediatricRheumatology",
                "PediatricEndocrinology",
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
