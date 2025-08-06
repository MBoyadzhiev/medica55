import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Д-р Мартин Бояджиев | Детски ревматолог - Медика 55",
  description:
    "Д-р Мартин Бояджиев - специалист детски ревматолог в Медика 55. Специализира се в диагностиката и лечението на автоинфламаторни заболявания и васкулити.",
  alternates: {
    canonical: "https://medica55.bg/team/boyadzhiev",
  },
};

export default function BoyadzhievPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-hero.jpg"
          alt="Д-р Мартин Бояджиев - детски ревматолог"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Д-р Мартин Бояджиев
            </h1>
            <p className="text-xl md:text-2xl">Детски ревматолог</p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/boyadzhiev.jpg"
                alt="Д-р Мартин Бояджиев"
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
                    Професионален Профил
                  </h3>
                  <p>
                    Д-р Мартин Бояджиев е специалист детски ревматолог във Варна
                    с над 12 години медицински опит с интереси в областта на
                    диагностиката и лечението на автоинфламаторни заболявания,
                    периодични синдроми и васкулити. Извършва диагностика и
                    лечение на ревматологични заболявания, възпалителни и
                    дегенеративни ставни заболявания, системни заболявания на
                    съединителната тъкан и др.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Образование
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Дипломира се в Медицински университет София през 2013 г.
                    </li>
                    <li>
                      С придобити специалности по Детска ревматология и
                      Педиатрия
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Квалификации
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ставна ехография</li>
                    <li>
                      Автор и съавтор на научни статии в български и
                      чуждестранни издания
                    </li>
                    <li>
                      Участие в научни форуми и конгреси в страната и чужбина
                    </li>
                    <li>
                      Специализации в София и &quot;Great North Children&quot;s
                      Hospital&quot;, Newcastle upon Tyne, Великобритания
                    </li>
                    <li>
                      Член на Paediatric Rheumatology International Trials
                      Organisation
                    </li>
                    <li>Член на Български лекарски съюз</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Професионален Опит
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      От 2014 г. д-р Бояджиев работи в УМБАЛ &quot;Света
                      Марина&quot; Варна
                    </li>
                    <li>
                      От 2018 г. е асистент към катедра Педиатрия на Медицински
                      университет Варна, където е и редовен докторант
                    </li>
                    <li>Практикувал е в МЦ Санита и МЦ Хигия</li>
                    <li>
                      Към момента е част от екипа специалисти на МЦ Медика 55
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Специалности
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Детска ревматология</li>
                    <li>Диагностика на автоинфламаторни заболявания</li>
                    <li>Лечение на периодични синдроми</li>
                    <li>Васкулити</li>
                    <li>Възпалителни и дегенеративни ставни заболявания</li>
                    <li>Системни заболявания на съединителната тъкан</li>
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
            name: "Д-р Мартин Бояджиев",
            jobTitle: "Детски ревматолог",
            affiliation: "Медика 55",
            image: "https://medica55.org/boyadzhiev.jpg",
            url: "https://medica55.org/team/boyadzhiev",
            description:
              "Д-р Мартин Бояджиев - специалист детски ревматолог в Медика 55. Специализира се в диагностиката и лечението на автоинфламаторни заболявания и васкулити.",
            knowsAbout: [
              "Детска ревматология",
              "Детски ревматолог",
              "Автоинфламаторни заболявания",
              "Периодични синдроми",
              "Васкулити",
              "Възпалителни ставни заболявания",
              "Дегенеративни ставни заболявания",
              "Системни заболявания на съединителната тъкан",
            ],
          }),
        }}
      />
    </div>
  );
}
