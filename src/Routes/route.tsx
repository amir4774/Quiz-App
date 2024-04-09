import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Private from "./Private";
import ExamPrivate from "./ExamPrivate";
import MainLayout from "../Components/Layout/MainLayout";
const Landing = lazy(() => import("../Pages/Landing"));
const Login = lazy(() => import("../Pages/Login"));
const CreateExam = lazy(() => import("../Pages/CreateExam"));
const Exam = lazy(() => import("../Pages/Exam"));

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
      {
        path: "/create-exam",
        element: (
          <Private>
            <CreateExam />
          </Private>
        ),
      },
      {
        path: "/exam",
        element: (
          <ExamPrivate>
            <Exam />
          </ExamPrivate>
        ),
      },
    ],
  },
];

const AppRouts = () => {
  const routing = useRoutes(routs);

  return <div>{routing}</div>;
};

export default AppRouts;
