import { IconClock } from "@tabler/icons-react";

const WorkingHours = () => (
  <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-auto flex flex-col gap-8">
    <h2 className="text-3xl font-bold text-sky-700 mb-2 flex items-center gap-2">
      <IconClock className="w-7 h-7 text-sky-700" /> Working Hours
    </h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b pb-2">
        <span className="text-gray-700">Monday - Friday:</span>
        <span className="font-semibold text-gray-800">6:00 AM - 9:00 PM</span>
      </div>
      <div className="flex justify-between items-center border-b pb-2">
        <span className="text-gray-700">Saturday:</span>
        <span className="font-semibold text-gray-800">7:00 AM - 8:00 PM</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-700">Sunday:</span>
        <span className="font-semibold text-gray-800">8:00 AM - 7:00 PM</span>
      </div>
    </div>
    <div className="mt-6 bg-sky-50 rounded-lg p-4 text-center">
      <span className="text-sm text-gray-600">
        <strong>Pool Maintenance:</strong> Daily 1:00 PM - 2:00 PM
      </span>
    </div>
  </div>
);

export default WorkingHours;
