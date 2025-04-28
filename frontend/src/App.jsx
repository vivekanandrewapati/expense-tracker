


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import ExpenseDashboard from "./components/ExpenseDashboard";

// const API_URL = 'http://localhost:5000'; // Change if needed

// function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [editingExpense, setEditingExpense] = useState(null);

//   // Fetch all expenses from backend
//   const fetchExpenses = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/expenses`);
//       setExpenses(res.data);
//     } catch (err) {
//       console.error('Error fetching expenses:', err);
//     }
//   };

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   // Add new expense
//   const addExpense = async (expense) => {
//     try {
//       const res = await axios.post(`${API_URL}/api/expenses`, expense);
//       setExpenses([...expenses, res.data]);
//     } catch (err) {
//       console.error('Error adding expense:', err);
//     }
//   };

//   // Update existing expense
//   const updateExpense = async (id, updatedExpense) => {
//     try {
//       const res = await axios.put(`${API_URL}/api/expenses/${id}`, updatedExpense);
//       setExpenses(expenses.map(exp => exp._id === id ? res.data : exp));
//       setEditingExpense(null);
//     } catch (err) {
//       console.error('Error updating expense:', err);
//     }
//   };

//   // Delete an expense
//   const deleteExpense = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/api/expenses/${id}`);
//       setExpenses(expenses.filter(exp => exp._id !== id));
//     } catch (err) {
//       console.error('Error deleting expense:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-4xl mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-1">
//             <ExpenseForm 
//               addExpense={addExpense} 
//               updateExpense={updateExpense}
//               editingExpense={editingExpense}
//               setEditingExpense={setEditingExpense}
//             />
//           </div>

//           <div className="lg:col-span-2 space-y-6">
//             <ExpenseDashboard expenses={expenses} />
//             <ExpenseList 
//               expenses={expenses} 
//               setEditingExpense={setEditingExpense}
//               deleteExpense={deleteExpense}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseDashboard from "./components/ExpenseDashboard";

const API_URL = 'http://localhost:5000'; // Change if needed

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  // Fetch all expenses from backend
  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/expenses`);
      setExpenses(res.data);
    } catch (err) {
      console.error('Error fetching expenses:', err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Add new expense
  const addExpense = async (expense) => {
    try {
      const res = await axios.post(`${API_URL}/api/expenses`, expense);
      setExpenses([...expenses, res.data]);
    } catch (err) {
      console.error('Error adding expense:', err);
    }
  };

  // Update existing expense
  const updateExpense = async (id, updatedExpense) => {
    try {
      const res = await axios.put(`${API_URL}/api/expenses/${id}`, updatedExpense);
      setExpenses(expenses.map(exp => exp._id === id ? res.data : exp));
      setEditingExpense(null);
    } catch (err) {
      console.error('Error updating expense:', err);
    }
  };

  // Delete an expense
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/expenses/${id}`);
      setExpenses(expenses.filter(exp => exp._id !== id));
    } catch (err) {
      console.error('Error deleting expense:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Expense Tracker</h1>

        {/* ExpenseForm stays at the top */}
        <div className="mb-8">
          <ExpenseForm
            addExpense={addExpense}
            updateExpense={updateExpense}
            editingExpense={editingExpense}
            setEditingExpense={setEditingExpense}
          />
        </div>

        {/* Dashboard and List are below the form */}
        <div className="space-y-8">
          <ExpenseDashboard expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            setEditingExpense={setEditingExpense}
            deleteExpense={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
