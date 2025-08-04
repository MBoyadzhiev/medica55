import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCards from "@/components/TeamCards";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Екипът на Медика 55 | Нашите специалисти - Детски медицински център Варна",
  description:
    "Запознайте се с екипа на Медика 55 - водещи специалисти в детска медицина: д-р Миглена Георгиева, д-р Ния Рашева, д-р Мартина Гълъбова, д-р Мариана Москова, д-р Мартин Бояджиев.",
  alternates: {
    canonical: "https://medica55.bg/team",
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Image */}
      <div
        id="team-hero-section"
        className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl:h-[600px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/pediatrics.jpg"
          alt="Екипът на Медика 55 - детски медицински център Варна"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <main>
        <section className="py-8 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
            Екипът на Медика 55 | Medica 55
          </h1>
        </section>
        {/* Structured data for doctors */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Проф. д-р Миглена Георгиева",
                  jobTitle: "Детски гастроентеролог",
                  affiliation: "Медика 55",
                  image: "https://medica55.bg/georgieva.jpg",
                },
                {
                  "@type": "Person",
                  name: "Д-р Ния Рашева",
                  jobTitle: "Детски гастроентеролог",
                  affiliation: "Медика 55",
                  image: "https://medica55.bg/rasheva.jpg",
                },
                {
                  "@type": "Person",
                  name: "Д-р Мартина Гълъбова",
                  jobTitle: "Детски пулмолог и алерголог",
                  affiliation: "Медика 55",
                  image: "https://medica55.bg/galabova.jpg",
                },
                {
                  "@type": "Person",
                  name: "Д-р Мариана Москова",
                  jobTitle: "Детски ендокринолог",
                  affiliation: "Медика 55",
                  image: "https://medica55.bg/moskova.jpg",
                },
                {
                  "@type": "Person",
                  name: "Д-р Мартин Бояджиев",
                  jobTitle: "Детски ревматолог",
                  affiliation: "Медика 55",
                  image: "https://medica55.bg/boyadzhiev.jpg",
                },
              ],
            }),
          }}
        />
        <TeamCards />
      </main>
      <Footer />
    </div>
  );
}
