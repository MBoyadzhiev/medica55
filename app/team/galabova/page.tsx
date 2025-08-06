import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Д-р Мартина Гълъбова | Детски пулмолог и алерголог - Медика 55",
  description:
    "Д-р Мартина Гълъбова - специалист по детска пневмология, фтизиатрия и алергология в Медика 55. Асистент в Катедра по Педиатрия на МУ Варна.",
  alternates: {
    canonical: "https://medica55.bg/team/galabova",
  },
};

export default function GalabovaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-hero.jpg"
          alt="Д-р Мартина Гълъбова - детски пулмолог и алерголог"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Д-р Мартина Гълъбова
            </h1>
            <p className="text-xl md:text-2xl">Детски пулмолог и алерголог</p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/galabova.jpg"
                alt="Д-р Мартина Гълъбова"
                width={300}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Биография
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Образование
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Родена в град Бургас</li>
                    <li>
                      Завършва I Езикова Гимназия с преподаване на английски и
                      немски език - гр. Варна през 1993 г.
                    </li>
                    <li>
                      През 1999 г. се дипломира в Медицински университет
                      &quot;Проф. д-р Параскев Стоянов&quot; - гр. Варна и е
                      отличник на випуска
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Професионален Опит
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      1999 – 2020 г. работи във Втора детска клиника на УМБАЛ
                      &quot;Света Марина&quot; като лекар асистент
                    </li>
                    <li>
                      От 2000 г. до момента е асистент в Катедра по Педиатрия на
                      МУ &quot;Проф. д-р Параскев Стоянов&quot; - гр. Варна
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Специалности
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      През 2004 г. придобива специалност по Детски болести
                    </li>
                    <li>През 2006 г. по Клинична алергология</li>
                    <li>През 2013 г. по Детска пневмология и фтизиатрия</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Научна Дейност
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Има над 40 публикации в български и чуждестранни списания
                    </li>
                    <li>Над 30 участия в научни форуми в България и чужбина</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Основни Научни Интереси
                  </h3>
                  <p>
                    Основни научни интереси в областта на детската пневмология и
                    алергология.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Области на Работа
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Детска пневмология</li>
                    <li>Детска алергология</li>
                    <li>Диагностика и лечение на респираторни заболявания</li>
                    <li>Алергични реакции и заболявания</li>
                    <li>Бронхиална астма</li>
                    <li>Респираторни инфекции</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Д-р Мартина Гълъбова",
            jobTitle: "Детски пулмолог и алерголог",
            affiliation: "Медика 55",
            image: "https://medica55.org/galabova.jpg",
            url: "https://medica55.org/team/galabova",
            description:
              "Д-р Мартина Гълъбова - специалист по детска пневмология, фтизиатрия и алергология в Медика 55. Асистент в Катедра по Педиатрия на МУ Варна.",
            knowsAbout: [
              "Детска пневмология",
              "Детска алергология",
              "Педиатрия",
              "Фтизиатрия",
              "Клинична алергология",
              "Респираторни заболявания",
              "Бронхиална астма",
              "Алергични реакции",
            ],
          }),
        }}
      />
    </div>
  );
}
