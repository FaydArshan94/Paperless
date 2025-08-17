import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuPanelLeft } from "react-icons/lu";
import { FiHome, FiInbox, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItemClasses = ({ isActive }) =>
    `flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition 
     ${
       isActive
         ? "bg-[#2a2b32] text-white font-semibold"
         : "text-gray-300 hover:bg-[#2a2b32]"
     }`;

  // Thin sidebar
  // Thin sidebar
  const ThinSidebar = () => (
    <aside className="fixed top-0 left-0 h-full w-[2.5rem] md:w-[3.5rem] bg-[#080813] flex flex-col items-center py-6 z-40">
      <button className="mb-6 text-white" onClick={() => setSidebarOpen(true)}>
        <LuPanelLeft size={22} />
      </button>

      <div className="flex flex-col gap-6 items-center">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-400 hover:text-white"
          }
        >
          <FiHome size={20} />
        </NavLink>

        {/* Inbox */}
        <NavLink
          to="/inbox"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-400 hover:text-white"
          }
        >
          <FiInbox size={20} />
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-400 hover:text-white"
          }
        >
          <FiSettings size={20} />
        </NavLink>
      </div>
    </aside>
  );

  // Margin adjustment
  const getMarginLeft = () => {
    if (sidebarOpen) return "md:ml-64 ml-0";
    return "md:ml-[3.5rem] ml-[2.5rem]";
  };

  return (
    <div className="relative min-h-screen bg-[#080813] text-white flex">
      {/* Full Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Thin Sidebar */}
      {!sidebarOpen && <ThinSidebar />}

      {/* Main Content */}
      <div
        className={`transition-all duration-300 flex flex-col flex-1 ${getMarginLeft()} p-4`}
      >
        {children}
      </div>
    </div>
  );
}
