import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Reports() {
  return (
    <DashboardLayout>
    <div className="min-h-screen bg-[#0F0F1C] shadow-sm inset-shadow-xs shadow-cyan-800/50  rounded-xl text-white p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Monthly Sales */}
      <div className="bg-[#121222] rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
        <h3 className="text-cyan-400 font-semibold mb-4">Monthly Sales</h3>
        <div className="relative w-32 h-32">
          {/* Circle Progress */}
          <div className="absolute inset-0 rounded-full border-8 border-cyan-600 border-t-gray-700"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">78%</span>
          </div>
        </div>
        <p className="mt-4 text-gray-300">Sales target: $320K</p>
        <p className="text-lg font-bold text-cyan-400">$248K</p>
      </div>

      {/* Recent Orders */}
      <div className="bg-[#121222] rounded-2xl p-6 shadow-lg col-span-2">
        <h3 className="text-cyan-400 font-semibold mb-4">Recent Orders</h3>
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-gray-600">
            <tr>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Item</th>
              <th className="text-left py-2">Price</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "John Carter", item: "iPhone 15 Pro", price: "$999", status: "Delivered" },
              { name: "Sophie Moore", item: "Apple Watch 8", price: "$399", status: "Delivered" },
              { name: "Matt Cannon", item: "MacBook M3", price: "$1,599", status: "Delivered" },
            ].map((order, idx) => (
              <tr key={idx} className="border-b border-gray-700">
                <td className="py-2">{order.name}</td>
                <td>{order.item}</td>
                <td>{order.price}</td>
                <td className="text-green-400">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Revenue by Category */}
      <div className="bg-[#121222] rounded-2xl p-6 shadow-lg">
        <h3 className="text-cyan-400 font-semibold mb-4">Revenue by Category</h3>
        <div className="space-y-4">
          {[
            { year: 2023, value: "80%" },
            { year: 2022, value: "60%" },
            { year: 2021, value: "40%" },
          ].map((rev, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{rev.year}</span>
                <span>{rev.value}</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-cyan-500 rounded-full"
                  style={{ width: rev.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-[#121222] rounded-2xl p-6 shadow-lg">
        <h3 className="text-cyan-400 font-semibold mb-4">Featured Products</h3>
        <ul className="space-y-4">
          {[
            { name: "iPhone 15 Pro Max", price: "$999" },
            { name: "Apple Watch Series 8", price: "$399" },
            { name: "MacBook M3", price: "$1,599" },
          ].map((p, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-3 rounded-xl bg-[#0f172a] hover:bg-cyan-900 transition"
            >
              <span>{p.name}</span>
              <span className="text-cyan-400">{p.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Market Overview */}
      <div className="bg-[#121222] rounded-2xl p-6 shadow-lg col-span-2">
        <h3 className="text-cyan-400 font-semibold mb-4">Market Overview</h3>
        <div className="w-full h-40 bg-[#0f172a] rounded-xl flex items-center justify-center text-gray-400">
          📈 Chart Placeholder
        </div>
      </div>

      {/* Recent Customers */}
      <div className="bg-[#121222] rounded-2xl p-6 shadow-lg flex flex-col items-center">
        <h3 className="text-cyan-400 font-semibold mb-4">Recent Customers</h3>
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-8 border-cyan-600 border-t-gray-700"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">12,624</span>
          </div>
        </div>
        <div className="mt-4 space-y-1 text-sm text-gray-300">
          <p><span className="text-cyan-400">8,548</span> Male</p>
          <p><span className="text-cyan-400">2,132</span> Female</p>
          <p><span className="text-cyan-400">1,944</span> Others</p>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}
