// import { useState } from "react";   
import { CheckCircle, Star, User, Shield, FileText, MapPin, PlusCircle, Trash2, ChevronRight } from "lucide-react";

const ProfilePage = () => {
  const stats = [
    { icon: <CheckCircle className="text-emerald-500" size={22} />, value: "4", label: "Emergency" },
    { icon: <CheckCircle className="text-emerald-500" size={22} />, value: "342", label: "Jobs" },
    { icon: <Star className="text-amber-400 fill-amber-400" size={22} />, value: "4.8", label: "Rating" },
  ];

  const categories = [
    { icon: <User size={20} className="text-gray-500" />, label: "Personal Info", badge: null },
    { icon: <Shield size={20} className="text-gray-500" />, label: "ID Verification", badge: "Verified" },
    { icon: <FileText size={20} className="text-gray-500" />, label: "Certificates", badge: "3" },
    { icon: <MapPin size={20} className="text-gray-500" />, label: "Service Areas", badge: null },
    { icon: <PlusCircle size={20} className="text-gray-500" />, label: "Add Services", badge: null },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
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
            <div key={i} className="bg-white rounded-2xl p-5 flex flex-col items-center gap-1.5 shadow-sm">
              {stat.icon}
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div>
          <p className="text-gray-800 font-semibold text-base mb-3 px-1">Categories</p>
          <div className="space-y-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="w-full bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {cat.icon}
                  <span className="text-gray-700 text-sm font-medium">{cat.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {cat.badge && (
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      cat.badge === "Verified"
                        ? "bg-gray-100 text-gray-600 border border-gray-200"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {cat.badge}
                    </span>
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