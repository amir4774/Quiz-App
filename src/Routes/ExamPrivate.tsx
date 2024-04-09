import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import useStore from "../Zustand/Store";

const ExamPrivate = ({ children }: { children: JSX.Element }) => {
  const { examParams } = useStore();

  if (Object.values(examParams).every((value) => !!value)) {
    return children;
  } else {
    toast.error("Please Create Exam");
    return <Navigate replace to="/create-exam" />;
  }
};

export default ExamPrivate;
