import React, { useState } from "react";
import {
  LayoutDashboard,
  DollarSign,
  Wallet,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
  { name: "Income", href: "/income", icon: <DollarSign size={20} /> },
  { name: "Expenses", href: "/expenses", icon: <Wallet size={20} /> },
  { name: "Logout", href: "/logout", icon: <LogOut size={20} /> },
];

const SideBar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Mobile Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 z-50 md:hidden bg-indigo-600 text-white p-2 rounded shadow-md"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-40 transform md:translate-x-0 transition-transform duration-200 ease-in-out bg-white shadow-xl flex flex-col w-64 h-full ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center p-6 border-b border-gray-200">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mb-3 shadow"
          />
          <h2 className="text-xl font-semibold">Jane Doe</h2>
          <p className="text-sm text-gray-500">jane.doe@example.com</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg transition hover:bg-indigo-100 hover:text-indigo-700 font-medium"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;