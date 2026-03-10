"use client";
import { useState } from "react";

const StarRating = ({ rating, max = 5 }: { rating: number; max?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function PlumberDashboard() {
  const [jobDeclined, setJobDeclined] = useState(false);
  const [jobAccepted, setJobAccepted] = useState(false);

  return (
    <>
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-semibold text-sm">
              MJ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-gray-900">
                  Welcome, Mike
                </h1>
                <span className="flex items-center gap-1 text-xs text-green-600 border border-green-200 bg-green-50 rounded-full px-2 py-0.5">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Master Plumber • Member since 2022
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Online & Accepting Jobs
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Active Jobs</p>
            <p className="text-3xl font-bold text-gray-900">3</p>
            <p className="text-xs text-gray-400 mt-1">1 pending completion</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Rating</p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-gray-900">4.9</p>
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-1">Based on 142 reviews</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Response Rate</p>
            <p className="text-3xl font-bold text-gray-900">98%</p>
            <p className="text-xs text-green-500 mt-1">Excellent standing</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="col-span-2 space-y-4">
            {/* Active Jobs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-800">Active Jobs</h2>
                <span className="w-6 h-6 rounded-full bg-yellow-400 text-white text-xs flex items-center justify-center font-semibold">
                  1
                </span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Michael Ben</p>
                  <p className="text-sm text-gray-500">
                    22 Dizengoff St, Tel Aviv
                  </p>
                  <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
                    On the way
                  </span>
                </div>
                <button className="text-gray-300 hover:text-gray-500 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* New Job Requests */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-800">
                  New Job Requests
                </h2>
                <span className="text-xs bg-blue-500 text-white rounded-full px-3 py-1">
                  3 New
                </span>
              </div>

              {!jobDeclined && !jobAccepted ? (
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">
                          Emergency Pipe Leak
                        </span>
                        <span className="text-xs bg-red-100 text-red-500 rounded-full px-2 py-0.5">
                          Emergency
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-500 rounded-full px-2 py-0.5">
                          plumbing
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">Sarah Jenkins</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-orange-500">
                        €120 - €150
                      </p>
                      <p className="text-xs text-gray-400">Estimated</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4 text-sm text-gray-600 italic">
                    Water leaking rapidly under kitchen sink. Need someone
                    immediately.
                  </div>

                  <div className="flex items-center gap-5 text-sm text-gray-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      2.3 km away
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      ASAP
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setJobAccepted(true)}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Accept Job
                    </button>
                    <button
                      onClick={() => setJobDeclined(true)}
                      className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Decline
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-center h-24 text-sm text-gray-400">
                  {jobAccepted ? "✅ Job accepted!" : "❌ Job declined."}
                </div>
              )}
            </div>
          </div>

          {/* Right Column — Recent Reviews */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-3">Recent Reviews</h2>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-800 text-sm">
                    John Smith
                  </p>
                  <p className="text-xs text-gray-400">2 days ago</p>
                </div>
                <StarRating rating={5} />
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Mike was fantastic. Arrived on time, fixed the issue quickly,
                  and left the place clean.
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-800 text-sm">
                    Lisa Wong
                  </p>
                  <p className="text-xs text-gray-400">1 week ago</p>
                </div>
                <StarRating rating={5} />
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Very professional and reasonably priced. Will definitely hire
                  again for future plumbing needs.
                </p>
              </div>

              <button className="w-full text-center text-sm text-gray-500 hover:text-gray-700 py-2 transition-colors">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
