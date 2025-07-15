"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type CardType = {
  title: string;
  src: string;
  width: number;
  height: number;
  description?: React.ReactNode;
  className?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        card.className
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        className="object-cover w-full h-full absolute inset-0"
        width={card.width}
        height={card.height}
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/20 flex items-end py-8 px-4 transition-opacity duration-300",
          "opacity-100"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  // Special grid for 5 cards: 3 on top, 2 centered below
  const isFiveCards = cards.length === 5;
  return (
    <div
      className={
        isFiveCards
          ? "hidden md:grid grid-cols-3 grid-rows-2 gap-8 max-w-7xl mx-auto md:px-8 w-full"
          : "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto md:px-8 w-full"
      }
      style={isFiveCards ? { gridTemplateRows: "1fr 1fr" } : {}}
    >
      {isFiveCards
        ? [
            // First row: 3 cards
            ...cards
              .slice(0, 3)
              .map((card, index) => (
                <Card
                  key={card.title}
                  card={card}
                  index={index}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              )),
            // Second row: 2 cards centered
            <div key="spacer-left" className="hidden md:block" />,
            ...cards
              .slice(3)
              .map((card, index) => (
                <Card
                  key={card.title}
                  card={card}
                  index={index + 3}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              )),
            <div key="spacer-right" className="hidden md:block" />,
          ]
        : cards.map((card, index) => (
            <Card
              key={card.title}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
    </div>
  );
}
