import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Login from "./login/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Account from "./pages/Accounts.jsx";
import Budget from "./pages/Budget.jsx";
import Report from "./pages/Report.jsx";
import Setting from "./pages/Settings.jsx";
import Help from "./pages/Help.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
      {
        path: "account/",
        element: <Account />,
      },
      {
        path: "budget/",
        element: <Budget />,
      },
      {
        path: "report/",
        element: <Report />,
      },
      {
        path: "setting/",
        element: <Setting />,
      },
      {
        path: "help/",
        element: <Help />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* {<App />} */}
    <RouterProvider router={router} />
  </StrictMode>,
);
