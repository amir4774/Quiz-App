import { Box, useTheme } from "@mui/material";
import { SignUp_Login_Logo_Type } from "./Interfaces";

const SignUp_Login_Logo = ({ logo }: SignUp_Login_Logo_Type) => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.mode === "light" ? "#f3f3f3" : "primary.main"}
      borderRadius="0 10px 10px 0"
      display={{ md: "flex", xs: "none" }}
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Box component="img" mx="auto" src={logo} />
    </Box>
  );
};

export default SignUp_Login_Logo;
