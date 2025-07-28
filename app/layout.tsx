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
  openGraph: {
    title: "Медика 55 | Medica 55 - Детски медицински център Варна",
    description:
      "Медика 55 - Детски медицински център във Варна. Детска алергология, гастроентерология, пулмология, ревматология, ендокринология. Водещи специалисти: Бояджиев, Москова, Гълъбова, Георгиева, Рашева.",
    url: "https://medica55.bg/",
    siteName: "Медика 55 | Medica 55",
    images: [
      {
        url: "/logo.PNG",
        width: 800,
        height: 600,
        alt: "Medica 55 Logo",
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
    images: ["/logo.PNG"],
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
