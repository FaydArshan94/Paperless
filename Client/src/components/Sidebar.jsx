import { useState } from "react";
import {
  FiHome,
  FiCheckSquare,
  FiInbox,
  FiFolder,
  FiFileText,
  FiBarChart2,
  FiSettings,
  FiPlus,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom"; // ✅ for routing
import "../styles/sidebar.css";

export default function Sidebar({ isOpen, setIsOpen }) {
  const projects = [
    {
      id: "design-system",
      title: "Design System",
      description:
        "A unified design system with reusable UI components, typography rules, and accessibility guidelines.",
      image: "/images/design-system.png",
      tags: ["UI/UX", "Components", "Guidelines"],
    },
    {
      id: "mobile-app",
      title: "Mobile App",
      description:
        "Cross-platform mobile app built with React Native ensuring smooth user experience.",
      image: "/images/mobile-app.png",
      tags: ["React Native", "Cross-platform", "Mobile UI"],
    },
    {
      id: "website-design",
      title: "Website Design",
      description:
        "Modern and interactive website with animations, responsive layouts, and performance optimization.",
      image: "/images/website-design.png",
      tags: ["Frontend", "Animations", "Performance"],
    },
    {
      id: "design-team",
      title: "Design Team",
      description:
        "Collaboration hub for designers with task management and feedback workflows.",
      image: "/images/design-team.png",
      tags: ["Collaboration", "Team", "Productivity"],
    },
    {
      id: "natoa-studio",
      title: "Natoa Studio",
      description:
        "Creative studio portfolio website showcasing projects and interactive experiences.",
      image: "/images/natoa-studio.png",
      tags: ["Portfolio", "Creative", "Animations"],
    },
    {
      id: "internal-team",
      title: "Internal Team",
      description:
        "Internal dashboard for managing tasks, deadlines, and resources effectively.",
      image: "/images/internal-team.png",
      tags: ["Dashboard", "Management", "Productivity"],
    },
  ];

  const [openProject, setOpenProject] = useState(false);

  const navItemClasses = ({ isActive }) =>
    `flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition 
     ${
       isActive
         ? "bg-[#2a2b32] text-white font-semibold"
         : "text-gray-300 hover:bg-[#2a2b32]"
     }`;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-[#080813] border-r border-gray-700 flex flex-col transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:block
          ${isOpen ? "" : "md:hidden"}
        `}
      >
        {/* Close Button (mobile only) */}
        <button
          className="absolute top-6 right-4 z-50 bg-[#23242a] p-2 rounded-md text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={20} />
        </button>

        {/* Sidebar Content */}
        <div
          tabIndex={0}
          className="flex-1 px-4 overflow-y-auto sidebar-scrollbar transition-all duration-300"
        >
          {/* Logo & Profile */}
          <div className="mb-6 mt-6">
            <NavLink to="/profile" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-xl font-bold">
                N
              </div>
              <span className="font-semibold text-white">Nortstar</span>
            </NavLink>

            <NavLink
              to="/profile"
              className="flex items-center mt-6 justify-between bg-[#23242a] rounded-lg p-3 hover:bg-[#2a2b32]"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://i.pravatar.cc/50"
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Niko Satrio
                  </h4>
                  <p className="text-xs text-gray-400">Lead Product Design</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">⚙️</button>
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className={navItemClasses}>
                  <FiHome />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/tasks" className={navItemClasses}>
                  <FiCheckSquare />
                  <span>My Task</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/inbox" className={navItemClasses}>
                  <div className="flex items-center space-x-2">
                    <FiInbox />
                    <span>Inbox</span>
                  </div>
                  <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                    12
                  </span>
                </NavLink>
              </li>

              {/* Project with Submenu */}
              <li>
                <div
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#2a2b32] cursor-pointer text-gray-300"
                  onClick={() => setOpenProject(!openProject)}
                >
                  <div className="flex items-center space-x-2">
                    <FiFolder />
                    <span>Project</span>
                  </div>
                  <FiPlus
                    className={`transition-transform duration-300 ${
                      openProject ? "rotate-45" : ""
                    }`}
                  />
                </div>

                {openProject && (
                  <ul className="space-y-1">
                    {projects.map((project) => (
                      <li key={project.id}>
                        <NavLink
                          to={`/projects/${project.id}`}
                          className={({ isActive }) =>
                            `block px-3 py-1 rounded-lg ${
                              isActive
                                ? "bg-blue-600 text-white"
                                : "hover:bg-blue-800"
                            }`
                          }
                        >
                          {project.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <NavLink to="/notes" className={navItemClasses}>
                  <FiFileText />
                  <span>Notes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/reports" className={navItemClasses}>
                  <FiBarChart2 />
                  <span>Reports</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <NavLink to="/settings" className={navItemClasses}>
            <FiSettings />
            <span>Settings</span>
          </NavLink>
          <div className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm rounded-xl p-4 text-center">
            Trial period in 28 days <br />
            <span className="font-semibold cursor-pointer">
              Upgrade Plan ✨
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
