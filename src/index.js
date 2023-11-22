import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import HomePage from "./components/HomePage.jsx";
import Offers from "./components/Offers.jsx";
import CreateApp from "./components/CreateApp.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import UpdateOffers from "./components/UpdateOffers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/Offers",
    element: <Offers />,
  },
  // {
  //   path: '/CreateApp',
  //   element: <CreateApp />,
  // },
  // {
  //   path: '/UpdateForm',
  //   element: <UpdateForm />,
  // },
  // {
  //   path: '/UpdateOffers',
  //   element: <UpdateOffers />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
