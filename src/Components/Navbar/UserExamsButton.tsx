import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const UserExamsButton = () => {
  const { t } = useGlobalTranslation();

  return (
    <Link to="/my-exams">
      <Button variant="text" color="inherit">{t("My exams")}</Button>
    </Link>
  );
};

export default UserExamsButton;
