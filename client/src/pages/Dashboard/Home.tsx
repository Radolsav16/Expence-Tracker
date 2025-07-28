import React  from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import PagesLayout from "../../components/layouts/PagesLayout";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const recentTransactions = [
  { id: 1, description: "Groceries", amount: -45.2, date: "2025-07-15" },
  { id: 2, description: "Salary", amount: 1500, date: "2025-07-10" },
  { id: 3, description: "Electricity Bill", amount: -120, date: "2025-07-09" },
  { id: 4, description: "Sold old bike", amount: 200, date: "2025-07-05" },
];

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Income",
      data: [500, 700, 800, 1200, 1500, 1700, 1600],
      backgroundColor: "rgba(42, 34, 197, 0.7)", // green-500
    },
    {
      label: "Expenses",
      data: [300, 400, 500, 700, 900, 1000, 1100],
      backgroundColor: "rgba(248, 248, 248, 1)", // red-500
    },
  ],
};

const Home:React.FC = () =>{
  return (
  <div className="flex h-screen bg-gray-100 text-gray-800">
    <PagesLayout>
          <main className="flex-1 p-8 overflow-y-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-1">Total Balance</h3>
            <p className="text-3xl font-bold">$5,230.00</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-blue-600 text-sm font-semibold mb-1">Total Income</h3>
            <p className="text-2xl font-bold text-blue-600">$12,500.00</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-blue-600 text-sm font-semibold mb-1">Total Expenses</h3>
            <p className="text-2xl font-bold text-blue-600">$7,270.00</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="bg-white rounded-lg shadow p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <ul className="divide-y divide-gray-200">
              {recentTransactions.map((tx) => (
                <li key={tx.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{tx.description}</p>
                    <p className="text-sm text-blue-500">{tx.date}</p>
                  </div>
                  <p
                    className={`font-semibold ${
                      tx.amount > 0 ? "text-blue-600" : "text-blue-600"
                    }`}
                  >
                    {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Financial Overview</h3>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  title: { display: false },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { stepSize: 500 },
                  },
                },
              }}
            />
          </section>
        </div>
      </main>
    </PagesLayout>
    </div>
  );
}


export default Home;