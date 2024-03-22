import { useRoutes } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";

const routs = [
  {
    path: "/",
    element: <MainLayout />,
  },
];

const AppRouts = () => {
  const routing = useRoutes(routs);

  return <div>{routing}</div>;
};

export default AppRouts;
