"use client";

"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const cards = [
  {
    description: "Center Forward",
    title: "Alex Johnson",
    src: "/waterpolo1.jpeg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Alex is known for his powerful shots and leadership in the pool. He has
        been with the club for 3 years and is a key playmaker. Alex also mentors
        new players and helps organize team events.
      </p>
    ),
  },
  {
    description: "Goalkeeper",
    title: "Maria Lopez",
    src: "/waterpolo2.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Maria&apos;s quick reflexes and strategic mind make her one of the top
        goalies in the league. She is a mentor to younger players and volunteers
        as a youth coach.
      </p>
    ),
  },
  {
    description: "Driver",
    title: "Chris Lee",
    src: "/waterpolo3.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Chris is known for his speed and agility, always creating opportunities
        for the team. He joined the club last season and is also a competitive
        swimmer.
      </p>
    ),
  },
  {
    description: "Utility",
    title: "Samantha Green",
    src: "/waterpolo4.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Samantha&apos;s versatility allows her to play any position. She is a
        dedicated team player, club ambassador, and helps with community
        outreach.
      </p>
    ),
  },
  {
    description: "Defender",
    title: "Liam Carter",
    src: "/waterpolo1.jpeg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Liam is a defensive specialist, always ready to block shots and support
        his teammates. He brings energy and focus to every match.
      </p>
    ),
  },
  {
    description: "Attacker",
    title: "Emily Chen",
    src: "/waterpolo2.jpg",
    ctaText: "See More",
    ctaLink: "#",
    content: () => (
      <p>
        Emily is a fast and creative attacker, known for her quick passes and
        accurate shots. She joined the club two years ago and is a rising star.
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
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Our Team
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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
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
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
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
                <img
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
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
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
