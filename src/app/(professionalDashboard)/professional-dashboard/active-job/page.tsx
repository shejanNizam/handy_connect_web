"use client";
import { useState } from "react";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8L6.5 11.5L13 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThumbsDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M10 2H11.5C12.33 2 13 2.67 13 3.5V8.5C13 9.33 12.33 10 11.5 10H10M6 10L7 14H8C8.55 14 9 13.55 9 13V10M6 10H3.5C2.67 10 2 9.33 2 8.5V3.5C2 2.67 2.67 2 3.5 2H9L10 2V10H6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapPinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 1C5.79 1 4 2.79 4 5C4 8.25 8 14 8 14C8 14 12 8.25 12 5C12 2.79 10.21 1 8 1ZM8 6.5C7.17 6.5 6.5 5.83 6.5 5C6.5 4.17 7.17 3.5 8 3.5C8.83 3.5 9.5 4.17 9.5 5C9.5 5.83 8.83 6.5 8 6.5Z"
      fill="#9CA3AF"
    />
  </svg>
);

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CircleCheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    <path
      d="M7 12L10.5 15.5L17 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function JobDetailsCard() {
  const [priceRating, setPriceRating] = useState<"good" | "bad">("good");

  const steps = [
    { id: 1, label: "Accepted", active: true },
    { id: 2, label: "On The Way", active: false },
    { id: 3, label: "In Progress", active: false },
    { id: 4, label: "Completed", active: false },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col gap-3">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">Michael Ben</p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPinIcon />
                <span className="text-xs text-gray-400">
                  22 Dizengoff St, Tel Aviv
                </span>
              </div>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-sm hover:bg-amber-500 transition-colors">
            <ChatIcon />
          </button>
        </div>

        {/* Job Details Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Job Details
          </p>

          {/* Issue Box */}
          <div className="bg-gray-50 rounded-xl p-3 flex items-start justify-between mb-3 border border-gray-100">
            <div>
              <p className="text-xs text-gray-400 mb-1">Detected Issue</p>
              <p className="text-sm font-semibold text-gray-800">
                Burst Pipe (Under Sink)
              </p>
            </div>
            <span className="text-xs text-gray-500 border border-gray-300 rounded-md px-2 py-0.5 whitespace-nowrap ml-2 mt-0.5">
              High Severity
            </span>
          </div>

          {/* Price Box */}
          <div className="bg-gray-50 rounded-xl px-4 py-3 inline-block mb-4 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">Est. Price</p>
            <p className="text-base font-bold text-amber-500">
              ₪350 - <span className="text-amber-500">₪500</span>
            </p>
          </div>

          {/* Price Fair */}
          <p className="text-sm font-medium text-gray-700 mb-2">
            Is this price fair?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPriceRating("good")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                priceRating === "good"
                  ? "bg-amber-400 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <CheckIcon />
              Good estimation
            </button>
            <button
              onClick={() => setPriceRating("bad")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                priceRating === "bad"
                  ? "bg-amber-400 text-white"
                  : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              <ThumbsDownIcon />
              Bad Estimation
            </button>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-semibold text-gray-700 mb-4">Progress</p>
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center gap-3 relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-4 top-8 w-0.5 h-4 ${
                      step.active ? "bg-green-500" : "bg-gray-200"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                  />
                )}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                    step.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {step.id}
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      step.active ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  {step.active && (
                    <p className="text-xs text-green-500 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Active now
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-2xl p-3 shadow-sm">
          <button className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm">
            <CircleCheckIcon />
            {"I'm on The Way"}
          </button>
        </div>
      </div>
    </div>
  );
}
