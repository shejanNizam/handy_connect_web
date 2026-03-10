"use client";
import { useState } from "react";
import { CheckCircle, Star, User, Shield, FileText, MapPin, PlusCircle, Trash2, ChevronRight, X, Camera, Upload } from "lucide-react";


// ── Personal Info Modal ──────────────────────────────────────────────────────
const PersonalInfoModal = ({ onClose }: { onClose: () => void }) => {
  const [firstName, setFirstName] = useState("Michael");
  const [lastName, setLastName] = useState("Ben");
  const [email, setEmail] = useState("michealben@gmail.com");
  const [phone, setPhone] = useState("0501122334");

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Personal Info</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={20} /></button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center">
              <User size={36} className="text-slate-400" />
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center shadow-md hover:bg-amber-500 transition-colors">
              <Camera size={14} className="text-white" />
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-2">Tap to change photo</p>
        </div>
        <div className="space-y-4">
          {[
            { label: "First Name", value: firstName, set: setFirstName, type: "text" },
            { label: "Last Name", value: lastName, set: setLastName, type: "text" },
            { label: "Email", value: email, set: setEmail, type: "email" },
            { label: "Phone Number", value: phone, set: setPhone, type: "tel" },
          ].map(({ label, value, set, type }) => (
            <div key={label}>
              <label className="text-sm text-gray-600 mb-1 block">{label}</label>
              <input type={type} value={value} onChange={(e) => set(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
            </div>
          ))}
        </div>
        <button onClick={onClose} className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-2xl transition-colors text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};

// ── ID Verification Modal ────────────────────────────────────────────────────
const IDVerificationModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
    <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">ID Verification</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={20} /></button>
      </div>
      <div className="flex items-center gap-4 bg-emerald-50 rounded-2xl px-4 py-4 mb-6">
        <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <CheckCircle size={22} className="text-white fill-white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="font-bold text-emerald-600 text-sm">Verified</p>
          <p className="text-emerald-500 text-xs mt-0.5">Your identity has been confirmed</p>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {[
          { label: "Document Type", value: "National ID" },
          { label: "Verified On", value: "Oct 15, 2023" },
          { label: "Expires", value: "Oct 15, 2028" },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between py-4">
            <span className="text-sm text-gray-400">{label}</span>
            <span className="text-sm font-medium text-gray-800">{value}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
        <Upload size={16} className="text-gray-500" />
        Re-upload Document
      </button>
    </div>
  </div>
);

// ── Certificates Modal ───────────────────────────────────────────────────────
const CertificatesModal = ({ onClose }: { onClose: () => void }) => {
  const certs = [
    { title: "Plumbing License", issuer: "Ministry of Economy", date: "Jan 2022", status: "Verified" },
    { title: "Electrical Safety Cert", issuer: "Standards Institute", date: "Mar 2023", status: "Verified" },
    { title: "Insurance Certificate", issuer: "Harel Insurance", date: "Dec 2023", status: "Pending" },
  ];
  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-gray-900">Certificates</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={20} /></button>
        </div>
        <div className="space-y-3 mb-4">
          {certs.map((cert) => (
            <div key={cert.title} className="border border-gray-100 rounded-2xl px-4 py-3.5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <FileText size={18} className="text-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800">{cert.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{cert.issuer}</p>
                <p className="text-xs text-gray-400 mt-1"><span className="text-gray-500">Issued:</span> {cert.date}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full font-medium shrink-0 mt-0.5 bg-gray-100 text-gray-600">{cert.status}</span>
            </div>
          ))}
        </div>
        <button className="w-full flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-2xl py-3.5 text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors mb-4">
          <span className="text-xl leading-none text-gray-400">+</span>
          Upload New Certificate
        </button>
        <button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-2xl transition-colors text-sm">Done</button>
      </div>
    </div>
  );
};

// ── Service Area Modal ───────────────────────────────────────────────────────
const ServiceAreaModal = ({ onClose }: { onClose: () => void }) => {
  const [radius, setRadius] = useState(9);
  const min = 5, max = 50;
  const pct = ((radius - min) / (max - min)) * 100;

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-gray-900">Service Area</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={20} /></button>
        </div>

        {/* Radius Card */}
        <div className="border border-gray-100 rounded-2xl p-5 mb-4">
          {/* Icon + Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-amber-400" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900">Radius: &nbsp;{radius} Km</p>
              <p className="text-xs text-gray-400 mt-0.5">Coverage area from your location</p>
            </div>
          </div>

          {/* Slider */}
          <div className="relative mb-2">
            <style>{`
              .area-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; border-radius: 9999px; outline: none; cursor: pointer; background: linear-gradient(to right, #f59e0b 0%, #f59e0b ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%); }
              .area-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #f59e0b; box-shadow: 0 2px 6px rgba(0,0,0,0.15); cursor: pointer; }
              .area-slider::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #f59e0b; border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.15); cursor: pointer; }
            `}</style>
            <input type="range" min={min} max={max} value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="area-slider" />
          </div>

          {/* Tick labels */}
          <div className="flex justify-between mt-1">
            {["5 km", "15 km", "30 km", "50 km"].map((t) => (
              <span key={t} className="text-xs text-gray-400">{t}</span>
            ))}
          </div>
        </div>

        {/* Location Card */}
        <div className="border border-gray-100 rounded-2xl px-4 py-3.5 flex items-center gap-3 mb-5">
          <MapPin size={20} className="text-amber-400 shrink-0" />
          <div>
            <p className="text-xs text-gray-400">Your location</p>
            <p className="text-sm font-semibold text-gray-800 mt-0.5">22 Dizengoff St, Tel Aviv</p>
          </div>
        </div>

        {/* Save */}
        <button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-2xl transition-colors text-sm">
          Save Area
        </button>
      </div>
    </div>
  );
};

// ── Add Services Modal ───────────────────────────────────────────────────────
const AddServicesModal = ({ onClose }: { onClose: () => void }) => {
  const allServices = [
    { id: "plumbing",    emoji: "💧", label: "Plumbing" },
    { id: "electrical",  emoji: "⚡", label: "Electrical" },
    { id: "hvac",        emoji: "❄️", label: "Ac & HVAC" },
    { id: "painting",    emoji: "🎨", label: "Painting" },
    { id: "moving",      emoji: "🚛", label: "Moving" },
    { id: "gardening",   emoji: "🌿", label: "Gardening" },
  ];

  const [selected, setSelected] = useState<string[]>(["plumbing", "electrical"]);

  const toggle = (id: string) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Select categories</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={20} /></button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {allServices.map(({ id, emoji, label }) => {
            const active = selected.includes(id);
            return (
              <button
                key={id}
                onClick={() => toggle(id)}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl py-5 transition-all ${
                  active
                    ? "bg-amber-400 text-white shadow-md"
                    : "bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100"
                }`}
              >
                <span className="text-3xl leading-none">{emoji}</span>
                <span className={`text-xs font-semibold ${active ? "text-white" : "text-gray-700"}`}>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Save */}
        <button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-2xl transition-colors text-sm">
          Save Services
        </button>
      </div>
    </div>
  );
};

// ── Profile Page ─────────────────────────────────────────────────────────────
const ProfilePage = () => {
  const [activeModal, setActiveModal] = useState<"personalInfo" | "idVerification" | "certificates" | "serviceArea" | "addServices" | null>(null);

  const stats = [
    {
      icon: <CheckCircle className="text-emerald-500" size={22} />,
      value: "4",
      label: "Emergency",
    },
    {
      icon: <CheckCircle className="text-emerald-500" size={22} />,
      value: "342",
      label: "Jobs",
    },
    {
      icon: <Star className="text-amber-400 fill-amber-400" size={22} />,
      value: "4.8",
      label: "Rating",
    },
  ];

  const categories = [
    { icon: <User size={20} className="text-gray-500" />,       label: "Personal Info",    badge: null,       modal: "personalInfo" as const },
    { icon: <Shield size={20} className="text-gray-500" />,     label: "ID Verification",  badge: "Verified", modal: "idVerification" as const },
    { icon: <FileText size={20} className="text-gray-500" />,   label: "Certificates",     badge: "3",        modal: "certificates" as const },
    { icon: <MapPin size={20} className="text-gray-500" />,     label: "Service Areas",    badge: null,       modal: "serviceArea" as const },
    { icon: <PlusCircle size={20} className="text-gray-500" />, label: "Add Services",     badge: null,       modal: "addServices" as const },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      {activeModal === "personalInfo"   && <PersonalInfoModal   onClose={() => setActiveModal(null)} />}
      {activeModal === "idVerification" && <IDVerificationModal onClose={() => setActiveModal(null)} />}
      {activeModal === "certificates"   && <CertificatesModal   onClose={() => setActiveModal(null)} />}
      {activeModal === "serviceArea"    && <ServiceAreaModal    onClose={() => setActiveModal(null)} />}
      {activeModal === "addServices"    && <AddServicesModal    onClose={() => setActiveModal(null)} />}

      <div className="w-full max-w-5xl space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
            <User size={28} className="text-slate-400" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">Michael Ben</p>
            <p className="text-gray-400 text-sm">michealben@gmail.com</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 flex flex-col items-center gap-1.5 shadow-sm"
            >
              {stat.icon}
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div>
          <p className="text-gray-800 font-semibold text-base mb-3 px-1">
            Categories
          </p>
          <div className="space-y-3">
            {categories.map((cat, i) => (
              <button key={i} onClick={() => setActiveModal(cat.modal)}
                className="w-full bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  {cat.icon}
                  <span className="text-gray-700 text-sm font-medium">
                    {cat.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {cat.badge && (
                    <>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      cat.badge === "Verified" ? "bg-gray-100 text-gray-600 border border-gray-200" : "bg-gray-100 text-gray-700"
                    }`}>{cat.badge}</span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        cat.badge === "Verified"
                          ? "bg-gray-100 text-gray-600 border border-gray-200"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {cat.badge}
                    </span>
                    </>
                  )}
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Delete Account */}
        <div className="flex justify-center pt-2">
          <button className="flex items-center gap-2 px-20 py-3.5 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors shadow-sm">
            <Trash2 size={16} />
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
