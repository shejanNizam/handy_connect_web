"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  MdAttachMoney,
  MdClose,
  MdOutlineHomeWork,
  MdOutlineSettings,
  MdOutlineStarOutline,
  MdOutlineWatchLater,
  MdOutlineWorkOutline,
} from "react-icons/md";

const navigation = [
  {
    name: "Dashboard",
    icon: MdOutlineHomeWork,
    href: "/user-dashboard",
  },
  {
    name: "Job Requests",
    icon: MdOutlineWorkOutline,
    href: "/user-dashboard/job-requests",
    badge: 3,
  },
  {
    name: "Active Jobs",
    icon: MdOutlineWatchLater,
    href: "/user-dashboard/active-jobs",
  },
  {
    name: "Earnings",
    icon: MdAttachMoney,
    href: "/user-dashboard/earnings",
  },
  {
    name: "Reviews",
    icon: MdOutlineStarOutline,
    href: "/user-dashboard/reviews",
  },
  {
    name: "Settings",
    icon: MdOutlineSettings,
    href: "/user-dashboard/settings",
  },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function SidebarProfessional({
  isOpen,
  toggleSidebar,
}: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleSidebar();
  }, [pathname, isOpen, toggleSidebar]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-30
          w-72 bg-[#0F172A] text-gray-300 
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Brand Header */}
        <div className="p-6 flex items-center justify-between shrink-0">
          <Link href="/" className="flex flex-col">
            <h1 className="text-xl font-bold text-white tracking-tight">
              Handy<span className="text-blue-500">Connect</span>
            </h1>
          </Link>

          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            // Exact matching for active state
            const isActive = pathname === item.href;

            return (
              <li key={item.name} className="list-none">
                <Link
                  href={item.href}
                  className={`
                    relative flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#1E293B] text-[#F59E0B] border-l-4 border-[#F59E0B] rounded-l-none"
                        : "text-gray-400 hover:bg-[#1E293B]/50 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    className={`w-6 h-6 shrink-0 ${isActive ? "text-[#F59E0B]" : ""}`}
                  />
                  <span className="text-[15px] font-medium flex-1">
                    {item.name}
                  </span>

                  {/* Badge Logic */}
                  {item.badge && (
                    <span className="bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </nav>

        {/* Bottom Profile Section */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-500">Verified Provider</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
