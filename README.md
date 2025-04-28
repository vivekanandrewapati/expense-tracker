
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
