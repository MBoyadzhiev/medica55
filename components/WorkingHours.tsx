import { IconClock } from "@tabler/icons-react";

const WorkingHours = () => (
  <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-auto flex flex-col gap-8">
    <h2 className="text-3xl font-bold text-sky-700 mb-2 flex items-center gap-2">
      <IconClock className="w-7 h-7 text-sky-700" /> Работно време
    </h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b pb-2">
        <span className="text-gray-700">Понеделник - Петък:</span>
        <span className="font-semibold text-gray-800">6:00 - 21:00 </span>
      </div>
      <div className="flex justify-between items-center border-b pb-2">
        <span className="text-gray-700">Събота:</span>
        <span className="font-semibold text-gray-800">10:00 AM - 16:00</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-700">Неделя:</span>
        <span className="font-semibold text-gray-800">8:00 - 17:00 </span>
      </div>
    </div>
  </div>
);

export default WorkingHours;
