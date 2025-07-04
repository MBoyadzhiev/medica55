import { useState } from "react";

const historyData = [
  {
    period: "Founding Years (1948-1960)",
    text: "The club was founded in 1948, bringing together passionate athletes and coaches to promote water polo in the region. Early years were marked by dedication, community support, and the first local competitions.",
  },
  {
    period: "Growth and Success (1961-1990)",
    text: "During these decades, the club expanded its youth and adult programs, winning several regional championships and establishing itself as a leader in water polo training and sportsmanship.",
  },
  {
    period: "Modern Era (1991-2020)",
    text: "The club embraced modern training techniques, technology, and international competition. Many athletes went on to compete at national and collegiate levels, and the club hosted major tournaments.",
  },
  {
    period: "2020s and Beyond",
    text: "Today, Whittier Club Water Polo Foundation continues to inspire new generations, focusing on excellence, teamwork, and community involvement. The future is bright for our athletes and supporters!",
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
