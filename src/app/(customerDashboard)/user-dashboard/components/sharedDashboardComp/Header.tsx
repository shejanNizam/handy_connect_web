"use client";

import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-white dark:bg-[#0B0F1A] border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Left Section: Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg shrink-0 transition-colors"
            aria-label="Toggle Sidebar"
          >
            <MdMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Optional: You can put a Page Title or Breadcrumb here */}
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 hidden sm:block">
            Dashboard
          </h2>
        </div>

        {/* Right Section: Theme Toggle */}
        <div className="flex items-center gap-3">{/* <ThemeToggle /> */}</div>
      </div>
    </header>
  );
}
