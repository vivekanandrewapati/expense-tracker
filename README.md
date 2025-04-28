
## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (which includes npm)
*   [MongoDB](https://www.mongodb.com/try/download/community) (Make sure it's running)
*   [Git](https://git-scm.com/) (Optional, for cloning)

## Setup Instructions

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone [<your-repository-url>](https://github.com/vivekanandrewapati/expense-tracker.git)
    git clone 
    cd expense-tracker
    ```

2.  **Backend Setup:**
    *   Navigate to the backend directory:
        ```bash
        cd backend
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
    *   Create a `.env` file in the `backend` directory.
    *   Add your MongoDB connection string to the `.env` file:
        ```env
        MONGODB_URI=mongodb://localhost:27017/expense-tracker # Replace with your actual connection string if different
        PORT=5000 # Optional: specify the port for the backend
        ```

3.  **Frontend Setup:**
    *   Navigate to the frontend directory from the root:
        ```bash
        cd ../frontend
        ```
        *(If you are already in the `backend` directory)*
        or
        ```bash
        cd frontend
        ```
        *(If you are in the root `expense-tracker` directory)*
    *   Install dependencies:
        ```bash
        npm install
        ```

## Running the Application

You need to run both the backend and frontend servers concurrently.

1.  **Start the Backend Server:**
    *   Open a terminal in the `backend` directory.
    *   Run the development server:
        ```bash
        npm run dev
        ```
    *   The backend API will typically be running on `http://localhost:5000` (or the port specified in your `.env`).

2.  **Start the Frontend Development Server:**
    *   Open a *separate* terminal in the `frontend` directory.
    *   Run the development server:
        ```bash
        npm run dev
        ```
    *   The frontend application will typically be available at `http://localhost:5173` (Vite's default) or another port specified in the terminal output. Open this URL in your browser.

The frontend is configured to connect to the backend API at `http://localhost:5000`. If your backend runs on a different port, you'll need to update the `API_URL` constant in <mcfile name="App.jsx" path="e:\expense tracker\frontend\src\App.jsx"></mcfile>.



# Expense Tracker Application Architecture

This document outlines the architecture and data flow of the Expense Tracker application.

## 1. Overview

The application is a full-stack web application designed to help users track their expenses. It consists of two main parts:

*   **Frontend:** A single-page application (SPA) built with React and Vite.
*   **Backend:** A RESTful API built with Node.js, Express, and MongoDB.

## 2. Technology Stack

*   **Frontend:**
    *   **Framework/Library:** React.js
    *   **Build Tool:** Vite
    *   **Styling:** Tailwind CSS
    *   **HTTP Client:** Axios (for API communication)
    *   **Charting:** Recharts
*   **Backend:**
    *   **Runtime:** Node.js
    *   **Framework:** Express.js
    *   **Database:** MongoDB (with Mongoose ODM)
    *   **Environment Variables:** `dotenv`
    *   **CORS:** `cors` middleware
*   **Database:**
    *   MongoDB

## 3. Architecture

### 3.1. Frontend (`frontend/`)

*   **`src/main.jsx`**: Entry point of the React application. Renders the root <mcsymbol name="App" filename="App.jsx" path="e:\expense tracker\frontend\src\App.jsx" startline="91" type="function"></mcsymbol> component.
*   **`src/App.jsx`**: Main application component.
    *   Manages the overall application state (expenses list, editing state).
    *   Fetches initial expenses from the backend API on mount.
    *   Contains functions (`addExpense`, `updateExpense`, `deleteExpense`) that interact with the backend API via Axios.
    *   Renders the main UI components: <mcsymbol name="ExpenseForm" filename="ExpenseForm.jsx" path="e:\expense tracker\frontend\src\components\ExpenseForm.jsx" startline="121" type="function"></mcsymbol>, <mcsymbol name="ExpenseList" filename="ExpenseList.jsx" path="e:\expense tracker\frontend\src\components\ExpenseList.jsx" startline="44" type="function"></mcsymbol>, and <mcsymbol name="ExpenseDashboard" filename="ExpenseDashboard.jsx" path="e:\expense tracker\frontend\src\components\ExpenseDashboard.jsx" startline="101" type="function"></mcsymbol>.
*   **`src/components/`**: Contains reusable UI components:
    *   **`ExpenseForm.jsx`**: Handles user input for adding or editing expenses. Submits data to the <mcsymbol name="App" filename="App.jsx" path="e:\expense tracker\frontend\src\App.jsx" startline="91" type="function"></mcsymbol> component's handler functions.
    *   **`ExpenseList.jsx`**: Displays the list of expenses. Provides buttons to trigger editing or deletion via callbacks passed from <mcsymbol name="App" filename="App.jsx" path="e:\expense tracker\frontend\src\App.jsx" startline="91" type="function"></mcsymbol>.
    *   **`ExpenseDashboard.jsx`**: Visualizes expense data using charts (Pie chart for categories, Bar chart for monthly totals) based on the `expenses` prop.
*   **`src/index.css` & `tailwind.config.js`**: Global styles and Tailwind CSS configuration.
*   **`vite.config.js`**: Vite build configuration.

### 3.2. Backend (`backend/`)

*   **`server.js`**: Entry point of the backend application.
    *   Initializes the Express app.
    *   Connects to the MongoDB database using <mcfile name="db.js" path="e:\expense tracker\backend\db.js"></mcfile>.
    *   Configures middleware (CORS, JSON body parser).
    *   Mounts the expense routes (`/api`).
    *   Starts the HTTP server.
*   **`db.js`**: Handles the MongoDB connection logic using Mongoose and environment variables (`MONGODB_URI`).
*   **`routes/expenseRoutes.js`**: Defines the API endpoints for expenses (GET, POST, PUT, DELETE). Maps HTTP methods and paths to controller functions.
*   **`controllers/expenseController.js`**: Contains the logic for handling requests related to expenses.
    *   Interacts with the <mcsymbol name="Expense" filename="Expense.js" path="e:\expense tracker\backend\models\Expense.js" startline="20" type="class"></mcsymbol> model to perform CRUD operations on the database.
    *   Sends JSON responses back to the client.
*   **`models/Expense.js`**: Defines the Mongoose schema and model for the `Expense` collection in MongoDB. Specifies the structure and data types for expense documents.
*   **`.env`**: (Not committed) Stores sensitive configuration like the `MONGODB_URI` and `PORT`.

## 4. Data Flow (Example: Adding an Expense)

1.  **User Interaction (Frontend):** The user fills out the <mcsymbol name="ExpenseForm" filename="ExpenseForm.jsx" path="e:\expense tracker\frontend\src\components\ExpenseForm.jsx" startline="121" type="function"></mcsymbol> and clicks "Add Expense".
2.  **Form Submission (Frontend):** The form's `onSubmit` handler in <mcsymbol name="ExpenseForm" filename="ExpenseForm.jsx" path="e:\expense tracker\frontend\src\components\ExpenseForm.jsx" startline="121" type="function"></mcsymbol> prevents the default browser submission and calls the `addExpense` function passed down from <mcsymbol name="App" filename="App.jsx" path="e:\expense tracker\frontend\src\App.jsx" startline="91" type="function"></mcsymbol>, passing the form data.
3.  **API Call (Frontend):** The `addExpense` function in <mcsymbol name="App" filename="App.jsx" path="e:\expense tracker\frontend\src\App.jsx" startline="91" type="function"></mcsymbol> makes an asynchronous `POST` request to the backend API endpoint (`http://localhost:5000/api/expenses`) using Axios, sending the new expense data in the request body.
4.  **Request Handling (Backend):** The Express server receives the `POST` request. The `expenseRoutes.js` router matches the `/api/expenses` path and directs the request to the `addExpense` controller function in <mcfile name="expenseController.js" path="e:\expense tracker\backend\controllers\expenseController.js"></mcfile>.
5.  **Database Interaction (Backend):** The `addExpense` controller function creates a new `Expense` document using the Mongoose model (<mcsymbol name="Expense" filename="Expense.js" path="e:\expense tracker\backend\models\Expense.js" startline="20" type="class"></mcsymbol>) and saves it to the MongoDB database.
6.  **API Response (Backend):** Upon successful saving, the controller sends a `201 Created` status code and the newly created expense object (including its `_id` generated by MongoDB) back to the frontend as a JSON response.
7.  **State Update (Frontend):** The `addExpense` function in <mcsymbol name="App" filename="App.jsx" path="e:\expense tracker\frontend\src\App.jsx" startline="91" type="function"></mcsymbol> receives the response. It updates the `expenses` state by adding the new expense object returned from the API.
8.  **UI Update (Frontend):** React detects the state change in <mcsymbol name="App" filename="App.jsx" path="e:\expense tracker\frontend\src\App.jsx" startline="91" type="function"></mcsymbol> and re-renders the necessary components (<mcsymbol name="ExpenseList" filename="ExpenseList.jsx" path="e:\expense tracker\frontend\src\components\ExpenseList.jsx" startline="44" type="function"></mcsymbol>, <mcsymbol name="ExpenseDashboard" filename="ExpenseDashboard.jsx" path="e:\expense tracker\frontend\src\components\ExpenseDashboard.jsx" startline="101" type="function"></mcsymbol>) to display the updated list and potentially updated charts.

Similar flows exist for fetching (GET), updating (PUT), and deleting (DELETE) expenses, involving different API endpoints and controller functions but following the same pattern of Frontend -> Backend API -> Database -> Backend API -> Frontend.
