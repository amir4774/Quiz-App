import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import useGlobalTranslation from "../Hooks/useGlobalTranslation";

const Private = ({ children }: { children: JSX.Element }) => {
  const isLogin = localStorage.getItem("userName");
  const { t } = useGlobalTranslation();

  if (isLogin) {
    return children;
  } else {
    toast.error(t("Please Login First"));
    return <Navigate replace to="/login" />;
  }
};

export default Private;
