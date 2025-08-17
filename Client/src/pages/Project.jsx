import { useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const projects = [
  {
    id: "design-system",
    title: "Design System",
    description:
      "A unified design system with reusable UI components, typography rules, and accessibility guidelines.",
    image: "/images/project.jpg",
    tags: ["UI/UX", "Components", "Guidelines"],
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description:
      "Cross-platform mobile app built with React Native ensuring smooth user experience.",
    image: "/images/project.jpg",
    tags: ["React Native", "Cross-platform", "Mobile UI"],
  },
  {
    id: "website-design",
    title: "Website Design",
    description:
      "Modern and interactive website with animations, responsive layouts, and performance optimization.",
    image: "/images/project.jpg",
    tags: ["Frontend", "Animations", "Performance"],
  },
  {
    id: "design-team",
    title: "Design Team",
    description:
      "Collaboration hub for designers with task management and feedback workflows.",
    image: "/images/project.jpg",
    tags: ["Collaboration", "Team", "Productivity"],
  },
  {
    id: "natoa-studio",
    title: "Natoa Studio",
    description:
      "Creative studio portfolio website showcasing projects and interactive experiences.",
    image: "/images/project.jpg",
    tags: ["Portfolio", "Creative", "Animations"],
  },
  {
    id: "internal-team",
    title: "Internal Team",
    description:
      "Internal dashboard for managing tasks, deadlines, and resources effectively.",
    image: "/images/project.jpg",
    tags: ["Dashboard", "Management", "Productivity"],
  },
];
export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0f1c] text-white">
        <h1 className="text-2xl font-bold text-blue-400">Project Not Found</h1>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0a0f1c] rounded-xl flex  flex-col gap-4 text-white px-6 md:px-16 py-12 md:py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center rounded-xl shadow-sm inset-shadow-xs shadow-cyan-800/50 p-6 mb-6 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 neon-text mb-8">
              {project.title}
            </h1>

            {/* Navigation */}
            <nav className="flex flex-wrap space-x-2 sm:space-x-4 mt-3">
              <button className="text-gray-400 hover:text-white px-3 py-1 rounded bg-[#181824] text-xs sm:text-sm">
                List
              </button>
              <button className="text-gray-400 hover:text-white px-3 py-1 rounded bg-[#181824] text-xs sm:text-sm">
                Board
              </button>
              <button className="text-gray-400 hover:text-white px-3 py-1 rounded bg-[#181824] text-xs sm:text-sm">
                Calendar
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-2 w-full md:w-auto">
            {/* Avatars */}
            <img
              src="https://i.pravatar.cc/32?u=1"
              className="w-8 h-8 rounded-full border-2 border-[#23242a]"
              alt="avatar"
            />
            <img
              src="https://i.pravatar.cc/32?u=2"
              className="w-8 h-8 rounded-full border-2 border-[#23242a]"
              alt="avatar"
            />
            <img
              src="https://i.pravatar.cc/32?u=3"
              className="w-8 h-8 rounded-full border-2 border-[#23242a]"
              alt="avatar"
            />
            <span className="bg-[#23242a] text-white px-3 py-1 rounded-full text-xs">
              +8
            </span>
            <button className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm">
              + Add Task
            </button>
          </div>
        </div>
        {/* Title */}
        <div className="min-h-screen shadow-sm inset-shadow-xs shadow-cyan-800/50  rounded-xl text-white px-6 md:p-16">
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-lg shadow-blue-500/20 max-h-[400px] object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-semibold bg-blue-900/40 border border-blue-500/30 rounded-xl text-blue-300 shadow-md hover:bg-blue-800/60 transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
