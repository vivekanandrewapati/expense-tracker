




// import React, { useState, useEffect } from "react";

// const categories = ["Food", "Travel", "Shopping", "Entertainment", "Utilities", "Healthcare", "Education", "Other"];

// function ExpenseForm({ addExpense, updateExpense, editingExpense, setEditingExpense }) {
//   const [formData, setFormData] = useState({
//     amount: '',
//     category: '',
//     description: '',
//     date: ''
//   });

//   useEffect(() => {
//     if (editingExpense) {
//       setFormData({
//         amount: editingExpense.amount,
//         category: editingExpense.category,
//         description: editingExpense.description,
//         date: editingExpense.date.slice(0, 10) // Format date for input
//       });
//     }
//   }, [editingExpense]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingExpense) {
//       updateExpense(editingExpense._id, formData);
//     } else {
//       addExpense(formData);
//     }

//     setFormData({ amount: '', category: '', description: '', date: '' });
//   };

//   const handleCancel = () => {
//     setEditingExpense(null);
//     setFormData({ amount: '', category: '', description: '', date: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
//           <input
//             type="number"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             placeholder="0.00"
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           required
//         />
//       </div>

//       <div className="flex gap-4">
//         <button
//           type="submit"
//           className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           {editingExpense ? "Update Expense" : "Add Expense"}
//         </button>
//         {editingExpense && (
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors"
//           >
//             Cancel
//           </button>
//         )}
//       </div>
//     </form>
//   );
// }

// export default ExpenseForm;


import React, { useState, useEffect } from "react";

const categories = ["Food", "Travel", "Shopping", "Entertainment", "Utilities", "Healthcare", "Education", "Other"];

function ExpenseForm({ addExpense, updateExpense, editingExpense, setEditingExpense }) {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData({
        amount: editingExpense.amount,
        category: editingExpense.category,
        description: editingExpense.description,
        date: editingExpense.date.slice(0, 10) // Format date for input
      });
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingExpense) {
      updateExpense(editingExpense._id, formData);
    } else {
      addExpense(formData);
    }

    setFormData({ amount: '', category: '', description: '', date: '' });
  };

  const handleCancel = () => {
    setEditingExpense(null);
    setFormData({ amount: '', category: '', description: '', date: '' });
  };

  const isFormValid = formData.amount && formData.category && formData.description && formData.date;

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl p-6 mb-6">
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Add or Edit Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Amount and Category Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Date Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 mt-6">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`flex-1 py-3 px-4 rounded-md transition-colors ${!isFormValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            {editingExpense ? "Update Expense" : "Add Expense"}
          </button>
          {editingExpense && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 py-3 px-4 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
