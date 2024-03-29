import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { HelmetProvider } from "react-helmet-async";

import store from "./store";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import OrderList from "./pages/admin/OrderList";
import ProductList from "./pages/admin/ProductList";
import ProductEdit from "./pages/admin/ProductEdit";
import UserList from "./pages/admin/UserList";
import UserEdit from "./pages/admin/UserEdit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />}></Route>
      <Route path="/page/:pageNumber" element={<Home />}></Route>
      <Route path="/search/:keyword" element={<Home />}></Route>
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<Home />}
      ></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/placeorder" element={<PlaceOrder />}></Route>
        <Route path="/order/:id" element={<Order />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderList />}></Route>
        <Route path="/admin/productlist" element={<ProductList />}></Route>
        <Route
          path="/admin/productlist/:pageNumber"
          element={<ProductList />}
        ></Route>
        <Route path="/admin/product/:id/edit" element={<ProductEdit />}></Route>
        <Route path="/admin/userlist" element={<UserList />}></Route>
        <Route path="/admin/user/:id/edit" element={<UserEdit />}></Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
