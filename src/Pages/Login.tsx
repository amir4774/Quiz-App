import { Box } from "@mui/material";
import LoginLogo from "../Components/Login/LoginLogo";
import LoginForm from "../Components/Login/LoginForm";

const Login = () => {
  return (
    <div>
      <Box
        borderRadius="10px"
        width={{ md: "70%", xs: "90%" }}
        height="500px"
        mx="auto"
        boxShadow={5}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
      >
        <LoginForm />
        <LoginLogo />
      </Box>
    </div>
  );
};

export default Login;
