import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { NavLink } from "react-router-dom";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col md:flex-row">
        {/* Sidebar */}
        
        {/* Main Content */}
        <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Settings Options */}
          <section className="bg-[#1e293b] p-6 rounded-2xl shadow-lg space-y-6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">Profile Information</p>
              <div className="mt-2 w-full bg-gray-800 rounded-full h-2">
                <div className="bg-white h-2 w-3/4 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm">75% completed</p>
              <button className="mt-3 bg-white text-cyan-600 px-4 py-2 rounded-xl font-semibold">
                Complete My Profile
              </button>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-3">Settings</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Appearance</span>
                  <span className="text-gray-400 text-sm">Dark/Light Mode</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Account Settings</span>
                  <span className="text-gray-400 text-sm">Email, Password</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Security</span>
                  <span className="text-gray-400 text-sm">
                    2FA, Change Password
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Right Account Settings Form */}
          <section className="lg:col-span-2 bg-[#1e293b] p-6 rounded-2xl shadow-lg">
            <h3 className="text-cyan-400 text-lg font-semibold mb-6">
              Account Settings
            </h3>

            <form className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-400">First Name</label>
                  <input
                    type="text"
                    defaultValue="Samantha"
                    className="w-full px-4 py-2 rounded-xl bg-[#0f172a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-400">Last Name</label>
                  <input
                    type="text"
                    defaultValue="William"
                    className="w-full px-4 py-2 rounded-xl bg-[#0f172a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-400">
                  Email Address
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    defaultValue="sam@email.com"
                    className="flex-1 px-4 py-2 rounded-xl bg-[#0f172a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <span className="text-green-400 text-sm">✔ Verified</span>
                </div>
              </div>

              {/* Notifications */}
              <div>
                <h4 className="font-semibold mb-3">Notifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Withdraw Activity",
                    "Weekly Report",
                    "Payment Success",
                    "Password Change",
                    "Top Up Success",
                    "Send Money Success",
                  ].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input type="checkbox" className="accent-cyan-500" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button className="px-4 py-2 bg-gray-700 rounded-xl hover:bg-gray-600 transition">
                  Discard Changes
                </button>
                <button className="px-6 py-2 bg-cyan-600 rounded-xl hover:bg-cyan-500 transition">
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </DashboardLayout>
  );
}
