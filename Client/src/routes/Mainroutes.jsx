// src/routes/MainRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import MyTasks from "../pages/MyTasks";
import Inbox from "../pages/Inbox";
import Project from "../pages/Project";
import Notes from "../pages/Notes";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
// import Pages from "../pages/Pages";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<MyTasks />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/projects/:id" element={<Project />} />

      <Route path="/notes" element={<Notes />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/pages" element={<Pages />} />  */}
    </Routes>
  );
}
