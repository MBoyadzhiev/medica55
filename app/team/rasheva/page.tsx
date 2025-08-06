import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Д-р Ния Рашева | Детски гастроентеролог - Медика 55",
  description:
    "Д-р Ния Рашева - специалист по детска гастроентерология в Медика 55. Специализира се в мотилитетни нарушения, жлъчно-чернодробни заболявания и възпалителни чревни заболявания.",
  alternates: {
    canonical: "https://medica55.bg/team/rasheva",
  },
};

export default function RashevaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-hero.jpg"
          alt="Д-р Ния Рашева - детски гастроентеролог"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Д-р Ния Рашева
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
                src="/rasheva.jpg"
                alt="Д-р Ния Рашева"
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
                    <li>
                      Висше медицинско образование през 2004г. МУ-Пловдив с
                      отличен успех
                    </li>
                    <li>През 2013г. придобита специалност по Педиатрия</li>
                    <li>
                      През 2016 г. специалност по детска гастроентерология
                    </li>
                    <li>
                      През 2018 г. защитена дисертация към Катедра Педиатрия ОНС
                      &quot;доктор&quot;
                    </li>
                    <li>Придобити сертификати по абдоминална ехография</li>
                    <li>Придобити сертификати по горна и долна ендоскопия</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Специалности и сертификати
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Педиатрия</li>
                    <li>Детска гастроентерология</li>
                    <li>Абдоминална ехография</li>
                    <li>Ендоскопия</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Области на Специализация
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Мотилитетни нарушения на горен и долен храносмилателен
                      тракт
                    </li>
                    <li>Жлъчно-чернодробни заболявания</li>
                    <li>Заболявания на панкреас</li>
                    <li>Болести на натрупването</li>
                    <li>Възпалителни чревни заболявания</li>
                    <li>Автоимунни заболявания - целиакия</li>
                    <li>Автоимунен хепатит</li>
                    <li>Кистозна фиброза с гастроентерологично засягане</li>
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
            name: "Д-р Ния Рашева",
            jobTitle: "Детски гастроентеролог",
            affiliation: "Медика 55",
            image: "https://medica55.org/rasheva.jpg",
            url: "https://medica55.org/team/rasheva",
            description:
              "Д-р Ния Рашева - специалист по детска гастроентерология в Медика 55. Специализира се в мотилитетни нарушения, жлъчно-чернодробни заболявания и възпалителни чревни заболявания.",
            knowsAbout: [
              "Детска гастроентерология",
              "Педиатрия",
              "Абдоминална ехография",
              "Ендоскопия",
              "Мотилитетни нарушения",
              "Жлъчно-чернодробни заболявания",
              "Възпалителни чревни заболявания",
              "Автоимунни заболявания",
            ],
          }),
        }}
      />
    </div>
  );
}
