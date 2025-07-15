import { FocusCards } from "@/components/ui/focus-cards";

const cards = [
  {
    title: "Детска Гастроентерология",
    src: "/ped_gastro.jpg",
    description:
      "Диагностика и лечение на стомашно-чревни заболявания при деца, включително коремна болка, хранителни алергии, хроничен запек и други храносмилателни проблеми.",
  },
  {
    title: "Детска Пулмология",
    src: "/ped_pulmo.jpg",
    description:
      "Проследяване и лечение на респираторни заболявания като астма, бронхити, пневмонии и други белодробни проблеми при деца.",
  },
  {
    title: "Детска Алергология",
    src: "/ped_alergy.jpg",
    description:
      "Диагностика и терапия на алергии, включително хранителни, дихателни и кожни алергии, както и провеждане на алергологични тестове.",
  },
  {
    title: "Детска Ендокринология",
    src: "/ped_endo.jpg",
    description:
      "Проследяване и лечение на хормонални нарушения при деца – растеж, пубертет, щитовидна жлеза, диабет и други ендокринни заболявания.",
  },
  {
    title: "Детска Ревматология",
    src: "/ped_rheuma.jpg",
    description:
      "Диагностика и лечение на ревматологични заболявания при деца, включително ставни болки, автоимунни и възпалителни състояния.",
  },
  {
    title: "Педиатрия",
    src: "/pediatrics.jpg",
    description:
      "Диагностика и лечение на ревматологични заболявания при деца, включително ставни болки, автоимунни и възпалителни състояния.",
  },
];

const CoreValues = () => (
  <section className="w-full bg-white py-16 2xl:py-8 flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Нашите Специалности
      </h2>
      <FocusCards
        cards={cards.map((card) => ({
          title: card.title,
          src: card.src,
          description: (
            <span className="block text-base md:text-lg font-medium mt-2">
              {card.description}
            </span>
          ),
          className: "w-full md:w-[250px] 2xl:w-[250px]",
        }))}
      />
      <div className="mt-10 text-base md:text-lg font-medium text-gray-700 text-left max-w-2xl mx-auto">
        <p>
          Нашата детска клиника предлага специализирана извънболнична помощ в
          областта на педиатрията - гастроентерология, пулмология, алергология,
          ендокринология и ревматология. Екипът ни от опитни специалисти
          осигурява индивидуален подход, съвременна диагностика и лечение за
          всяко дете.
        </p>
        <p className="mt-4">
          Стремим се да създадем спокойна и приятелска среда, в която децата и
          техните семейства получават качествена медицинска грижа, подкрепа и
          внимание. Вашето дете е в сигурни ръце при нас!
        </p>
      </div>
    </div>
  </section>
);

export default CoreValues;
