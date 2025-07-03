"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

// Helper to get all dates for a weekday in a month
function getWeekdayDates(year: number, month: number, weekday: number): Date[] {
  const dates: Date[] = [];
  const d = new Date(year, month, 1);
  while (d.getMonth() === month) {
    if (d.getDay() === weekday) {
      dates.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

// Get all Mondays (1), Tuesdays (2), and Thursdays (4) for the current month
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const mondays = getWeekdayDates(year, month, 1);
const tuesdays = getWeekdayDates(year, month, 2);
const thursdays = getWeekdayDates(year, month, 4);

const allTrainingDates = [...mondays, ...tuesdays, ...thursdays];

const events = allTrainingDates.map((date) => ({
  date,
  time: "5:00 PM",
  title: "Training Session",
  description: "Training at the pool. Bring your gear!",
}));

function isSameDay(a: Date, b: Date) {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

const eventDays = events.map((e) => e.date);

const TrainingCalendar = () => {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=martin.boyadzhiev%40clouddo.eu&ctz=Europe%2FSofia"
        style={{ border: 0 }}
        width="1000"
        height="600"
        frameBorder="0"
        scrolling="no"
        className="rounded-lg shadow-lg w-full max-w-5xl h-[600px] min-h-[400px]"
        title="Whittier Club Water Polo Training Calendar"
      ></iframe>
    </div>
  );
};

export default TrainingCalendar;
