import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const UserExamsButton = ({
  variant,
}: {
  variant: "contained" | "outlined" | "text";
}) => {
  const { t } = useGlobalTranslation();

  return (
    <Link to="/my-exams">
      <Button variant={variant} sx={{ p: "5px 30px", fontWeight: 600 }}>
        {t("My exams")}
      </Button>
    </Link>
  );
};

export default UserExamsButton;
