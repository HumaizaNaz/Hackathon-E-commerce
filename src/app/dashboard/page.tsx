"use client"

import type React from "react"
import { Bar, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

const AnalyticsDashboard: React.FC = () => {
  // Mock data for demonstration
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  const trafficData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Traffic",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const popularProducts = [
    { id: 1, name: "Product A", sales: 120 },
    { id: 2, name: "Product B", sales: 80 },
    { id: 3, name: "Product C", sales: 60 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <Bar data={salesData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Traffic</h2>
          <Line data={trafficData} />
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Popular Products</h2>
        <ul>
          {popularProducts.map((product) => (
            <li key={product.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <span>{product.name}</span>
              <span className="font-semibold">{product.sales} sales</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AnalyticsDashboard

