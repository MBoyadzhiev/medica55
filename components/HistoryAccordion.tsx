import { useState } from "react";

const historyData = [
  {
    period: "Детска Гастроентерология",
    text: (
      <ul className="list-disc pl-6">
        <li>Диагностика и лечение на стомашно-чревни заболявания при деца</li>
        <li>Проследяване на хронични гастроентерологични състояния</li>
        <li>Консултации при коремна болка, повръщане, диария, запек</li>
        <li>Хранителни алергии и непоносимости</li>
        <li>Ултразвукова диагностика на коремни органи</li>
      </ul>
    ),
  },
  {
    period: "Детска Пулмология",
    text: (
      <ul className="list-disc pl-6">
        <li>Диагностика и лечение на астма, бронхити, пневмонии</li>
        <li>Проследяване на деца с чести респираторни инфекции</li>
        <li>Функционално изследване на дишането (спирометрия)</li>
        <li>Лечение на алергичен ринит и синузит</li>
      </ul>
    ),
  },
  {
    period: "Детска Алергология",
    text: (
      <ul className="list-disc pl-6">
        <li>Диагностика и лечение на хранителни, дихателни и кожни алергии</li>
        <li>Лечение на атопичен дерматит, уртикария, алергичен конюнктивит</li>
        <li>Имунотерапия при алергии</li>
      </ul>
    ),
  },
  {
    period: "Детска Ендокринология",
    text: (
      <ul className="list-disc pl-6">
        <li>Проследяване на растеж и развитие при деца</li>
        <li>Диагностика и лечение на диабет тип 1</li>
        <li>Лечение на заболявания на щитовидната жлеза</li>
        <li>Проследяване на пубертетни нарушения</li>
        <li>Консултации при затлъстяване и метаболитни нарушения</li>
      </ul>
    ),
  },
  {
    period: "Детска Ревматология",
    text: (
      <ul className="list-disc pl-6">
        <li>
          Диагностика и лечение на ставни болки и възпалителни ставни
          заболявания
        </li>
        <li>Проследяване на автоимунни и автоинфламаторни заболявания</li>
        <li>Лечение на системни заболявания на съединителната тъкан</li>
        <li>Консултации при оток и болка в ставите</li>
        <li>Ехографска диагностика на стави</li>
      </ul>
    ),
  },
];

const HistoryAccordion = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto divide-y divide-sky-200 p-4">
      {historyData.map((item, idx) => (
        <div key={item.period}>
          <button
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span className="text-lg font-semibold text-sky-700">
              {item.period}
            </span>
            <span className="ml-2 text-sky-500">
              {openIdx === idx ? "-" : "+"}
            </span>
          </button>
          {openIdx === idx && (
            <div className="pb-4 text-gray-700 text-xl animate-fade-in">
              {item.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HistoryAccordion;
