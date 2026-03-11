"use client";

import {
  Button,
  Form,
  Input,
  Modal,
  Progress,
  Select,
  Switch,
  Upload,
} from "antd";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LuArrowRight,
  LuCalculator,
  LuFileSearch,
  LuScan,
  LuSparkles,
  LuUpload,
  LuUserCheck,
} from "react-icons/lu";

const { TextArea } = Input;

export const dynamicParams = true;

export default function ServiceDetails() {
  const params = useParams<{ id: string }>();
  const id = params?.id ?? "";

  const [form] = Form.useForm();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingStep, setLoadingStep] = useState(1);

  const handleSendRequest = () => {
    setIsModalOpen(true);
    setLoadingStep(1);

    const intervals = [500, 1000, 1500, 2000];
    intervals.forEach((ms, index) => {
      setTimeout(() => setLoadingStep(index + 1), ms);
    });

    setTimeout(() => {
      setIsModalOpen(false);
      router.push(`/user-dashboard/category`);
    }, 2800);
  };

  const steps = [
    { id: 1, label: "Scanning uploaded media", icon: <LuScan /> },
    { id: 2, label: "Identifying the issue", icon: <LuFileSearch /> },
    { id: 3, label: "Estimating repair costs", icon: <LuCalculator /> },
    { id: 4, label: "Matching professionals", icon: <LuUserCheck /> },
  ];

  const categoryOptions = [
    { value: "plumbing", label: "Plumbing" },
    { value: "carpentry", label: "Carpentry" },
    { value: "painting", label: "Painting" },
    { value: "electrical", label: "Electrical" },
    { value: "cleaning", label: "Cleaning" },
    { value: "general", label: "General" },
  ];

  return (
    <>
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Service Details
            </h2>

            <Form form={form} layout="vertical" requiredMark={false}>
              <Form.Item
                label={
                  <span className="font-bold text-gray-600 text-sm">
                    Service Category
                  </span>
                }
                name="category"
                initialValue={id}
              >
                <Select
                  placeholder="Select a category"
                  size="large"
                  options={categoryOptions}
                  className="w-full h-12 rounded-xl"
                  disabled
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-bold text-gray-600 text-sm">
                    Problem Description
                  </span>
                }
                name="description"
              >
                <TextArea
                  rows={5}
                  placeholder="Describe the issue in detail..."
                  className="rounded-2xl border-gray-200 p-4 text-sm"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-bold text-gray-600 text-sm">
                    Upload Media
                  </span>
                }
              >
                <Upload.Dragger className="bg-[#FAFBFF] border-dashed border-2 border-blue-100 rounded-3xl py-12">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4">
                      <LuUpload size={32} />
                    </div>
                    <p className="font-bold text-gray-800 text-lg">
                      Click to upload or drag and drop
                    </p>
                  </div>
                </Upload.Dragger>
              </Form.Item>
            </Form>
          </div>

          {/* Location & Urgency */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Location & Urgency
            </h2>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-gray-600 text-sm mb-3">Zip Code</p>
                <Input
                  placeholder="e.g. 10001"
                  size="large"
                  className="h-12 rounded-xl bg-gray-50 border-gray-100"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-red-500 text-xl">
                    ⚠️
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Emergency Service</p>
                    <p className="text-gray-400 text-xs">
                      Immediate assistance within 2 hours
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-50 sticky top-6">
            <h2 className="text-xl font-bold mb-8 text-gray-900">
              Request Summary
            </h2>

            <div className="space-y-5 mb-8 border-b border-gray-50 pb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-medium">Category</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg capitalize">
                  {id}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-medium">Urgency</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">
                  Standard
                </span>
              </div>
            </div>

            <div className="bg-orange-50/50 p-6 rounded-2xl mb-8 border border-orange-100/50">
              <p className="font-bold text-orange-900 mb-5 text-sm uppercase tracking-wider">
                Process flow
              </p>
              <div className="space-y-6">
                {[
                  "Professionals are notified.",
                  "Receive quotes in minutes.",
                  "Compare and hire the best.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <span className="w-6 h-6 rounded-full bg-orange-400 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-xs font-bold text-gray-700 leading-tight">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              block
              onClick={handleSendRequest}
              className="h-16 bg-[#F59E0B] hover:bg-[#D97706]! text-white border-none font-bold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-orange-200 transition-all hover:-translate-y-1 active:scale-95"
            >
              Send Request <LuArrowRight />
            </Button>

            <p className="text-center text-[11px] text-gray-400 mt-6 font-medium">
              No payment is required to post a request.
            </p>
          </div>
        </div>
      </div>

      {/* Analysis Modal */}
      <Modal
        open={isModalOpen}
        footer={null}
        closable={false}
        centered
        width={520}
      >
        <div className="space-y-10">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-[#FFF7E8] text-[#F59E0B] rounded-2xl flex items-center justify-center shadow-inner">
              <LuSparkles size={32} className="animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                Analyzing Issue
              </h2>
              <p className="text-gray-400 text-sm mt-1 font-bold">
                Processing step {loadingStep} of 4
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Progress
              percent={loadingStep * 25}
              showInfo={false}
              strokeColor="#F59E0B"
              trailColor="#F1F5F9"
              strokeWidth={14}
              className="m-0"
            />
            <div className="flex justify-between px-2">
              {[1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    loadingStep >= dot
                      ? "bg-[#F59E0B] scale-125"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-5 items-center bg-blue-50/40 p-5 rounded-3xl border border-blue-50">
            <div className="p-4 bg-white text-blue-500 rounded-2xl shadow-sm">
              <LuScan size={28} className="animate-pulse" />
            </div>
            <div>
              <p className="font-black text-gray-900 text-lg">
                Scanning uploaded media...
              </p>
              <p className="text-gray-500 text-sm font-medium">
                AI is identifying visual patterns and damage severity.
              </p>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-3xl p-8 space-y-6 border border-gray-100">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    loadingStep >= step.id
                      ? "bg-[#F59E0B] text-white shadow-lg shadow-orange-100 scale-110"
                      : "bg-white text-gray-300 border border-gray-100"
                  }`}
                >
                  {loadingStep > step.id ? (
                    <LuUserCheck size={20} />
                  ) : (
                    step.icon
                  )}
                </div>
                <p
                  className={`font-black text-sm tracking-wide transition-colors ${
                    loadingStep >= step.id ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
// test comment
