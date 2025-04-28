


// import React from "react";

// function ExpenseList({ expenses, setEditingExpense, deleteExpense }) {
//   return (
//     <div className="space-y-4">
//       {expenses.length === 0 ? (
//         <p className="text-center py-8 text-gray-500">No expenses added yet</p>
//       ) : (
//         <ul className="divide-y divide-gray-200">
//           {expenses.map((expense) => (
//             <li key={expense._id} className="py-4 px-4 hover:bg-gray-50">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="font-medium">{expense.description}</h3>
//                   <p className="text-sm text-gray-500">
//                     {expense.category} • {new Date(expense.date).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold">${expense.amount.toFixed(2)}</span>
//                   <button
//                     onClick={() => setEditingExpense(expense)}
//                     className="text-blue-600 hover:text-blue-800"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteExpense(expense._id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ExpenseList;



import React from "react";

function ExpenseList({ expenses, setEditingExpense, deleteExpense }) {
  return (
    <div className="space-y-4 pt-4">
      {expenses.length === 0 ? (
        <p className="text-center py-8 text-gray-500">No expenses added yet</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {expenses.map((expense) => (
            <li key={expense._id} className="py-4 px-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{expense.description}</h3>
                  <p className="text-sm text-gray-500">
                    {expense.category} • {new Date(expense.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold">${expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => setEditingExpense(expense)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteExpense(expense._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
