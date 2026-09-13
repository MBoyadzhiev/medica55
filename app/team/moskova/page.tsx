import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Д-р Росица Стойчева | Детски ендокринолог - Медика 55",
  description:
    "Д-р Росица Стойчева - специалист детска ендокринология и болести на обмяната в Медика 55. Докторант по хранене на тема дигитална хранителна интервенция при деца с тип 1 захарен диабет.",
  alternates: {
    canonical: "https://medica55.bg/team/moskova",
  },
};

export default function StoichevaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-hero.jpg"
          alt="Д-р Росица Стойчева - детски ендокринолог"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Д-р Росица Стойчева
            </h1>
            <p className="text-xl md:text-2xl">Детски ендокринолог</p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/stoicheva.jpg"
                alt="Д-р Росица Стойчева"
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
                    <li>
                      Завършва Медицински университет Варна през 2006 г.
                    </li>
                    <li>
                      Своята специалност Детска ендокринология и болести на
                      обмяната придобива през 2017 г.
                    </li>
                    <li>
                      Към момента е докторант по хранене на тема: Дигитална
                      хранителна интервенция при деца с тип 1 захарен диабет.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Квалификации
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Обучение от Joslin Diabetes Center, ESPE зимно училище
                    </li>
                    <li>
                      Член на Български лекарски съюз, Варненско дружество по
                      детска ендокринология и Българското национално сдружение
                      по детска ендокринология
                    </li>
                    <li>
                      Участие в национални и международни конгреси и семинари
                      по специалността
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Обслужва пациенти на чужди езици
                  </h3>
                  <p>Английски, Руски</p>
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
            name: "Д-р Росица Стойчева",
            jobTitle: "Детски ендокринолог",
            affiliation: "Медика 55",
            image: "https://medica55.org/moskova.jpg",
            url: "https://medica55.org/team/moskova",
            description:
              "Д-р Росица Стойчева - специалист детска ендокринология и болести на обмяната в Медика 55. Докторант по хранене на тема дигитална хранителна интервенция при деца с тип 1 захарен диабет.",
            knowsLanguage: ["Bulgarian", "English", "Russian"],
            knowsAbout: [
              "Детска ендокринология",
              "Болести на обмяната",
              "Диабет при деца",
              "Тип 1 захарен диабет",
              "Хранене",
            ],
          }),
        }}
      />
    </div>
  );
}
