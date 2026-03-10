"use client";
import { useState } from "react";

// Icons
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DropletIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6366f1"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const BoltIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f59e0b"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const SnowflakeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#38bdf8"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <polyline points="17 7 12 2 7 7" />
    <polyline points="7 17 12 22 17 17" />
    <polyline points="2 7 7 12 2 17" />
    <polyline points="22 17 17 12 22 7" />
  </svg>
);

const PaletteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a855f7"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <circle cx="13.5" cy="6.5" r="0.5" fill="#a855f7" />
    <circle cx="17.5" cy="10.5" r="0.5" fill="#a855f7" />
    <circle cx="8.5" cy="7.5" r="0.5" fill="#a855f7" />
    <circle cx="6.5" cy="12.5" r="0.5" fill="#a855f7" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.667 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.042a1.65 1.65 0 0 1 1.648-1.667H16c3.313 0 6-2.687 6-6C22 6.18 17.5 2 12 2z" />
  </svg>
);

const TruckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f97316"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const LeafIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22c55e"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34" />
    <path d="M2 2s3 1 7 6c4 5 4 10 4 10S10 10 2 2z" />
  </svg>
);

const DocIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#94a3b8"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const UploadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f59e0b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f59e0b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f59e0b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Step indicator
const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = ["Account", "Identity", "Services", "Review"];
  const progress = ((currentStep - 1) / 3) * 100;

  return (
    <div className="w-full px-4 pt-4 pb-2">
      {/* Progress bar */}
      <div className="relative h-1.5 bg-gray-200 rounded-full mb-5">
        <div
          className="absolute left-0 top-0 h-full bg-amber-400 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Steps */}
      <div className="flex justify-between">
        {steps.map((label, i) => {
          const step = i + 1;
          const isActive = step === currentStep;
          const isDone = step < currentStep;
          return (
            <div key={step} className="flex flex-col items-center gap-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                  ${isActive ? "bg-amber-400 text-white shadow-md" : isDone ? "bg-amber-400 text-white" : "bg-gray-200 text-gray-400"}`}
              >
                {step}
              </div>
              <span
                className={`text-xs ${isActive || isDone ? "text-gray-700 font-medium" : "text-gray-400"}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Step 1: Account Created
const Step1 = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center justify-center flex-1 px-6 py-8 text-center">
    {/* Animated checkmark rings */}
    <div className="relative flex items-center justify-center mb-8">
      <div className="absolute w-36 h-36 rounded-full bg-amber-50 border border-amber-100" />
      <div className="absolute w-28 h-28 rounded-full bg-amber-100 border border-amber-200" />
      <div className="relative w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
        <span className="text-white">
          <CheckIcon />
        </span>
      </div>
    </div>
    <h2 className="text-2xl font-bold text-gray-900 mb-3">Account Created</h2>
    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
      {"Welcome aboard! Let's complete your profile to start receiving service"}
      requests.
    </p>
    <button
      onClick={onNext}
      className="mt-10 w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-4 rounded-2xl transition-colors duration-200 text-base shadow-sm"
    >
      Continue Setup
    </button>
  </div>
);

// Step 2: Identity
const Step2 = ({ onNext }: { onNext: () => void }) => {
  const [uploaded, setUploaded] = useState<Record<string, boolean>>({});

  const docs = [
    {
      key: "gov",
      label: "Government ID",
      sub: "Driver's license, Passport, or National ID",
    },
    {
      key: "cert",
      label: "Professional Certificate",
      sub: "Trade licenses or relevant certifications",
    },
    {
      key: "photo",
      label: "Profile Photo",
      sub: "Clear Photo of Your face for customers",
    },
  ];

  const uploadedCount = Object.values(uploaded).filter(Boolean).length;

  return (
    <div className="flex flex-col flex-1 px-5 py-6 overflow-auto">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Business Address
        </h3>
        <input
          type="text"
          placeholder="Enter your business address"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>

      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          Verify Your Identity
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Upload required documents to continue
        </p>

        <div className="border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100 bg-white shadow-sm">
          {docs.map((doc) => (
            <div key={doc.key} className="flex items-center gap-3 px-4 py-4">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                <DocIcon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800">
                  {doc.label}
                </p>
                <p className="text-xs text-gray-400">{doc.sub}</p>
              </div>
              <button
                onClick={() => setUploaded((p) => ({ ...p, [doc.key]: true }))}
                className="flex items-center gap-1 text-amber-500 text-sm font-semibold"
              >
                <UploadIcon />
                {uploaded[doc.key] ? (
                  <span className="text-green-500">✓</span>
                ) : (
                  "Choose"
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Documents uploaded</span>
          <span>{uploadedCount} of 3</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full">
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-300"
            style={{ width: `${(uploadedCount / 3) * 100}%` }}
          />
        </div>
      </div>

      <button
        onClick={onNext}
        className="mt-auto w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-4 rounded-2xl transition-colors duration-200 text-base shadow-sm"
      >
        Continue Setup
      </button>
    </div>
  );
};

// Step 3: Services
const Step3 = ({ onNext }: { onNext: () => void }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [radius, setRadius] = useState(10);

  const categories = [
    { key: "plumbing", label: "Plumbing", icon: <DropletIcon /> },
    { key: "electrical", label: "Electrical", icon: <BoltIcon /> },
    { key: "hvac", label: "Ac & HVAC", icon: <SnowflakeIcon /> },
    { key: "painting", label: "Painting", icon: <PaletteIcon /> },
    { key: "moving", label: "Moving", icon: <TruckIcon /> },
    { key: "gardening", label: "Gardening", icon: <LeafIcon /> },
  ];

  const toggle = (key: string) =>
    setSelected((p) =>
      p.includes(key) ? p.filter((k) => k !== key) : [...p, key],
    );

  return (
    <div className="flex flex-col flex-1 px-5 py-6 overflow-auto">
      <h3 className="text-xl font-bold text-gray-900 mb-1">
        Set Up your services
      </h3>
      <p className="text-sm text-gray-400 mb-5">
        Tell us what service You offer
      </p>

      <h4 className="text-base font-bold text-gray-800 mb-3">
        Select categories
      </h4>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => toggle(cat.key)}
            className={`flex flex-col items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all duration-200
              ${
                selected.includes(cat.key)
                  ? "border-amber-400 bg-amber-50"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
          >
            {cat.icon}
            <span className="text-xs font-medium text-gray-700">
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      <h4 className="text-base font-bold text-gray-800 mb-3">Service Area</h4>
      <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center">
            <PinIcon />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">
              Radius: <span className="text-amber-500">{radius} Km</span>
            </p>
            <p className="text-xs text-gray-400">
              Coverage area from your location
            </p>
          </div>
        </div>
        <input
          type="range"
          min={5}
          max={20}
          step={1}
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-full accent-amber-400 h-1.5 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>5 km</span>
          <span className="font-semibold text-gray-700">10</span>
          <span>15 km</span>
          <span>20 km</span>
        </div>
      </div>

      <button
        onClick={onNext}
        className="mt-auto w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-4 rounded-2xl transition-colors duration-200 text-base shadow-sm"
      >
        Submit Application
      </button>
    </div>
  );
};

// Step 4: Review / Application Submitted
const Step4 = ({ onNext }: { onNext: () => void }) => {
  const items = [
    { label: "Account created", done: true },
    { label: "Identity verified", done: true },
    { label: "Services configured", done: true },
    { label: "Admin review", done: false, badge: "In Progress" },
  ];

  return (
    <div className="flex flex-col items-center flex-1 px-6 py-8">
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-36 h-36 rounded-full bg-amber-50 border border-amber-100" />
        <div className="absolute w-28 h-28 rounded-full bg-amber-100 border border-amber-200" />
        <div className="relative w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
          <span className="text-white">
            <CheckIcon />
          </span>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Application Submitted!
      </h2>
      <p className="text-gray-500 text-sm text-center leading-relaxed mb-6 max-w-xs">
        {
          "We've received your details and are currently reviewing your application."
        }
      </p>
      <div className="w-full border border-gray-100 rounded-2xl p-4 bg-white shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <ClockIcon />
          <div>
            <p className="text-sm font-bold text-gray-800">Pending Approval</p>
            <p className="text-xs text-gray-400">
              Estimated review time: 24-48 hours
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.done ? (
                  <svg
                    className="w-4 h-4 text-amber-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <ClockIcon />
                )}
                <span
                  className={`text-sm ${item.badge ? "text-amber-500 font-medium" : "text-gray-700"}`}
                >
                  {item.label}
                </span>
              </div>
              {item.badge ? (
                <span className="text-xs bg-amber-50 text-amber-500 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
                  {item.badge}
                </span>
              ) : (
                <svg
                  className="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={onNext}
        className="mt-8 w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-4 rounded-2xl transition-colors duration-200 text-base shadow-sm"
      >
        Continue
      </button>
    </div>
  );
};

// Lock icon
const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// Bell icon
const BellIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

// Crown icon
const CrownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M2 20h20" />
    <path d="M5 20V10l7-6 7 6v10" />
    <path d="M12 4v6" />
  </svg>
);

// Step 5: Trial / Pricing — rendered as a modal sheet over a dark background
const Step5 = () => {
  const [plan, setPlan] = useState<"monthly" | "yearly">("yearly");

  const handleStart = () => {
    window.location.href = "/professional-dashboard";
  };

  return (
    // Dark overlay background (matches the screenshot)
    <div className="flex flex-col flex-1 bg-zinc-700 relative overflow-hidden">
      {/* White modal card */}
      <div className="mx-3 mt-4 mb-4 bg-white rounded-3xl overflow-hidden flex flex-col">
        {/* Close button */}
        <div className="relative px-5 pt-5 pb-0">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <div className="px-8 pt-4 pb-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            Start your 3-day FREE
            <br />
            trial to continue.
          </h2>
        </div>

        {/* Timeline */}
        <div className="px-6 pb-2">
          {/* Row 1: Today */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                <LockIcon />
              </div>
              {/* Connector */}
              <div
                className="w-0.5 my-1"
                style={{
                  height: 36,
                  background:
                    "linear-gradient(to bottom, #fbbf24 0%, #d1d5db 100%)",
                }}
              />
            </div>
            <div className="pt-1 pb-4">
              <p className="text-sm font-bold text-gray-900">Today</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                Get full access and see your mindset start to
                <br />
                change.
              </p>
            </div>
          </div>

          {/* Row 2: Day 2 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                <BellIcon />
              </div>
              {/* Connector */}
              <div
                className="w-0.5 my-1"
                style={{
                  height: 36,
                  background:
                    "linear-gradient(to bottom, #fbbf24 0%, #6b7280 100%)",
                }}
              />
            </div>
            <div className="pt-1 pb-4">
              <p className="text-sm font-bold text-gray-900">Day 2</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                Get a reminder that your trial ends in 24
                <br />
                hours
              </p>
            </div>
          </div>

          {/* Row 3: After day 3 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center shrink-0 shadow-sm">
                <CrownIcon />
              </div>
            </div>
            <div className="pt-1 pb-2">
              <p className="text-sm font-bold text-gray-900">After day 3</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                {"Your free trial ends and you'll be charged,"}
                <br />
                cancel anytime before
              </p>
            </div>
          </div>
        </div>

        {/* Plan selector */}
        <div className="flex gap-3 px-5 pt-4 pb-2">
          {/* Monthly */}
          <button
            onClick={() => setPlan("monthly")}
            className={`flex-1 rounded-2xl border-2 p-4 text-left transition-all duration-200 relative
              ${plan === "monthly" ? "border-gray-300" : "border-gray-150 bg-gray-50"}`}
          >
            <p className="text-sm font-bold text-gray-900 mb-1">Monthly</p>
            <p className="text-sm text-gray-400">1.99 €/mo</p>
            {/* Radio circle */}
            <div
              className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
              ${plan === "monthly" ? "border-gray-400" : "border-gray-200"}`}
            >
              {plan === "monthly" && (
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
              )}
            </div>
          </button>

          {/* Yearly */}
          <button
            onClick={() => setPlan("yearly")}
            className={`flex-1 rounded-2xl border-2 p-4 text-left transition-all duration-200 relative pt-5
              ${plan === "yearly" ? "border-amber-400" : "border-gray-150 bg-gray-50"}`}
          >
            {/* "3 days Free" badge pill */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-xs font-semibold px-3 py-0.5 rounded-full whitespace-nowrap shadow-sm">
              3 days Free
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">Yearly</p>
            <p className="text-sm text-gray-400">0.99 €/mo</p>
            {/* Checkmark circle */}
            <div
              className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
              ${plan === "yearly" ? "border-amber-400 bg-amber-400" : "border-gray-200"}`}
            >
              {plan === "yearly" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* No Payment Due Now */}
        <div className="flex items-center justify-center gap-2 py-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#374151"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-sm font-medium text-gray-700">
            No Payment Due Now
          </span>
        </div>

        {/* CTA Button */}
        <div className="px-5 pb-2">
          <button
            onClick={handleStart}
            className="w-full bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold py-4 rounded-2xl transition-colors duration-200 text-base shadow-sm"
          >
            Start 3-day free trial
          </button>
        </div>

        {/* Fine print */}
        <p className="text-xs text-gray-400 text-center py-3 pb-5">
          3days free then 11,88€ a year
        </p>
      </div>
    </div>
  );
};

// Professional Dashboard
const Dashboard = ({ onReset }: { onReset: () => void }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-white shadow-sm px-5 py-4 flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-400">Welcome back,</p>
        <h1 className="text-lg font-bold text-gray-900">
          Professional Dashboard
        </h1>
      </div>
      <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-sm">
        Pro
      </div>
    </div>

    {/* Trial banner */}
    <div className="mx-4 mt-4 bg-amber-400 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
      <div>
        <p className="text-white font-bold text-sm">3-Day Free Trial Active</p>
        <p className="text-white/80 text-xs">
          Full access until your trial ends
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-3 mx-4 mt-4">
      {[
        { label: "Active Jobs", value: "0", color: "text-amber-500" },
        { label: "Pending Requests", value: "0", color: "text-blue-500" },
        { label: "Completed", value: "0", color: "text-green-500" },
        { label: "Rating", value: "—", color: "text-purple-500" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
        >
          <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Recent activity */}
    <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold text-gray-800 mb-3">Recent Activity</h3>
      <div className="flex flex-col items-center py-6 gap-2">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <p className="text-sm text-gray-400">No activity yet</p>
        <p className="text-xs text-gray-300">
          Service requests will appear here
        </p>
      </div>
    </div>

    {/* Reset for demo */}
    <div className="mx-4 mt-6">
      <button
        onClick={onReset}
        className="w-full border border-gray-200 text-gray-500 text-sm font-medium py-3 rounded-2xl hover:bg-gray-50 transition-colors"
      >
        ← Restart Onboarding (Demo)
      </button>
    </div>
  </div>
);

// Main Onboarding Flow
export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return (
      <Dashboard
        onReset={() => {
          setStep(1);
          setShowDashboard(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-175">
        {step !== 5 && <StepIndicator currentStep={step} />}
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && <Step2 onNext={() => setStep(3)} />}
        {step === 3 && <Step3 onNext={() => setStep(4)} />}
        {step === 4 && <Step4 onNext={() => setStep(5)} />}
        {step === 5 && <Step5 />}
      </div>
    </div>
  );
}
