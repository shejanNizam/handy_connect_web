"use client";
import { useState } from "react";

interface Job {
  id: number;
  title: string;
  category: string;
  client: string;
  clientInitials: string;
  submittedAgo: string;
  description: string;
  aiDiagnosis: string;
  distance: string;
  schedule: string;
  priceMin: number;
  priceMax: number;
  address: string;
  zipCode: string;
  phone: string;
  mediaCount: number;
}

const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Fix Running Toilet",
    category: "plumbing",
    client: "Emma Davis",
    clientInitials: "ED",
    submittedAgo: "Submitted 1d ago",
    description:
      "Toilet keeps running after flushing. Probably needs new flapper.",
    aiDiagnosis: "Faulty flapper valve or fill valve",
    distance: "1.5 km away",
    schedule: "Flexible",
    priceMin: 60,
    priceMax: 90,
    address: "45 Maple St, Tel Aviv",
    zipCode: "61000",
    phone: "0501234567",
    mediaCount: 0,
  },
  {
    id: 2,
    title: "Fix Running Toilet",
    category: "plumbing",
    client: "Emma Davis",
    clientInitials: "ED",
    submittedAgo: "Submitted 2d ago",
    description:
      "Toilet keeps running after flushing. Probably needs new flapper.",
    aiDiagnosis: "Blockage in P-trap or main drain line",
    distance: "1.5 km away",
    schedule: "Flexible",
    priceMin: 60,
    priceMax: 90,
    address: "102 Allenby St, Tel Aviv",
    zipCode: "65812",
    phone: "0501123334",
    mediaCount: 1,
  },
  {
    id: 3,
    title: "Fix Running Toilet",
    category: "plumbing",
    client: "Emma Davis",
    clientInitials: "ED",
    submittedAgo: "Submitted 3h ago",
    description:
      "Toilet keeps running after flushing. Probably needs new flapper.",
    aiDiagnosis: "Worn cartridge or O-ring seal",
    distance: "1.5 km away",
    schedule: "Flexible",
    priceMin: 60,
    priceMax: 90,
    address: "17 Dizengoff St, Tel Aviv",
    zipCode: "64332",
    phone: "0529876543",
    mediaCount: 2,
  },
];

function JobDetailView({
  job,
  onBack,
  onAccept,
  onDecline,
}: {
  job: Job;
  onBack: () => void;
  onAccept: () => void;
  onDecline: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 shrink-0">
        <button
          onClick={onBack}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-base font-semibold text-gray-900">{job.title}</h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-lg mx-auto p-4 flex flex-col gap-3">
          {/* Client card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600 shrink-0">
              {job.clientInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {job.client}
              </p>
              <p className="text-xs text-gray-400">{job.submittedAgo}</p>
            </div>
          </div>

          {/* Problem Description */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Problem Description
            </p>
            <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </div>
          </div>

          {/* AI Diagnosis */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              AI Diagnosis
            </p>
            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <p className="text-sm text-red-500 font-medium">
                AI: {job.aiDiagnosis}
              </p>
            </div>
          </div>

          {/* Uploaded Media */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Uploaded Media
              </p>
              <span className="text-xs text-gray-400">
                {job.mediaCount} files
              </span>
            </div>
            {job.mediaCount > 0 ? (
              <div className="bg-gray-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center relative">
                <button className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="absolute bottom-2 left-2">
                  <span className="text-xs text-white/60 bg-black/40 px-1.5 py-0.5 rounded">
                    MP4
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="text-xs text-white/60 bg-black/40 px-1.5 py-0.5 rounded">
                    5.8 MB
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-dashed border-gray-200 rounded-xl py-8 flex items-center justify-center">
                <p className="text-sm text-gray-400">No media uploaded</p>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Contact Details
            </p>
            <div className="flex flex-col gap-2">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-red-500"
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
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Address</p>
                  <p className="text-sm text-gray-700">{job.address}</p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Zip Code</p>
                  <p className="text-sm text-gray-700">{job.zipCode}</p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Phone Number
                  </p>
                  <p className="text-sm text-gray-700">{job.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 flex gap-3">
        <button
          onClick={onAccept}
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
          onClick={onDecline}
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
    </div>
  );
}

// ── JobCard is 100% identical to the original ──────────────────────────────
function JobCard({ job, onOpen }: { job: Job; onOpen: () => void }) {
  const [status, setStatus] = useState<"pending" | "accepted" | "declined">(
    "pending",
  );

  if (status === "declined") return null;

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm cursor-pointer"
      onClick={() => status === "pending" && onOpen()}
    >
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
            onClick={(e) => {
              e.stopPropagation();
              setStatus("accepted");
            }}
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
            onClick={(e) => {
              e.stopPropagation();
              setStatus("declined");
            }}
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
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <>
      <div className="w-full mx-auto flex flex-col gap-4">
        {sampleJobs.map((job) => (
          <JobCard key={job.id} job={job} onOpen={() => setSelectedJob(job)} />
        ))}
      </div>

      {selectedJob && (
        <JobDetailView
          job={selectedJob}
          onBack={() => setSelectedJob(null)}
          onAccept={() => setSelectedJob(null)}
          onDecline={() => setSelectedJob(null)}
        />
      )}
    </>
  );
}
