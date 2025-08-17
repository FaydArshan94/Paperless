import { FiSearch, FiFilter, FiMoreVertical, FiPaperclip } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0F0F1C] rounded-xl shadow-md">
        <div className="mb-2 md:mb-0">
          <h2 className="text-lg font-semibold">My Inbox</h2>
          <p className="text-xs text-gray-400">Inbox / My Inbox</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg text-xs font-semibold">
            + New
          </button>
          <button className="p-2 hover:bg-[#2a2b32] rounded-lg">
            <FiFilter />
          </button>
          <button className="p-2 hover:bg-[#2a2b32] rounded-lg">
            <FiMoreVertical />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden gap-4 mt-4">
        {/* Notes List */}
        <aside className="w-full md:w-1/3 bg-[#0F0F1C] rounded-xl shadow-md overflow-y-auto">
          {/* Search */}
          <div className="p-4">
            <div className="flex items-center bg-[#23242a] px-3 py-2 rounded-lg">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent text-xs outline-none w-full"
              />
            </div>
          </div>

          {/* Notes Items */}
          <div className="space-y-2 p-4">
            <div className="p-3 rounded-lg bg-[#2a2b32] cursor-pointer shadow-sm">
              <h4 className="font-medium text-sm">Design Project Internal</h4>
              <p className="text-xs text-gray-400">
                Design project discussion
              </p>
            </div>
            <div className="p-3 rounded-lg hover:bg-[#2a2b32] cursor-pointer shadow-sm">
              <h4 className="font-medium text-sm">Review UX Feedback</h4>
              <p className="text-xs text-gray-400">Check client notes</p>
            </div>
            <div className="p-3 rounded-lg hover:bg-[#2a2b32] cursor-pointer shadow-sm">
              <h4 className="font-medium text-sm">Research Best Practices</h4>
              <p className="text-xs text-gray-400">Team research notes</p>
            </div>
          </div>
        </aside>

        {/* Note Details */}
        <main className="flex-1 bg-[#0F0F1C] p-6 rounded-xl shadow-md overflow-y-auto">
          {/* Note Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="mb-2 md:mb-0">
              <h3 className="text-base font-semibold">Review UX Feedback</h3>
              <p className="text-xs text-gray-400">11:50 AM • 10 min ago</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-xs rounded-lg bg-green-600">
                On Track
              </button>
              <button className="px-3 py-1 text-xs rounded-lg bg-blue-600">
                High
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-sm">Summary</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              This process of evaluating the user experience of a digital
              product...
              <br />
              By thoroughly examining feedback, the design team can make
              informed decisions for future iterations.
            </p>
          </div>

          {/* Attachments */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-sm">File Attachments</h4>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center bg-[#23242a] px-3 py-2 rounded-lg text-xs shadow-sm">
                <FiPaperclip className="mr-2" /> User-Flow.pdf
              </div>
              <div className="flex items-center bg-[#23242a] px-3 py-2 rounded-lg text-xs shadow-sm">
                <FiPaperclip className="mr-2" /> Team-Report.doc
              </div>
            </div>
          </div>

          {/* Comments */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Comments</h4>
            <textarea
              placeholder="Write a comment..."
              className="w-full p-3 rounded-lg bg-[#23242a] border border-gray-700 text-xs resize-none"
            ></textarea>
            <button className="mt-2 px-4 py-2 bg-purple-600 rounded-lg text-xs shadow-md">
              Send
            </button>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
