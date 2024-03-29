import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
const Landing = lazy(() => import("../Pages/Landing"));
const Login = lazy(() => import("../Pages/Login"));

const routs = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

const AppRouts = () => {
  const routing = useRoutes(routs);

  return <div>{routing}</div>;
};

export default AppRouts;
