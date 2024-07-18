import { Box } from "@mui/material";

const SignUp_Login_Box = ({ children }: { children: JSX.Element[] }) => {
  return (
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
      {children}
    </Box>
  );
};

export default SignUp_Login_Box;
