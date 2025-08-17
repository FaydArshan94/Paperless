export default function InboxItem({ title, time, color }) {
  return (
    <div className="p-4 bg-[#2a2b32] rounded-lg hover:bg-[#34353d] cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-white">{title}</h3>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}
