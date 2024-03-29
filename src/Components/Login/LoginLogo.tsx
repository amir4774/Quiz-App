import { Box, useTheme } from "@mui/material";
import hat from "../../assets/Hands Graduate.png";

const LoginLogo = () => {
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
      <Box component="img" mx="auto" src={hat} />
    </Box>
  );
};

export default LoginLogo;
