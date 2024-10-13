import React from "react";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";

import Events from "./Components/Events/Events";
import Analytics from "./Components/Analytics/Analytics";
import Reviews from "./Components/Reviews/Reviews";
import Settings from "./Components/Settings/Settings";
import "./App.css";
import Customer from "./Components/Customer/Customer";
import Calendar from "./Components/Calendar/Calendar";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,

      children: [
        {
          path: "dash",
          element: <Dashboard />,
        },
        {
          path: "cal",
          element: <Calendar />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "customer",
          element: <Customer />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return (
    <div className="App  ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
