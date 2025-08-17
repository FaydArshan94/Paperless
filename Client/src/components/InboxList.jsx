import InboxItem from "./InboxItem";

export default function InboxList() {
  const items = [
    { title: "Design Project Internal", time: "13:35 PM", color: "blue" },
    { title: "Review UX Feedback", time: "15:25 PM", color: "purple" },
    { title: "Research Best Practices", time: "16:10 PM", color: "pink" },
    { title: "Review Design Client", time: "17:20 PM", color: "orange" },
  ];

  return (
    <div className="p-4 space-y-3">
      {items.map((item, idx) => (
        <InboxItem key={idx} {...item} />
      ))}
    </div>
  );
}
