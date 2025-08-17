export default function Header({ isSidebarOpen }) {
  return (
    <header
      className={`flex items-center justify-between px-6 py-4 bg-[#23242a] transition-all duration-300 ${
        isSidebarOpen ? "ml-64" : ""
      }`}
    >
      <h2 className="text-lg font-semibold">My Inbox</h2>

      <div className="flex items-center space-x-4">
        {/* Avatars */}
        <div className="flex -space-x-2">
          <img src="https://i.pravatar.cc/40" alt="user" className="w-8 h-8 rounded-full border-2 border-[#23242a]" />
          <img src="https://i.pravatar.cc/41" alt="user" className="w-8 h-8 rounded-full border-2 border-[#23242a]" />
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold border-2 border-[#23242a]">
            +8
          </div>
        </div>

        {/* Actions */}
        <button className="px-3 py-1 bg-purple-600 rounded-lg text-sm">Messages</button>
      </div>
    </header>
  );
}
