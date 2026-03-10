"use client";

import { Modal } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  MdCheckCircleOutline,
  MdFavoriteBorder,
  MdOutlineShield,
  MdOutlineWarningAmber,
} from "react-icons/md";

export const dynamic = "force-dynamic";

export default function AIDiagnosisPage() {
  const router = useRouter();

  const params = useParams();
  // const currentCategory = params?.category as string;

  const currentCategory =
    typeof params.category === "string" ? params.category : "";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendOffer = () => {
    setIsModalOpen(false);
    router.push(`/user-dashboard/application`);
  };

  return (
    <div className="space-y-4">
      {/* Main Diagnosis Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
          <MdCheckCircleOutline className="text-amber-500 text-2xl" />
          <h2 className="text-lg font-bold text-gray-800">AI Diagnosis</h2>
        </div>

        {/* Detected Issue Section */}
        <div className="bg-[#F8FAFC] rounded-xl p-6 mb-6 relative">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Detected Issue
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Burst Pipe (Under Sink)
          </h3>
          <span className="absolute top-6 right-6 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            High Severity
          </span>
        </div>

        {/* Suggested Cause */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-gray-800 mb-2">
            Suggested Cause
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Likely caused by corrosion or high water pressure affecting the
            joint connection. Immediate attention recommended to prevent water
            damage.
          </p>
        </div>

        {/* Price and Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-xl p-6">
            <p className="text-xs font-medium text-gray-400 mb-1">Est. Price</p>
            <p className="text-xl font-bold text-green-600">€350 - €500</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-6">
            <p className="text-xs font-medium text-gray-400 mb-1">
              Professional
            </p>
            <p className="text-xl font-bold text-gray-900 capitalize">
              {currentCategory}
            </p>
          </div>
        </div>
      </div>

      {/* Fairness Notice */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
        <MdFavoriteBorder className="text-green-500 text-2xl shrink-0" />
        <div>
          <h5 className="text-sm font-bold text-gray-800">
            To be fair to everybody:
          </h5>
          <p className="text-xs text-gray-500">
            Tradesmen are very busy. Please only send an application if you are
            serious.
          </p>
        </div>
      </div>

      {/* Disclaimer Notice */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-4">
        <MdOutlineWarningAmber className="text-amber-500 text-2xl shrink-0 mt-1" />
        <div>
          <h5 className="text-sm font-bold text-gray-800">
            AI Price Estimate Disclaimer
          </h5>
          <p className="text-xs text-gray-500 leading-relaxed">
            This is an AI-generated estimate and may not be accurate. Final
            pricing will be determined by the professional after inspection.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={() => router.back()}
          className="flex-1 py-4 bg-white border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-2 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all active:scale-95"
        >
          Send an offer
        </button>
      </div>

      {/* Modal Design from Image 3 */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        closable={false}
        width={450}
      >
        <div className="flex flex-col items-center text-center">
          {/* Shield Icon */}
          <div className="w-20 h-20 bg-[#ECFDF5] rounded-full flex items-center justify-center mb-6">
            <MdOutlineShield className="text-[#10B981] text-4xl" />
          </div>

          <h2 className="text-2xl font-black text-[#1F2937] mb-4">
            Free & Non-Binding
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 px-2">
            Getting a quote is completely free with no obligation. You only pay
            if you decide to proceed with the service.
          </p>

          {/* Checklist Box */}
          <div className="w-full bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-5 mb-8 space-y-3">
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#0EA5E9] text-xl" />
              <span className="text-sm font-bold text-[#0369A1]">
                No upfront payment required
              </span>
            </div>
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#0EA5E9] text-xl" />
              <span className="text-sm font-bold text-[#0369A1]">
                Cancel anytime before confirmation
              </span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="w-full space-y-4">
            <button
              onClick={handleSendOffer}
              className="w-full py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-black rounded-xl shadow-lg shadow-orange-100 transition-all active:scale-[0.98]"
            >
              Send an offer
            </button>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 text-gray-400 font-bold hover:text-gray-600 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
