import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const tasks = {
  todo: [
    { title: "Review UX Feedback", date: "Mar 15, 2024", tag: "High", progress: 42 },
    { title: "Research Best Practices", date: "Mar 15, 2024", tag: "None", progress: 0 },
    { title: "Create Wireframe for Website", date: "Mar 15, 2024", tag: "Medium", progress: 30 },
  ],
  inProgress: [
    { title: "Design Skill Tree Visualization", date: "Mar 15, 2024", tag: "Medium", progress: 42 },
    { title: "Develop UI Concepts for Agency", date: "Mar 15, 2024", tag: "High", progress: 50 },
    { title: "Refine Hero Section for Rezi AI", date: "Mar 15, 2024", tag: "High", progress: 60 },
  ],
  inReview: [
    { title: "Review Mobile App Redesign", date: "Mar 15, 2024", tag: "High", progress: 80 },
    { title: "Check User Flow for Health App", date: "Mar 15, 2024", tag: "High", progress: 70 },
  ],
  done: [
    { title: "Finalize Design", date: "Mar 15, 2024", tag: "Love", progress: 100 },
    { title: "Design Food App", date: "Mar 15, 2024", tag: "Love", progress: 100 },
  ],
};

const TaskCard = ({ task }) => (
  <div className="bg-[#181824] rounded-xl p-4 mb-4 shadow hover:shadow-lg transition">
    <div className="flex justify-between items-center mb-2">
      <span
        className={`text-xs px-2 py-1 rounded-full ${
          task.tag === "High"
            ? "bg-purple-600"
            : task.tag === "Medium"
            ? "bg-blue-600"
            : task.tag === "Love"
            ? "bg-pink-600"
            : "bg-gray-700"
        } text-white`}
      >
        {task.tag}
      </span>
      <span className="text-xs text-gray-400">{task.date}</span>
    </div>
    <h3 className="text-white font-semibold mb-2">{task.title}</h3>
    <div className="flex items-center justify-between">
      <div className="w-full bg-gray-700 rounded h-2 mr-2">
        <div
          className="bg-purple-600 h-2 rounded"
          style={{ width: `${task.progress}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-400">{task.progress}%</span>
    </div>
  </div>
);

export default function MyTasks() {
  return (
    <DashboardLayout>
      <div className="px-2 py-4 sm:px-4 md:p-8 bg-[#10101a] rounded-xl overflow-hidden shadow-md min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
              Daily Task Today
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
            <img src="https://i.pravatar.cc/32?u=1" className="w-8 h-8 rounded-full border-2 border-[#23242a]" alt="avatar" />
            <img src="https://i.pravatar.cc/32?u=2" className="w-8 h-8 rounded-full border-2 border-[#23242a]" alt="avatar" />
            <img src="https://i.pravatar.cc/32?u=3" className="w-8 h-8 rounded-full border-2 border-[#23242a]" alt="avatar" />
            <span className="bg-[#23242a] text-white px-3 py-1 rounded-full text-xs">
              +8
            </span>
            <button className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm">
              + Add Task
            </button>
          </div>
        </div>

        {/* Board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* To Do */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-4">To Do</h2>
            {tasks.todo.map((task, i) => <TaskCard key={i} task={task} />)}
            <button className="w-full mt-2 bg-[#23242a] text-gray-400 py-2 rounded-lg hover:text-white text-xs sm:text-sm">
              + Add Task
            </button>
          </div>

          {/* In Progress */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-4">In Progress</h2>
            {tasks.inProgress.map((task, i) => <TaskCard key={i} task={task} />)}
            <button className="w-full mt-2 bg-[#23242a] text-gray-400 py-2 rounded-lg hover:text-white text-xs sm:text-sm">
              + Add Task
            </button>
          </div>

          {/* In Review */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-4">In Review</h2>
            {tasks.inReview.map((task, i) => <TaskCard key={i} task={task} />)}
            <button className="w-full mt-2 bg-[#23242a] text-gray-400 py-2 rounded-lg hover:text-white text-xs sm:text-sm">
              + Add Task
            </button>
          </div>

          {/* Done */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-4">Done</h2>
            {tasks.done.map((task, i) => <TaskCard key={i} task={task} />)}
            <button className="w-full mt-2 bg-[#23242a] text-gray-400 py-2 rounded-lg hover:text-white text-xs sm:text-sm">
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
