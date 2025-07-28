"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClubIdentityCard from "@/components/ClubIdentityCard";
import HistoryAccordion from "@/components/HistoryAccordion";
import HistoryIntro from "@/components/HistoryIntro";
import JoinUs from "@/components/JoinUs";
import Image from "next/image";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Image */}
      <div
        id="video-hero-section"
        className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl:h-[600px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/ped_pulmo.jpg"
          alt="Детски специалности Медика 55 - алергология, гастроентерология, пулмология, ревматология, ендокринология"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10"></div>
      </div>
      {/* Main Content */}
      <main>
        <section className="py-8 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
            Извършвани дейности - Медика 55 | Medica 55
          </h1>
        </section>
        {/* Structured data for specialities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalSpecialty",
                  name: "Детска алергология",
                  description:
                    "Диагностика и лечение на хранителни, дихателни и кожни алергии при деца. Алергологични тестове, имуннотерапия, лечение на атопичен дерматит, уртикария, алергичен ринит и конюнктивит.",
                  url: "https://medica55.bg/procedures",
                },
                {
                  "@type": "MedicalSpecialty",
                  name: "Детска гастроентерология",
                  description:
                    "Диагностика и лечение на стомашно-чревни заболявания при деца, проследяване на хронични гастроентерологични състояния, хранителни алергии, ултразвукова диагностика.",
                  url: "https://medica55.bg/procedures",
                },
                {
                  "@type": "MedicalSpecialty",
                  name: "Детска пулмология",
                  description:
                    "Диагностика и лечение на астма, бронхити, пневмонии, проследяване на деца с чести респираторни инфекции, функционално изследване на дишането.",
                  url: "https://medica55.bg/procedures",
                },
                {
                  "@type": "MedicalSpecialty",
                  name: "Детска ревматология",
                  description:
                    "Диагностика и лечение на ставни болки, възпалителни ставни заболявания, автоимунни и автоинфламаторни заболявания при деца.",
                  url: "https://medica55.bg/procedures",
                },
                {
                  "@type": "MedicalSpecialty",
                  name: "Детска ендокринология",
                  description:
                    "Проследяване на растеж и развитие, диагностика и лечение на диабет тип 1, заболявания на щитовидната жлеза, пубертетни нарушения, консултации при затлъстяване и метаболитни нарушения.",
                  url: "https://medica55.bg/procedures",
                },
              ],
            }),
          }}
        />
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 w-full">
              <div className="flex-shrink-0">
                <ClubIdentityCard />
              </div>
              <div className="flex-1 w-full">
                <HistoryIntro />
              </div>
            </div>
            <HistoryAccordion />
          </div>
          <JoinUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
