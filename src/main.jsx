// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes
<<<<<<< Updated upstream
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import SignupPage from "./components/SignupPage.jsx";

=======
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FitnessPage from "./pages/FitnessPage.jsx";
>>>>>>> Stashed changes

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
<<<<<<< Updated upstream
      { path: "/signup", element: <SignupPage /> },
=======
      { path: "/fitness", element: <FitnessPage /> },
>>>>>>> Stashed changes
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);