import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ADMIN } from "../components/helpers/consts";
import AddProduct from "../components/Products/AddProduct";
import { useAuth } from "../contexts/authContext";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
