"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  MdAccessTime,
  MdAttachMoney,
  MdClose,
  MdDashboard,
  MdDescription,
  MdNotifications,
  MdPeople,
  MdPerson,
  MdSettings,
  MdStar,
  MdWork,
} from "react-icons/md";
import main_logo from "../../../../../assets/main_logo.svg";

type UserRole = "user" | "professional";

const userNavigation = [
  {
    section: "Core",
    items: [
      { name: "Dashboard", icon: MdDashboard, href: "/user-dashboard" },
      {
        name: "My Requests",
        icon: MdDescription,
        href: "/user-dashboard/my-requests",
      },
      {
        name: "Professionals",
        icon: MdPeople,
        href: "/user-dashboard/professionals",
      },
      {
        name: "Notifications",
        icon: MdNotifications,
        href: "/user-dashboard/notifications",
      },
      { name: "Profile", icon: MdPerson, href: "/user-dashboard/profile" },
    ],
  },
];

const professionalNavigation = [
  {
    section: "Core",
    items: [
      { name: "Dashboard", icon: MdDashboard, href: "/professional-dashboard" },
      {
        name: "Job Requests",
        icon: MdWork,

        href: "/professional-dashboard/job-request",
        badge: 3,
      },
      {
        name: "Active Jobs",
        icon: MdAccessTime,

        href: "/professional-dashboard/active-job",
      },
      {
        name: "Earnings",
        icon: MdAttachMoney,

        href: "/professional-dashboard/earning",
      },
      {
        name: "Reviews",
        icon: MdStar,
        href: "/professional-dashboard/review",
      },
      {
        name: "Settings",
        icon: MdSettings,
        href: "/professional-dashboard/setting",
      },
    ],
  },
];

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
  badge?: number;
}

interface NavSection {
  section: string;
  items: NavItem[];
}

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  role: UserRole;
}

export default function Sidebar({ isOpen, toggleSidebar, role }: SidebarProps) {
  const pathname = usePathname();

  const navigation: NavSection[] =
    role === "professional" ? professionalNavigation : userNavigation;

  useEffect(() => {
    if (isOpen) {
      toggleSidebar();
    }
  }, [pathname, isOpen, toggleSidebar]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-30
          w-64 bg-[#1a1d29] dark:bg-gray-950 text-gray-300
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo & Close Button */}
        <div className="p-6 border-b border-gray-700 dark:border-gray-800 flex items-center justify-between shrink-0">
          <Link href="/" className="flex flex-col flex-1">
            <Image
              width={1000}
              height={1000}
              className="w-12 h-12 rounded-full border-4 border-primary"
              src={main_logo}
              alt="profile_image"
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-400 hover:text-white p-1"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 overflow-y-auto custom-scrollbar min-h-0">
          {navigation.map((section) => (
            <div key={section.section} className="mb-6">
              {navigation.length > 1 && (
                <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-600 uppercase tracking-wider">
                  {section.section}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-gray-700 dark:bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800/50 hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="text-sm font-medium truncate flex-1">
                          {item.name}
                        </span>
                        {item.badge !== undefined && item.badge > 0 && (
                          <span className="ml-auto min-w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold px-1">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-700 dark:border-gray-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-700 flex items-center justify-center text-white font-semibold shrink-0">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-400 truncate capitalize">
                {role === "professional" ? "Professional" : "Pro Plan"}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
