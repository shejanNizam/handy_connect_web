import Link from "next/link";
import { FaCheck, FaRegCommentDots } from "react-icons/fa";

export default function SendRequest() {
  const timelineSteps = [
    { label: "Request Received", time: "10:30 AM", completed: true },
    { label: "Job Accepted", time: "10:35 AM", completed: true },
    { label: "On The Way", time: "10:45 AM", completed: true },
    { label: "In Progress", time: "11:00 AM", completed: true },
    { label: "Completed", time: "12:30 PM", completed: true },
    { label: "Review", time: "12:35 PM", completed: true },
    { label: "Closed", time: null, completed: true },
  ];

  return (
    <div className="space-y-6">
      {/* Top Map/Image Section */}
      <div className="w-full h-48 bg-[#E9ECEF] rounded-2xl relative flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
        <div className="absolute top-4 flex gap-2">
          <span className="bg-white px-4 py-1 rounded-full text-xs font-bold shadow-sm">
            Map View
          </span>
          <span className="bg-[#FFF4E5] text-[#FF9800] px-4 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
            <div className="w-2 h-2 bg-[#FF9800] rounded-full"></div> Completed
          </span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#DDE2E5] rounded-full"></div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">David Cohen</h2>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className="text-yellow-500">★</span>
              <span className="font-bold text-gray-700">4.9</span>
              <span>(124 jobs)</span>
            </div>
          </div>
        </div>
        <Link href="/user-dashboard/professionals/request/message">
          <button className="w-12 h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-90">
            <FaRegCommentDots size={20} />
          </button>
        </Link>
      </div>

      {/* Status Timeline Section */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50">
        <h3 className="text-lg font-bold text-gray-800 mb-8">
          Status Timeline
        </h3>
        <div className="relative">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start mb-8 last:mb-0 relative"
            >
              {/* Vertical Line */}
              {index !== timelineSteps.length - 1 && (
                <div className="absolute left-3.75 top-7.5 w-0.5 h-[calc(100%-10px)] bg-[#10B981]"></div>
              )}

              {/* Check Circle */}
              <div className="z-10 w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white shadow-md">
                <FaCheck size={12} />
              </div>

              {/* Label and Time */}
              <div className="flex-1 ml-4 flex justify-between items-center">
                <p className="font-bold text-gray-700">{step.label}</p>
                {step.time && (
                  <p className="text-sm text-gray-400 font-medium">
                    {step.time}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thank You Card */}
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-[#D1FAE5] text-[#10B981] rounded-full flex items-center justify-center mb-2">
          <FaCheck size={28} />
        </div>
        <h2 className="text-2xl font-black text-gray-800">Thank You!</h2>
        <p className="text-gray-500 max-w-sm text-sm font-medium">
          Your review has been submitted successfully. It helps the community
          find great professionals.
        </p>
        <button className="mt-4 bg-[#2563EB] text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
