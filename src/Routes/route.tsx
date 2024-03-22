import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";

const routs = [
  {
    path: "/",
    element: <Home />,
  },
];

const AppRouts = () => {
  const routing = useRoutes(routs);

  return <div>{routing}</div>;
};

export default AppRouts;
