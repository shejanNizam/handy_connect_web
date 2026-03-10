"use client";

import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IoCheckmarkCircle,
  IoFlashOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";

export const dynamic = "force-dynamic";

export default function Application() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleFindProfessional = () => {
    setIsModalOpen(false);
    router.push("/user-dashboard/professionals");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full space-y-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-[#D1FAE5] text-[#10B981] rounded-full flex items-center justify-center shadow-sm">
            <IoCheckmarkCircle size={40} />
          </div>
          <h1 className="text-3xl font-black text-gray-900">
            Application Sent!
          </h1>
          <p className="text-gray-500 font-medium">
            {"Your request has been submitted. Here's what happens next."}
          </p>
        </div>

        {/* Process Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            What happens next
          </p>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-[#FFF7E8] text-[#F59E0B] rounded-2xl flex items-center justify-center shrink-0">
                <LuSparkles size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Automated Matching
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our system is finding the best plumbers in your area based on
                  your zip code and issue type.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-[#EEF2FF] text-[#4F46E5] rounded-2xl flex items-center justify-center shrink-0">
                <IoMailOutline size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Request Emailed to Providers
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A limited number of matching service providers will receive
                  your request with a link to your media.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-[#F5F3FF] text-[#7C3AED] rounded-2xl flex items-center justify-center shrink-0">
                <IoPeopleOutline size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Providers Respond
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Interested providers will reach out to you directly with their
                  quote and availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Request Details Summary */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Your Request
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-medium">Issue</span>
              <span className="text-gray-900 font-bold">
                Burst Pipe (Under Sink)
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-medium">
                Professional
              </span>
              <span className="text-gray-900 font-bold">Plumber</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-medium">
                Providers Notified
              </span>
              <span className="text-gray-900 font-bold">Up to 5 nearby</span>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-4 flex items-center gap-3">
          <IoShieldCheckmarkOutline className="text-[#10B981] text-xl" />
          <p className="text-[#065F46] text-xs font-bold">
            Free & non-binding{" "}
            <span className="text-[#10B981] font-medium mx-2">—</span>
            <span className="font-medium">
              {"you're under no obligation to accept any quote."}
            </span>
          </p>
        </div>

        {/* Main Action */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-black rounded-xl shadow-lg shadow-orange-100 transition-all active:scale-[0.98]"
        >
          Send an offer
        </button>
      </div>

      {/* Direct Hire Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        closable={false}
        width={480}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#FFFBEB] text-[#F59E0B] rounded-full flex items-center justify-center mb-8 shadow-inner">
            <IoFlashOutline size={40} />
          </div>

          <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
            Direct Hire a Professional
          </h2>

          <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 px-4">
            {
              "Don't want to wait? Browse verified professionals in your area and hire directly — fast, trusted, and fee-free."
            }
          </p>

          <div className="w-full bg-[#FAFBFC] border border-gray-100 rounded-2xl p-6 space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#F59E0B] text-xl" />
              <span className="text-gray-700 text-sm font-bold">
                Instant access to nearby professionals
              </span>
            </div>
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#F59E0B] text-xl" />
              <span className="text-gray-700 text-sm font-bold">
                All providers are verified & trusted
              </span>
            </div>
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#F59E0B] text-xl" />
              <span className="text-gray-700 text-sm font-bold">
                Skip the wait — hire on your schedule
              </span>
            </div>
          </div>

          <div className="w-full space-y-4">
            <button
              onClick={handleFindProfessional}
              className="w-full py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-black rounded-xl shadow-lg shadow-orange-100 transition-all active:scale-[0.98]"
            >
              Send an offer
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 text-gray-400 font-bold hover:text-gray-600 transition-colors text-sm"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
