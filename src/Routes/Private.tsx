import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Private = ({ children }: { children: JSX.Element }) => {
  const isLogin = sessionStorage.getItem("userName");

  if (isLogin) {
    return children;
  } else {
    toast.error("Please Login First");
    return <Navigate replace to="/login" />;
  }
};

export default Private;
