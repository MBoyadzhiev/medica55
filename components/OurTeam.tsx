"use client";

"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

const cards = [
  {
    title: "Проф. д-р Миглена Георгиева",
    src: "/georgieva.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Специалист по детска гастроентерология с дългогодишен опит в
        диагностиката и лечението на стомашно-чревни заболявания при деца. Автор
        на множество научни публикации и преподавател в Медицински университет.
      </p>
    ),
  },
  {
    title: "Д-р Ния Рашева",
    src: "/rasheva.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Детски гастроентеролог с експертиза в лечението на астма, бронхити и
        други гастроентерологични заболявания при деца. Известна с индивидуалния
        си подход към всеки пациент.
      </p>
    ),
  },
  {
    title: "Д-р Мартина Гълъбова",
    src: "/galabova.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Специалист по детска алергология и пулмология. Провежда алергологични
        тестове и съвременно лечение на алергии и белодробни заболявания при
        деца.
      </p>
    ),
  },
  {
    title: "Д-р Мариана Москова",
    src: "/moskova.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Д-р Мариана Москова е специалист детски ендокринолог и педиатър в с над
        20 години опит. Извършва прегледи, диагностика и лечение на деца с общи
        и ендокринологични проблеми.
      </p>
    ),
  },
  {
    title: "Д-р Мартин Бояджиев",
    src: "/boyadzhiev.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Детски ревматолог с над 10 години медицински опит с интереси в областта
        на диагностиката и лечението на автоинфламаторни заболявания, периодични
        синдроми и васкулити. Извършва диагностика и лечение на ревматологични
        заболявания, възпалителни и дегенеративни ставни заболявания, системни
        заболявания на съединителната тъкан и др.
      </p>
    ),
  },
];

export function OurTeam() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="w-full bg-white py-16 flex flex-col items-center justify-center mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black dark:text-black">
        Нашият екип
      </h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white sm:rounded-3xl overflow-hidden dark:bg-white/95"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="w-28 h-28 flex-shrink-0 mx-auto"
              >
                <Image
                  width={112}
                  height={112}
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default OurTeam;
