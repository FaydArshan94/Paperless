import React from "react";
import { FiPlus, FiSearch, FiFilter, FiMoreVertical } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout";

const Home = () => {
  return (
    <DashboardLayout>
      <div className="px-2 py-4 sm:px-4 md:p-6  min-h-screen text-white space-y-6">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between bg-[#0F0F1C] p-4 rounded-xl shadow-md">
          <div>
            <h2 className="text-lg font-semibold">Daily Task Today</h2>
            <p className="text-xs text-gray-400">My Task / Daily Task</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg text-xs font-semibold">
              + Add Task
            </button>
            <button className="p-2 hover:bg-[#2a2b32] rounded-lg">
              <FiSearch />
            </button>
            <button className="p-2 hover:bg-[#2a2b32] rounded-lg">
              <FiFilter />
            </button>
            <button className="p-2 hover:bg-[#2a2b32] rounded-lg">
              <FiMoreVertical />
            </button>
          </div>
        </header>

        {/* Task Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* To Do */}
          <div className="bg-[#0F0F1C] rounded-xl p-4 shadow-md flex flex-col">
            <h3 className="font-semibold mb-4">To Do</h3>
            <div className="space-y-3 flex-1">
              <div className="bg-[#2a2b32] p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium">Review UX Feedback</h4>
                <p className="text-xs text-gray-400 mt-1">Progress: 43%</p>
              </div>
              <div className="bg-[#2a2b32] p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium">Research Best Practices</h4>
                <p className="text-xs text-gray-400 mt-1">Progress: 32%</p>
              </div>
            </div>
            <button className="mt-4 text-xs bg-[#23242a] hover:bg-[#34353c] px-3 py-2 rounded-lg">
              + Add Task
            </button>
          </div>

          {/* In Progress */}
          <div className="bg-[#0F0F1C] rounded-xl p-4 shadow-md flex flex-col">
            <h3 className="font-semibold mb-4">In Progress</h3>
            <div className="space-y-3 flex-1">
              <div className="bg-[#2a2b32] p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium">Design Skill Tree</h4>
                <p className="text-xs text-gray-400 mt-1">Progress: 50%</p>
              </div>
              <div className="bg-[#2a2b32] p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium">Develop UI Concepts</h4>
                <p className="text-xs text-gray-400 mt-1">Progress: 68%</p>
              </div>
            </div>
            <button className="mt-4 text-xs bg-[#23242a] hover:bg-[#34353c] px-3 py-2 rounded-lg">
              + Add Task
            </button>
          </div>

          {/* In Review */}
          <div className="bg-[#0F0F1C] rounded-xl p-4 shadow-md flex flex-col">
            <h3 className="font-semibold mb-4">In Review</h3>
            <div className="space-y-3 flex-1">
              <div className="bg-[#2a2b32] p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium">Mobile App Redesign</h4>
                <p className="text-xs text-gray-400 mt-1">Progress: 42%</p>
              </div>
              <div className="bg-[#2a2b32] p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium">User Flow Check</h4>
                <p className="text-xs text-gray-400 mt-1">Progress: 50%</p>
              </div>
            </div>
            <button className="mt-4 text-xs bg-[#23242a] hover:bg-[#34353c] px-3 py-2 rounded-lg">
              + Add Task
            </button>
          </div>

          {/* Done */}
          <div className="bg-[#0F0F1C] rounded-xl p-4 shadow-md flex flex-col">
            <h3 className="font-semibold mb-4">Done</h3>
            <div className="space-y-3 flex-1">
              <div className="bg-[#2a2b32] p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium">Finalize Design</h4>
                <p className="text-xs text-gray-400 mt-1">Progress: 100%</p>
              </div>
            </div>
            <button className="mt-4 text-xs bg-[#23242a] hover:bg-[#34353c] px-3 py-2 rounded-lg">
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
