"use client";

import { useState } from "react";
import { 
  Home, 
  BarChart3, 
  Settings, 
  Users, 
  FileText, 
  History,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "الرئيسية", href: "/" },
  { icon: BarChart3, label: "التقارير", href: "/reports" },
  { icon: History, label: "سجل الآلات", href: "/machines-history" },
  { icon: Users, label: "المستخدمون", href: "/users" },
  { icon: Settings, label: "الإعدادات", href: "/settings" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 right-0 h-full lg:h-auto bg-white border-l border-gray-200 z-40
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-0 lg:w-64" : "w-64"}
        ${isCollapsed ? "translate-x-full lg:translate-x-0" : "translate-x-0"}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MES Dashboard</h1>
                <p className="text-xs text-gray-500">Manufacturing Execution System</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                        ${isActive 
                          ? "bg-primary text-white" 
                          : "text-gray-700 hover:bg-gray-100"
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center text-xs text-gray-500">
              <p>© 2024 MES System</p>
              <p>Version 1.0.0</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isCollapsed && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsCollapsed(false)}
        />
      )}
    </>
  );
}
