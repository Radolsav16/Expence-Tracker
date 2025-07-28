import React,{ useState } from "react";
import PagesLayout from "../../components/layouts/PagesLayout";

const mockExpenses = [
  { id: 1, source: "Groceries", amount: 150, date: "2025-07-14" },
  { id: 2, source: "Rent", amount: 1000, date: "2025-07-10" },
  { id: 3, source: "Utilities", amount: 200, date: "2025-07-08" },
];

 const  Expenses:React.FC = () => {
  const [expenses, setExpenses] = useState(mockExpenses);
  const totalExpenses = 50

  return (
        <div className="flex h-screen bg-gray-100 text-gray-800">
      <PagesLayout>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Expenses Overview</h1>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            + Add Expense
          </button>
        </div>

        {/* Total Expenses Card */}
        <div className="bg-red-100 text-red-800 rounded p-4 mb-6">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-3xl font-bold mt-1">${totalExpenses.toFixed(2)}</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <input
            type="text"
            placeholder="Search expenses..."
            className="px-4 py-2 border rounded w-full sm:w-64"
          />
          <select className="px-4 py-2 border rounded w-full sm:w-48">
            <option value="">Filter by Source</option>
            <option value="Food">Food</option>
            <option value="Housing">Housing</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Expenses Table */}
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
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="px-4 py-3 text-sm text-gray-600">{expense.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Name</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Source</td>
                  <td className="px-4 py-3 text-sm text-red-600 text-right font-semibold">
                    -${expense.amount.toFixed(2)}
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

export default Expenses;