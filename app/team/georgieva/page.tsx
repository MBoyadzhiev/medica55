import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проф. д-р Миглена Георгиева | Детски гастроентеролог - Медика 55",
  description:
    "Проф. д-р Миглена Георгиева - специалист по детска гастроентерология и хранене в Медика 55. Началник Втора детска клиника към УМБАЛ Света Марина - Варна.",
  alternates: {
    canonical: "https://medica55.bg/team/georgieva",
  },
};

export default function GeorgievaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-hero.jpg"
          alt="Проф. д-р Миглена Георгиева - детски гастроентеролог"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Проф. д-р Миглена Георгиева
            </h1>
            <p className="text-xl md:text-2xl">Детски гастроентеролог</p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/georgieva.jpg"
                alt="Проф. д-р Миглена Георгиева"
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
                    Образование и Квалификации
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Родена в гр. Варна, през 1961 г.</li>
                    <li>
                      Възпитаник на IV ЕГ &quot;Фредерик Жолио Кюри&quot; с
                      преподаване на френски език
                    </li>
                    <li>
                      Завършва медицина през 1986 г. в Ленинград -
                      &quot;Ленинградски педиатрически медицински институт&quot;
                      с пълно отличие
                    </li>
                    <li>
                      През 1996 г. защитава дисертация в областта на детската
                      гастроентерология
                    </li>
                    <li>
                      През 1992 г. придобива специалност по детски болести
                    </li>
                    <li>
                      През 2005 г. - специалност по детска гастроентерология
                    </li>
                    <li>
                      През 2010 г. се хабилитира към Катедрата по педиатрия и
                      медицинска генетика - МУ &quot;Проф. д-р П. Стоянов&quot;
                    </li>
                    <li>
                      През 2018 г. придобива специалност по хранене и диететика
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Професионален Опит
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      От 1.04.2014 г. и понастоящем е Началник Втора детска
                      клиника към УМБАЛ &quot;Света Марина&quot; - Варна
                    </li>
                    <li>
                      Работи в областта на детската гастроентерология и хранене
                    </li>
                    <li>
                      Има специализации в Полша, Словения, Испания и Австрия,
                      Великобритания
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Специалности
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Педиатрия</li>
                    <li>Детска гастроентерология</li>
                    <li>Хранене и диететика</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Области на Работа
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Заболявания на горния и долен храносмилателен тракт</li>
                    <li>Хеликобактер пилори инфекция</li>
                    <li>Чернодробна патология</li>
                    <li>Хранителна алергия</li>
                    <li>Приложение на пробиотиците</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Научна Дейност
                  </h3>
                  <p>
                    Има над 230 участия и публикация в научни конгреси у нас и в
                    чужбина.
                  </p>
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
            name: "Проф. д-р Миглена Георгиева",
            jobTitle: "Детски гастроентеролог",
            affiliation: "Медика 55",
            image: "https://medica55.bg/georgieva.jpg",
            url: "https://medica55.bg/team/georgieva",
            description:
              "Проф. д-р Миглена Георгиева - специалист по детска гастроентерология и хранене в Медика 55. Началник Втора детска клиника към УМБАЛ Света Марина - Варна.",
            knowsAbout: [
              "Детска гастроентерология",
              "Педиатрия",
              "Хранене и диететика",
              "Заболявания на храносмилателния тракт",
              "Хеликобактер пилори инфекция",
              "Чернодробна патология",
              "Хранителна алергия",
            ],
          }),
        }}
      />
    </div>
  );
}
