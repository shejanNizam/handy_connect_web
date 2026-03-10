"use client";

import { Rate, Tabs } from "antd";
import React from "react";
import { FaStar } from "react-icons/fa";
import {
  MdOutlineBadge,
  MdOutlineCardMembership,
  MdOutlineCheckCircle,
  MdOutlineTrendingUp,
  MdVerified,
} from "react-icons/md";

export default function ProfessionalDetails() {
  // Tabs configuration for Ant Design
  const tabItems = [
    {
      key: "1",
      label: (
        <span className="flex items-center gap-2">
          <MdOutlineBadge /> Government ID
        </span>
      ),
      children: <GovernmentIDTab />,
    },
    {
      key: "2",
      label: (
        <span className="flex items-center gap-2">
          <MdOutlineCardMembership /> Certificates
        </span>
      ),
      children: <CertificatesTab />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="w-full mx-auto space-y-6">
        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 bg-[#E2E8F0] rounded-full" />
            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Michael Ben</h2>
            <p className="text-sm text-gray-400">michealben@gmail.com</p>
          </div>
        </div>

        {/* Stats Grid (Radius, Jobs, Review) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            icon={<MdOutlineTrendingUp className="text-blue-500" />}
            value="10km"
            label="Radius"
          />
          <StatCard
            icon={<MdOutlineCheckCircle className="text-green-500" />}
            value="342"
            label="Jobs"
          />
          <StatCard
            icon={<FaStar className="text-amber-500" />}
            value="4.2"
            label="Review"
          />
        </div>

        {/* Verifications Section with Ant Design Tabs */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 flex justify-between items-center border-b border-gray-50">
            <div className="flex items-center gap-2 text-gray-800 font-bold">
              <MdVerified className="text-green-600 text-xl" />
              <span>Verifications</span>
            </div>
            <div className="text-green-600 bg-green-50 text-[10px] font-bold px-3 py-1 rounded-full border border-green-100 uppercase">
              100% Trusted
            </div>
          </div>

          <div className="p-6">
            <Tabs
              defaultActiveKey="1"
              items={tabItems}
              centered
              className="custom-tabs"
            />
          </div>
        </div>

        {/* Recent Reviews Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Recent Reviews</h3>
            <button className="text-xs text-gray-500 hover:text-blue-600">
              View All
            </button>
          </div>

          <ReviewCard
            name="David Cohen"
            initial="DC"
            color="bg-cyan-500"
            rating={5}
            text="Excellent work, very professional!"
          />
          <ReviewCard
            name="Sarah Levi"
            initial="SL"
            color="bg-red-500"
            rating={5}
            text="Fixed the issue quickly. Highly recommend!"
          />
        </div>
      </div>
    </div>
  );
}

// --- Sub-Components ---

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-400 font-medium">{label}</p>
      </div>
    </div>
  );
}

function GovernmentIDTab() {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-4">
        <MdVerified className="text-green-500 text-lg" /> Verified Identity
      </div>
      <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white text-2xl shadow-sm">
            <MdOutlineBadge />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">National ID (NID)</h4>
            <p className="text-xs text-gray-400">
              Government Database Verified
            </p>
            <p className="text-[10px] text-gray-300 mt-1">
              Issued: January 2020
            </p>
          </div>
        </div>
        <div className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-md flex items-center gap-1">
          <MdOutlineCheckCircle /> Verified
        </div>
      </div>
    </div>
  );
}

function CertificatesTab() {
  return (
    <div className="space-y-4 pt-4">
      <CertificateItem
        title="AC Repair & Maintenance"
        issuer="Technical Training Institute"
        year="2021"
      />
      <CertificateItem
        title="Electrical Safety Level 2"
        issuer="Safety Board BD"
        year="2022"
      />
      <div className="flex justify-between items-center mt-6">
        <p className="text-[10px] text-gray-400 font-medium">
          All certificates manually verified
        </p>
        <div className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-md flex items-center gap-1">
          <MdOutlineCheckCircle /> Verified
        </div>
      </div>
    </div>
  );
}

function CertificateItem({
  title,
  issuer,
  year,
}: {
  title: string;
  issuer: string;
  year: string;
}) {
  return (
    <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:border-amber-200 transition-colors">
      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white text-xl">
        <MdOutlineCardMembership />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900">{title}</h4>
        <p className="text-[11px] text-gray-400">
          {issuer} • {year}
        </p>
      </div>
    </div>
  );
}

function ReviewCard({
  name,
  initial,
  color,
  rating,
  text,
}: {
  name: string;
  initial: string;
  color: string;
  rating: number;
  text: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm`}
        >
          {initial}
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900">{name}</h4>
          <Rate disabled defaultValue={rating} style={{ fontSize: 12 }} />
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}
