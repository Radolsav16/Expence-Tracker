import React from "react";
import PagesLayout from "../../components/layouts/PagesLayout";

const incomeSources = [
  { id: 1, source: "Salary", amount: 3000, date: "2025-07-01" },
  { id: 2, source: "Freelance", amount: 1200, date: "2025-07-10" },
  { id: 3, source: "Dividends", amount: 200, date: "2025-07-15" },
];

const Income:React.FC = () =>{
  const totalIncome = incomeSources.reduce((acc, curr) => acc + curr.amount, 0);

  return (
       <div className="flex h-screen bg-gray-100 text-gray-800">
      <PagesLayout>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Income Overview</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            + Add Income
          </button>
        </div>

        {/* Total Income Card */}
        <div className="bg-blue-100 text-blue-800 rounded p-4 mb-6">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-3xl font-bold mt-1">${totalIncome.toFixed(2)}</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <input
            type="text"
            placeholder="Search income..."
            className="px-4 py-2 border rounded w-full sm:w-64"
          />
          <select className="px-4 py-2 border rounded w-full sm:w-48">
            <option value="">Filter by Source</option>
            <option value="Job">Job</option>
            <option value="Freelancing">Freelancing</option>
            <option value="Investments">Investments</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Income Table */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Source</th>
                <th className="px-4 py-2 text-right text-sm font-semibold text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {incomeSources.map((income) => (
                <tr key={income.id}>
                  <td className="px-4 py-3 text-sm text-gray-600">{income.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Name 2</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{income.source}</td>
                  <td className="px-4 py-3 text-sm text-blue-600 text-right font-semibold">
                    +${income.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      </PagesLayout>
    </div>
  );
}

export default Income;