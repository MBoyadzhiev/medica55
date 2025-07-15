"use client";

import { useState } from "react";

const doctors = [
  {
    name: "Проф. д-р Миглена Георгиева",
    url: "https://tidycal.com/medica55varna/prof-georgieva",
    title: "Календар за проф. д-р Миглена Георгиева",
    photo: "/georgieva.jpg",
  },
  {
    name: "Д-р Ния Рашева",
    url: "https://tidycal.com/medica55varna/dr-rasheva",
    title: "Календар за д-р Ния Рашева",
    photo: "/rasheva.jpg",
  },
  {
    name: "Д-р Мартина Гълъбова",
    url: "https://tidycal.com/medica55varna/dr-galabova",
    title: "Календар за д-р Мартина Гълъбова",
    photo: "/galabova.jpg",
  },
  {
    name: "Д-р Мариана Москова",
    url: "https://tidycal.com/medica55varna/dr-moskova",
    title: "Календар за д-р Мариана Москова",
    photo: "/moskova.jpg",
  },
  {
    name: "Д-р Мартин Бояджиев",
    url: "https://tidycal.com/medica55varna/dr-boyadzhiev",
    title: "Календар за д-р Мартин Бояджиев",
    photo: "/boyadzhiev.jpg",
  },
];

export default function AppointmentsList() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Запазете час при нашите специалисти
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, idx) => (
          <div
            key={doctor.name}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl"
          >
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-sky-100 shadow"
            />
            <h2 className="text-xl font-semibold mb-4 text-center">
              {doctor.name}
            </h2>
            <button
              className="px-6 py-2 bg-sky-700 text-white rounded-lg font-semibold shadow hover:bg-sky-800 transition"
              onClick={() => setOpenIdx(idx)}
            >
              Запази час
            </button>
            {/* Modal for calendar */}
            {openIdx === idx && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
                <div className="bg-white rounded-xl shadow-2xl p-4 max-w-2xl w-full max-h-[90vh] overflow-auto relative">
                  <button
                    className="sticky top-2 right-2 float-right text-2xl text-gray-500 hover:text-black z-10 bg-white rounded-full px-2"
                    onClick={() => setOpenIdx(null)}
                    aria-label="Затвори"
                  >
                    &times;
                  </button>
                  <h3 className="text-lg font-bold mb-2 text-center">
                    {doctor.name}
                  </h3>
                  <iframe
                    src={doctor.url}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    style={{ minWidth: "320px", borderRadius: "0.5rem" }}
                    title={doctor.title}
                    allow="camera; microphone; fullscreen;"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
