"use client";
import {
  Forklift,
  Home,
  LayoutGrid,
  LogOut,
  RefreshCcw,
  Settings,
  TriangleAlert,
  WrenchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const pages = [
    { name: "Dashboard", path: "/", icon: <LayoutGrid className="w-7 h-7" /> },
    {
      name: "Resources",
      path: "/resources",
      icon: <Home className="w-7 h-7" />,
    },
    {
      name: "Manufacturing",
      path: "/manufacturing",
      icon: <Forklift className="w-7 h-7" />,
    },
    {
      name: "Machines",
      path: "/machines",
      icon: <WrenchIcon className="w-7 h-7" />,
    },
    {
      name: "Planning",
      path: "/planning",
      icon: <RefreshCcw className="w-7 h-7" />,
    },
    {
      name: "Issues",
      path: "/issues",
      icon: <TriangleAlert className="w-7 h-7" />,
    },
  ];

  const userActions = [
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-7 h-7" />,
    },
    { name: "Logout", path: "/logout", icon: <LogOut className="w-7 h-7" /> },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <aside className="w-64 shrink-0 h-screen overflow-y-auto bg-linear-to-b from-blue-600 to-blue-700 text-white flex flex-col px-6 py-8 shadow-lg sticky top-0">
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-4 mb-8 pb-2">
        <div className="flex gap-1">
          <div className="w-3 h-6 bg-white rounded-sm opacity-90"></div>
          <div className="w-3 h-6 bg-white rounded-sm opacity-70"></div>
          <div className="w-3 h-6 bg-white rounded-sm opacity-50"></div>
        </div>
        <span className="text-2xl font-bold tracking-wide">MES</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex min-h-0 flex-col gap-3 flex-1">
        {pages.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-5 py-3 rounded-r-full transition-all duration-300 font-medium text-base flex items-center gap-3 ${
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
      <nav className="mt-auto flex flex-col gap-3 pt-6">
        {userActions.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-5 py-3  rounded-r-full transition-all duration-300 font-medium text-base flex items-center gap-3 ${
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
  );
}
