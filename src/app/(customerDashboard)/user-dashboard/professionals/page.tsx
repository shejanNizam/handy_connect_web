"use client";

import Link from "next/link";
import { MdChevronRight, MdOutlineWaterDrop, MdVerified } from "react-icons/md";

// Mock data based on image_1505d9.png
const professionals = [
  {
    id: 1,
    name: "John Mayer",
    category: "Plumber",
    zip: "1234",
    trustScore: "100% Trusted",
  },
  {
    id: 2,
    name: "John Mayer",
    category: "Plumber",
    zip: "1234",
    trustScore: "100% Trusted",
  },
  {
    id: 3,
    name: "John Mayer",
    category: "Plumber",
    zip: "1234",
    trustScore: "100% Trusted",
  },
];

export default function Professionals() {
  return (
    <div className=" space-y-6">
      <div className="w-full mx-auto space-y-4">
        {professionals?.map((pro) => (
          <div
            key={pro.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            {/* Header: Verified Status & Trust Badge */}
            <div className="px-6 py-4 flex justify-between items-center border-b border-gray-50">
              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                <MdVerified className="text-xl" />
                <span>Verified Professional</span>
              </div>
              <div className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tight">
                {pro.trustScore}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  {/* Profile Placeholder with Status Dot */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {/* Placeholder circle as seen in image */}
                      <div className="w-full h-full bg-[#E2E8F0]" />
                    </div>
                    <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {pro.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <MdOutlineWaterDrop className="text-blue-400" />
                      <span>{pro.category}</span>
                    </div>
                  </div>
                </div>

                {/* Right Arrow Link */}
                <Link
                  href={`/user-dashboard/professionals/${pro.id}`}
                  className="p-2 text-amber-500 hover:bg-amber-50 rounded-full transition-colors"
                >
                  <MdChevronRight size={32} />
                </Link>
              </div>

              {/* Footer Section: Zip Code & Send Request */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Zip Code
                  </p>
                  <p className="text-lg font-bold text-amber-500">{pro.zip}</p>
                </div>

                <Link
                  href={`/user-dashboard/professionals/request`}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-amber-500/20 transition-all text-center"
                >
                  Send Request
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
