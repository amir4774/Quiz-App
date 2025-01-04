import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import useGlobalTranslation from "../../../Hooks/useGlobalTranslation";

const SignUpButton = () => {
  const { t } = useGlobalTranslation();

  return (
    <Link to="/sign-up">
      <Button variant="useful" sx={{ p: "5px 30px", fontWeight: 600, ml: 2 }}>
        {t("Sign up")}
      </Button>
    </Link>
  );
};

export default SignUpButton;
