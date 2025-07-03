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
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const selectedEvents = selected
    ? events.filter((e) => isSameDay(e.date, selected))
    : [];

  return (
    <div className="p-12 max-w-xl mx-auto">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected as any}
        modifiers={{ event: eventDays }}
        modifiersClassNames={{ event: "bg-blue-200 text-blue-900 font-bold" }}
        className="mx-auto"
      />
      {selected && selectedEvents.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            Events on {selected.toLocaleDateString()}
          </h3>
          <ul>
            {selectedEvents.map((event, idx) => (
              <li
                key={idx}
                className="mb-2 p-3 rounded bg-blue-50 border border-blue-200"
              >
                <div className="font-bold">{event.title}</div>
                <div className="text-sm text-blue-800">{event.time}</div>
                <div className="text-sm">{event.description}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selected && selectedEvents.length === 0 && (
        <div className="mt-6 text-gray-500 text-center">
          No events for this day.
        </div>
      )}
    </div>
  );
};

export default TrainingCalendar;
