import { lazy } from "react";
import MainLayout from "@/layouts/MainLayout";
import NotFound from "@/common/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { Navigate } from "react-router-dom";
import Login from "@/pages/auth/login/Login";
import Register from "@/pages/auth/register/Register";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import Dashboard from "@/pages/dashboard/Dashboard";
// const UserListPage = lazy(() => import("../../pages/users/UserListPage"));
// const ProductListPage = lazy(() => import("../../pages/products/ProductListPage"));

const UserListPage = lazy(() => import("@/pages/users/UserListPage"));
const ProductListPage = lazy(() => import("@/pages/products/ProductListPage"));

const PATH_USERS = "/users";
const PATH_PRODUCTS = "/products";
const PATH_LOGIN = "/login";
const PATH_REGISTER = "/register";
const PATH_DASHBOARD = "/dashboard";
export const PAGE_USERS = {
  label: "Users",
  path: PATH_USERS,
  element: <UserListPage />,
  avatar: <FaUser />,
};

export const PAGE_PRODUCTS = {
  label: "Products",
  path: PATH_PRODUCTS,
  element: <ProductListPage />,
  avatar: <BsBoxSeamFill />,
};
export const PAGE_Orders = {
  label: "Orders",
  path: PATH_PRODUCTS,
  element: <ProductListPage />,
  avatar: <FaShoppingCart />,
};
export const PAGE_DASHBOARD = {
  label: "Dashboard",
  path: PATH_DASHBOARD,
  element: <Dashboard />,
  avatar: <MdDashboard />,
};
export const LOGIN_PAGE = {
  label: "Login",
  path: PATH_LOGIN,
  element: <Login />,
};

export const REGISTER_PAGE = {
  label: "Register",
  path: PATH_REGISTER,
  element: <Register />,
};

//for side bar
export const NAV_ITEMS = [
  PAGE_DASHBOARD,
  PAGE_USERS,
  PAGE_PRODUCTS,
  PAGE_Orders,
];
export const AUTH_PAGES = [LOGIN_PAGE, REGISTER_PAGE];
export const PAGES = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // 🔓 PUBLIC ROUTES
      ...AUTH_PAGES,

      // 🔐 PROTECTED ROUTES
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="/users" replace />,
          },
          ...NAV_ITEMS,
        ],
      },

      // ❌ NOT FOUND
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
// export const PAGES =[
//     {
//         path:'/',
//         element:<MainLayout/>,
//         children:[

//             ...NAV_ITEMS,
//             {path:'*',element:<NotFound/>}
//         ]
//     }
// ]
