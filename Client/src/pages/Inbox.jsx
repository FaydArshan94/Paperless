// src/pages/Inbox.jsx
import { useState } from "react";
import { FiSearch, FiPaperclip, FiDownload } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Inbox() {
  const [selected, setSelected] = useState(1);

  const mails = [
    {
      id: 1,
      title: "Review UX Feedback",
      subtitle: "Design project internal team",
      time: "11:30",
      tag: "1",
      color: "bg-purple-600",
      description:
        "The process of evaluating the user experience of a digital product...",
      attachments: [
        { name: "User Review.pdf", size: "2.4MB" },
        { name: "User Feedback.doc", size: "3.5MB" },
        { name: "Team Participant.doc", size: "1.9MB" },
      ],
    },
    {
      id: 2,
      title: "Research Best Practices",
      subtitle: "UI/UX notes",
      time: "11:30",
      tag: "2",
      color: "bg-blue-500",
      description: "Research on design practices for better consistency.",
      attachments: [],
    },
    {
      id: 3,
      title: "Design Skill Visualization",
      subtitle: "Visualization for team",
      time: "11:30",
      tag: "1",
      color: "bg-red-500",
      description: "Data visualization for design skill progress.",
      attachments: [],
    },
  ];

  const selectedMail = mails.find((m) => m.id === selected);

  return (
    <DashboardLayout>
      <div className="bg-[#121222] text-gray-200 h-screen flex flex-col rounded-xl p-4 shadow-sm inset-shadow-xs shadow-cyan-800/50 ">
        {/* ✅ Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6  gap-4">
          <div>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
              Daily Task Today
            </h1>
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

        {/* ✅ Inbox Layout */}
        <div className="flex flex-1 rounded-xl p-2 shadow-sm inset-shadow-xs shadow-cyan-500/50 overflow-hidden">
          {/* Left panel */}
          <aside className="w-full md:w-1/3 lg:w-1/3  flex flex-col">
            {/* Search */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-800">
              <FiSearch size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none placeholder-gray-500"
              />
            </div>

            {/* Mail List */}
            <ul className="flex-1 overflow-y-auto">
              {mails.map((mail) => (
                <li
                  key={mail.id}
                  onClick={() => setSelected(mail.id)}
                  className={`p-4 border-b border-gray-800 flex items-center gap-4 cursor-pointer transition ${
                    mail.id === selected
                      ? "bg-[#1a1a2f] text-white"
                      : "hover:bg-[#141422]"
                  }`}
                >

                    <div>
                        <span><CgFileDocument /></span>
                    </div>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center gap-10 w-full justify-between">
                      <h3 className="font-semibold text-sm">{mail.title}</h3>
                      <span className="text-xs text-gray-400">{mail.time}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">{mail.subtitle}</p>
                      <span
                        className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${mail.color}`}
                      >
                        {mail.tag}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right panel */}
          <main className="hidden md:flex flex-col flex-1 p-6 bg-[#121222] overflow-y-auto">
            {selectedMail ? (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{selectedMail.title}</h2>
                  <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm">
                    Mark as Completed
                  </button>
                </div>
                <p className="mt-2 text-gray-400">{selectedMail.description}</p>

                {selectedMail.attachments.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-300 mb-2">
                      File Attachments
                    </h4>
                    <div className="flex gap-3 flex-wrap">
                      {selectedMail.attachments.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 bg-[#1c1c2b] rounded-lg text-sm"
                        >
                          <FiPaperclip className="text-gray-400" />
                          <span>{file.name}</span>
                          <span className="text-xs text-gray-500">
                            {file.size}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-500">
                      <FiDownload /> Download All
                    </button>
                  </div>
                )}

                {/* Comment box */}
                <div className="mt-auto border-t border-gray-700 pt-4">
                  <textarea
                    placeholder="Write a comment..."
                    className="w-full bg-[#1c1c2b] rounded-lg p-3 text-gray-200 outline-none"
                  />
                  <div className="flex justify-end mt-2">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm">
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-gray-500">Select a mail to view details</p>
            )}
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}
