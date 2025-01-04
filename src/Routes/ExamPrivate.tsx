import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import useStore from "../Zustand/Store";
import useGlobalTranslation from "../Hooks/useGlobalTranslation";

const ExamPrivate = ({ children }: { children: JSX.Element }) => {
  const { examParams } = useStore();
  const { t } = useGlobalTranslation();

  if (Object.values(examParams).every((value) => !!value)) {
    return children;
  } else {
    toast.error(t("Please Create Exam"));
    return <Navigate replace to="/create-exam" />;
  }
};

export default ExamPrivate;
