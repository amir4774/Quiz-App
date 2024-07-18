import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const SignUpButton = () => {
  return (
    <Link to="/sign-up">
      <Button variant="useful" sx={{ p: "5px 30px", fontWeight: 600, ml: 2 }}>
        Sign up
      </Button>
    </Link>
  );
};

export default SignUpButton;
