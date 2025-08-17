import { FiMessageSquare } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout";

export default function ProfilePage() {
  const projects = [
    { title: "Healthy", role: "Manager", time: "1 week", progress: 60 },
    { title: "Driver", role: "Manager", time: "1 week", progress: 60 },
    { title: "CRM", role: "Manager", time: "1 week", progress: 60 },
    { title: "Cook App", role: "Manager", time: "1 week", progress: 60 },
  ];

  const messages = [
    { name: "Mark", text: "Recent message" },
    { name: "Mark", text: "Recent message" },
    { name: "Mark", text: "Recent message" },
    { name: "Mark", text: "Recent message" },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#080813] text-white p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Projects Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#0d0e1b] rounded-2xl p-5 shadow-lg hover:shadow-blue-500/30 transition"
            >
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-gray-400 text-sm">
                Project about new app of company
              </p>

              {/* Roles & Time */}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
                <span>Role: {p.role}</span>
                <span>Time: {p.time}</span>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <p className="text-xs text-gray-400">Project Progress</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer */}
              <button className="mt-4 w-full bg-[#15172b] hover:bg-[#1c1e36] text-sm py-2 rounded-lg text-gray-300 transition">
                Open Details
              </button>
            </div>
          ))}
        </div>

        {/* Right Profile Section */}
        <div className="w-full lg:w-72 bg-[#0d0e1b] rounded-2xl p-4 shadow-lg">
          {/* Profile */}
          <div
            to="/profile"
            className="flex items-center mt-6 justify-between  "
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pravatar.cc/50"
                alt="avatar"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Niko Satrio
                </h4>
                <p className="text-xs text-gray-400">Lead Product Design</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">⚙️</button>
          </div>

          {/* Roles */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-300">
              General role
            </h4>
            <p className="text-xs text-gray-400">Project manager</p>
            <h4 className="text-sm font-semibold mt-3 text-gray-300">
              Secondary role
            </h4>
            <p className="text-xs text-gray-400">Content manager</p>
          </div>

          {/* Recent Messages */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Recent messages
            </h4>
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#15172b] p-2 rounded-lg hover:bg-[#1c1e36] transition"
                >
                  <FiMessageSquare className="text-blue-400" />
                  <div>
                    <p className="text-sm font-medium">{msg.name}</p>
                    <p className="text-xs text-gray-400">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
