import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Д-р Мариана Москова | Детски ендокринолог - Медика 55",
  description:
    "Д-р Мариана Москова - специалист детски ендокринолог и педиатър в Медика 55 с над 20 години опит. Извършва прегледи, диагностика и лечение на деца с ендокринологични проблеми.",
  alternates: {
    canonical: "https://medica55.bg/team/moskova",
  },
};

export default function MoskovaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-hero.jpg"
          alt="Д-р Мариана Москова - детски ендокринолог"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Д-р Мариана Москова
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
                src="/moskova.jpg"
                alt="Д-р Мариана Москова"
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
                    Д-р Мариана Москова е специалист детски ендокринолог и
                    педиатър в Русе и Варна с над 20 години опит. Извършва
                    прегледи, диагностика и лечение на деца с общи и
                    ендокринологични проблеми.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Образование
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Учила медицина в Ленинградски педиатричен институт през
                      1986 г.
                    </li>
                    <li>
                      Своите специалности Детски болести и Детска ендокринология
                      и болести на обмяната придобива съответно през 1992 г. в
                      Медицински университет София и през 2011 г. в Медицински
                      университет Варна
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Квалификации
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Член на Българската педиатрична асоциация</li>
                    <li>
                      Българско национално сдружение по детска ендокринология
                    </li>
                    <li>Българско дружество по ендокринология</li>
                    <li>Варненско дружество по детска ендокринология</li>
                    <li>
                      Участия в множество конкурси, конференции и конгреси за
                      педиатрична квалификация
                    </li>
                    <li>Владее английски и руски език</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Професионален Опит
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      В годините между 1986 г. и 1997 г. д-р Москова работи
                      последователно като участъков педиатър, ординатор в
                      Неонатологично отделение и ординатор във Второ детско
                      кърмаческо отделение към Окръжна болница Русе
                    </li>
                    <li>
                      От 1997 г. до 2008 г. е ординатор, след това Началник
                      отделение в Дом за медико-социални грижи за деца Добрич
                    </li>
                    <li>
                      В периода 2008-2010г. е клиничен ординатор по детска
                      ендокринология в УМБАЛ &quot;Св. Марина&quot; Варна
                    </li>
                    <li>
                      От 2011 г. до 2019 г. е педиатър и детски ендокринолог в
                      Отделение по педиатрия на МБАЛ Добрич
                    </li>
                    <li>
                      От 2016 г. е част от екипа специалисти на ДКЦ 2 - Медика
                      като детски ендокринолог
                    </li>
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
            name: "Д-р Мариана Москова",
            jobTitle: "Детски ендокринолог",
            affiliation: "Медика 55",
            image: "https://medica55.bg/moskova.jpg",
            url: "https://medica55.bg/team/moskova",
            description:
              "Д-р Мариана Москова - специалист детски ендокринолог и педиатър в Медика 55 с над 20 години опит. Извършва прегледи, диагностика и лечение на деца с ендокринологични проблеми.",
            knowsAbout: [
              "Детска ендокринология",
              "Педиатрия",
              "Болести на обмяната",
              "Заболявания на щитовидната жлеза",
              "Диабет при деца",
              "Заболявания на надбъбречните жлези",
              "Проблеми с растежа и развитието",
            ],
          }),
        }}
      />
    </div>
  );
}
