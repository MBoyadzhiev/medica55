"use client";

import "react-day-picker/dist/style.css";

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
