"use client";
import { useState } from "react";

interface Job {
  id: number;
  title: string;
  category: string;
  client: string;
  description: string;
  distance: string;
  schedule: string;
  priceMin: number;
  priceMax: number;
}

const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Fix Running Toilet",
    category: "plumbing",
    client: "Emma Davis",
    description:
      "Toilet keeps running after flushing. Probably needs new flapper.",
    distance: "1.5 km away",
    schedule: "Flexible",
    priceMin: 60,
    priceMax: 90,
  },
  {
    id: 2,
    title: "Fix Running Toilet",
    category: "plumbing",
    client: "Emma Davis",
    description:
      "Toilet keeps running after flushing. Probably needs new flapper.",
    distance: "1.5 km away",
    schedule: "Flexible",
    priceMin: 60,
    priceMax: 90,
  },
  {
    id: 3,
    title: "Fix Running Toilet",
    category: "plumbing",
    client: "Emma Davis",
    description:
      "Toilet keeps running after flushing. Probably needs new flapper.",
    distance: "1.5 km away",
    schedule: "Flexible",
    priceMin: 60,
    priceMax: 90,
  },
];

function JobCard({ job }: { job: Job }) {
  const [status, setStatus] = useState<"pending" | "accepted" | "declined">(
    "pending",
  );

  if (status === "declined") return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-gray-900">{job.title}</h2>
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 font-medium">
            {job.category}
          </span>
        </div>
        <div className="text-right">
          <p className="text-base font-bold text-amber-500">
            €{job.priceMin} – €{job.priceMax}
          </p>
          <p className="text-xs text-gray-400">Estimated</p>
        </div>
      </div>

      {/* Client name */}
      <p className="text-sm text-gray-500 mb-3">{job.client}</p>

      {/* Description */}
      <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 mb-3">
        <p className="text-sm text-gray-600">{job.description}</p>
      </div>

      {/* Meta info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg
            className="w-3.5 h-3.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z"
            />
            <circle cx="12" cy="8" r="2" />
          </svg>
          {job.distance}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg
            className="w-3.5 h-3.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
          </svg>
          {job.schedule}
        </div>
      </div>

      {/* Actions */}
      {status === "accepted" ? (
        <div className="flex items-center justify-center h-11 rounded-xl bg-green-100 text-green-700 font-semibold text-sm">
          ✓ Job Accepted
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => setStatus("accepted")}
            className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm transition-colors"
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Accept Job
          </button>
          <button
            onClick={() => setStatus("declined")}
            className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-colors"
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
      )}
    </div>
  );
}

export default function JobList() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        {sampleJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
