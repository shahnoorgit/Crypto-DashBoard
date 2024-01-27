import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import TransactionPage from "./Pages/TranscationPage.jsx";
import Support from "./Pages/Support.jsx";
import { Provider } from "react-redux";
import store from "./storeRedux/Store.js";

import { AiFillDollarCircle } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { Outlet } from "react-router-dom";
const Tran = [
  {
    id: 1,
    icon: <TbCoinRupeeFilled />,
    text: "INR Deposit",
    amount: "+ ₹81,123.10",
    timestamp: "2022-06-09 7:06 PM",
  },
  {
    id: 2,
    icon: <FaBitcoin />,
    text: "BTC Sell",
    amount: "- 12.48513391 BTC",
    timestamp: "2022-05-27 12:32 PM",
  },
  {
    id: 3,
    icon: <TbCoinRupeeFilled />,
    text: "INR Deposit",
    amount: "+ ₹81,123.10",
    timestamp: "2022-06-09 7:06 PM",
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Dashboard", element: <Dashboard Tran={Tran} /> },
      { path: "/", element: <Dashboard Tran={Tran} /> },
      { path: "/Transaction", element: <TransactionPage /> },
      { path: "/support", element: <Support /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
