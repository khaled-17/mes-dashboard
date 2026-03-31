"use client";
import { useState } from "react";
import {
  Forklift,
  Home,
  LayoutGrid,
  LogOut,
  Menu,
  RefreshCcw,
  Settings,
  TriangleAlert,
  WrenchIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: "Dashboard", path: "/", icon: <LayoutGrid className="w-6 h-6 lg:w-7 lg:h-7" /> },
    {
      name: "Resources",
      path: "/resources",
      icon: <Home className="w-6 h-6 lg:w-7 lg:h-7" />,
    },
    {
      name: "Manufacturing",
      path: "/manufacturing",
      icon: <Forklift className="w-6 h-6 lg:w-7 lg:h-7" />,
    },
    {
      name: "Machines",
      path: "/machines",
      icon: <WrenchIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
    },
    {
      name: "Planning",
      path: "/planning",
      icon: <RefreshCcw className="w-6 h-6 lg:w-7 lg:h-7" />,
    },
    {
      name: "Issues",
      path: "/issues",
      icon: <TriangleAlert className="w-6 h-6 lg:w-7 lg:h-7" />,
    },
  ];

  const userActions = [
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-6 h-6 lg:w-7 lg:h-7" />,
    },
    { name: "Logout", path: "/logout", icon: <LogOut className="w-6 h-6 lg:w-7 lg:h-7" /> },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Mobile reopen button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed left-0 top-1/2 z-[60] -translate-y-1/2 rounded-r-xl bg-blue-600 p-3 text-white shadow-xl transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static z-50 inset-y-0 left-0
          w-56 lg:w-64 shrink-0 h-screen overflow-y-auto
          bg-linear-to-b from-blue-600 to-blue-700 text-white
          flex flex-col px-4 lg:px-6 py-6 lg:py-8 shadow-lg
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
        `}
      >
        {/* Close button (mobile only) */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-3 right-3 p-1 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close menu"
          aria-expanded={isOpen}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo Section */}
        <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8 pb-2">
          <div className="flex gap-1">
            <div className="w-3 h-6 bg-white rounded-sm opacity-90"></div>
            <div className="w-3 h-6 bg-white rounded-sm opacity-70"></div>
            <div className="w-3 h-6 bg-white rounded-sm opacity-50"></div>
          </div>
          <span className="text-xl lg:text-2xl font-bold tracking-wide">MES</span>
        </div>

        {/* Main Navigation */}
        <nav className="flex min-h-0 flex-col gap-2 lg:gap-3 flex-1">
          {pages.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 lg:px-5 py-2.5 lg:py-3 rounded-r-full transition-all duration-300 font-medium text-sm lg:text-base flex items-center gap-3 ${
                isActive(item.path)
                  ? "bg-blue-800 bg-opacity-60 shadow-md"
                  : "hover:bg-white/10"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <nav className="mt-auto flex flex-col gap-2 lg:gap-3 pt-6">
          {userActions.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 lg:px-5 py-2.5 lg:py-3 rounded-r-full transition-all duration-300 font-medium text-sm lg:text-base flex items-center gap-3 ${
                isActive(item.path)
                  ? "bg-blue-800 bg-opacity-60 shadow-md"
                  : "hover:bg-white/10"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

