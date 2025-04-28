


// import React, { useEffect, useState } from "react";
// import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";
// import axios from "axios";

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

// function ExpenseDashboard({ expenses, setExpenses }) {
//   // Fetch data from backend
//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const response = await axios.get("/api/expenses");
//         setExpenses(response.data);
//       } catch (error) {
//         console.error("Error fetching expenses:", error);
//       }
//     };

//     fetchExpenses();
//   }, [setExpenses]);

//   // Prepare data for charts
//   const categoryData = expenses.reduce((acc, expense) => {
//     const existingCategory = acc.find(item => item.name === expense.category);
//     if (existingCategory) {
//       existingCategory.value += parseFloat(expense.amount);
//     } else {
//       acc.push({ name: expense.category, value: parseFloat(expense.amount) });
//     }
//     return acc;
//   }, []);

//   const monthlyData = expenses.reduce((acc, expense) => {
//     const date = new Date(expense.date);
//     const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
//     const existingMonth = acc.find(item => item.name === monthYear);
//     if (existingMonth) {
//       existingMonth.total += parseFloat(expense.amount);
//     } else {
//       acc.push({ name: monthYear, total: parseFloat(expense.amount) });
//     }
//     return acc;
//   }, []).sort((a, b) => a.name.localeCompare(b.name));

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md ">
//       <h2 className="text-xl font-semibold mb-4">Expense Analytics</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Category Distribution Pie Chart */}
//         <div className="h-64">
//           <h3 className="text-center font-medium mb-2">Category Distribution</h3>
//           {categoryData.length > 0 ? (
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={categoryData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {categoryData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           ) : (
//             <p className="text-center text-gray-500 mt-8">No category data available</p>
//           )}
//         </div>

//         {/* Monthly Expenses Bar Chart */}
//         <div className="h-64">
//           <h3 className="text-center font-medium mb-2">Monthly Expenses</h3>
//           {monthlyData.length > 0 ? (
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="total" fill="#8884d8" name="Total Expenses" />
//               </BarChart>
//             </ResponsiveContainer>
//           ) : (
//             <p className="text-center text-gray-500 mt-8">No monthly data available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseDashboard;


import React, { useEffect } from "react";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";
import axios from "axios";

const COLORS = ['#A2DFF7', '#F9A8D4', '#C7D2FE', '#D4F0FF', '#FEE2A7'];

function ExpenseDashboard({ expenses, setExpenses }) {
  // Prepare data for charts
  const categoryData = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find(item => item.name === expense.category);
    if (existingCategory) {
      existingCategory.value += parseFloat(expense.amount);
    } else {
      acc.push({ name: expense.category, value: parseFloat(expense.amount) });
    }
    return acc;
  }, []);

  const monthlyData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);
    const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    const existingMonth = acc.find(item => item.name === monthYear);
    if (existingMonth) {
      existingMonth.total += parseFloat(expense.amount);
    } else {
      acc.push({ name: monthYear, total: parseFloat(expense.amount) });
    }
    return acc;
  }, []).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Expense Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Category Distribution Pie Chart */}
        <div className="h-72">
          <h3 className="text-center text-lg font-medium text-indigo-700 mb-4 mt-4">Category Distribution</h3>
          {categoryData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500 mt-8">No category data available</p>
          )}
        </div>

        {/* Monthly Expenses Bar Chart */}
        <div className="h-72">
          <h3 className="text-center text-lg font-medium text-indigo-700 mb-4 mt-4">Monthly Expenses</h3>
          {monthlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#A2DFF7" name="Total Expenses" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500 mt-8">No monthly data available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseDashboard;
