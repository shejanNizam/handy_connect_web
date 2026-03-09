// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import {
//   MdBalance,
//   MdBarChart,
//   MdBook,
//   MdClose,
//   MdDashboard,
//   MdDescription,
//   MdLibraryBooks,
//   MdLightbulb,
//   MdSchool,
//   MdSettings,
//   MdShield,
//   MdTrendingUp,
//   MdWarning,
// } from "react-icons/md";

// const navigation = [
//   {
//     section: "Core",
//     items: [
//       { name: "Overview", icon: MdDashboard, href: "/user-dashboard" },
//       {
//         name: "Discipline Guard",
//         icon: MdShield,
//         href: "/user-dashboard/discipline-guard",
//       },
//       {
//         name: "Trade Log",
//         icon: MdDescription,
//         href: "/user-dashboard/trade-log",
//       },
//       { name: "Journal", icon: MdBook, href: "/user-dashboard/journal" },
//     ],
//   },
//   {
//     section: "Analysis",
//     items: [
//       { name: "Reports", icon: MdBarChart, href: "/user-dashboard/reports" },
//       {
//         name: "Insights",
//         icon: MdLightbulb,
//         href: "/user-dashboard/insights",
//       },
//       {
//         name: "Trade Intelligence",
//         icon: MdTrendingUp,
//         href: "/user-dashboard/trade-intelligent",
//       },
//     ],
//   },
//   {
//     section: "Improve",
//     items: [
//       {
//         name: "Learning Hub",
//         icon: MdSchool,
//         href: "/user-dashboard/learning-hub",
//       },
//       {
//         name: "Strategy Library",
//         icon: MdLibraryBooks,
//         href: "/user-dashboard/strategy-library",
//       },
//     ],
//   },
//   {
//     section: "System",
//     items: [
//       {
//         name: "Rules & Limits",
//         icon: MdBalance,
//         href: "/user-dashboard/rules-limit",
//       },
//       {
//         name: "Mistakes",
//         icon: MdWarning,
//         href: "/user-dashboard/mistakes",
//       },
//       {
//         name: "Settings",
//         icon: MdSettings,
//         href: "/user-dashboard/settings",
//       },
//     ],
//   },
// ];

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
//   const pathname = usePathname();

//   // Close sidebar on route change (mobile)
//   useEffect(() => {
//     if (isOpen) {
//       toggleSidebar();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   // Prevent body scroll when sidebar is open on mobile
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   return (
//     <>
//       {/* Sidebar - Fixed position for both mobile and desktop */}
//       <aside
//         className={`
//           fixed top-0 bottom-0 left-0 z-30
//           w-64 bg-[#1a1d29] dark:bg-gray-950 text-gray-300
//           flex flex-col
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//         `}
//       >
//         {/* Logo & Close Button - Fixed at top */}
//         <div className="p-6 border-b border-gray-700 dark:border-gray-800 flex items-center justify-between shrink-0">
//           <Link href="/" className="flex flex-col flex-1">
//             <h1 className="text-xl font-bold text-white">
//               BitsOf<span className="text-blue-500">Trade</span>
//             </h1>
//             <p className="text-xs text-gray-400 mt-1">
//               Discipline • Journal • Learning
//             </p>
//           </Link>

//           {/* Close button (mobile only) */}
//           <button
//             onClick={toggleSidebar}
//             className="lg:hidden text-gray-400 hover:text-white p-1"
//           >
//             <MdClose className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Navigation - Scrollable only when content overflows */}
//         <nav className="flex-1 px-3 py-6 overflow-y-auto custom-scrollbar min-h-0">
//           {navigation?.map((section) => (
//             <div key={section.section} className="mb-6">
//               <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-600 uppercase tracking-wider">
//                 {section.section}
//               </h3>
//               <ul className="space-y-1">
//                 {section?.items?.map((item) => {
//                   const Icon = item.icon;
//                   const isActive = pathname === item.href;
//                   return (
//                     <li key={item.name}>
//                       <Link
//                         href={item.href}
//                         className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
//                           isActive
//                             ? "bg-gray-700 dark:bg-gray-800 text-white"
//                             : "text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800/50 hover:text-white"
//                         }`}
//                       >
//                         <Icon className="w-5 h-5 shrink-0" />
//                         <span className="text-sm font-medium truncate">
//                           {item.name}
//                         </span>
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           ))}
//         </nav>

//         {/* User Profile - Fixed at bottom */}
//         <div className="p-4 border-t border-gray-700 dark:border-gray-800 shrink-0">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-700 flex items-center justify-center text-white font-semibold shrink-0">
//               JD
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-medium text-white truncate">
//                 John Doe
//               </p>
//               <p className="text-xs text-gray-400 truncate">Pro Plan</p>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

"use client";

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
      { name: "Dashboard", icon: MdDashboard, href: "/pro-dashboard" },
      {
        name: "Job Requests",
        icon: MdWork,
        href: "/pro-dashboard/job-requests",
        badge: 3,
      },
      {
        name: "Active Jobs",
        icon: MdAccessTime,
        href: "/pro-dashboard/active-jobs",
      },
      {
        name: "Earnings",
        icon: MdAttachMoney,
        href: "/pro-dashboard/earnings",
      },
      { name: "Reviews", icon: MdStar, href: "/pro-dashboard/reviews" },
      { name: "Settings", icon: MdSettings, href: "/pro-dashboard/settings" },
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
  role: UserRole; // <-- pass "user" or "professional" from parent
}

export default function Sidebar({ isOpen, toggleSidebar, role }: SidebarProps) {
  const pathname = usePathname();

  const navigation: NavSection[] =
    role === "professional" ? professionalNavigation : userNavigation;

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isOpen) {
      toggleSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when sidebar is open on mobile
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
            <h1 className="text-xl font-bold text-white">
              BitsOf<span className="text-blue-500">Trade</span>
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Discipline • Journal • Learning
            </p>
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
              {/* Only show section header if there are multiple sections */}
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
                        {/* Badge for notifications like "Job Requests: 3" */}
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
