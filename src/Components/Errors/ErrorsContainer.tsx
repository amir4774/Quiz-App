import { Stack } from "@mui/material";
import { ErrorsContainerType } from "./Interfaces";

const ErrorsContainer = ({ children, margin }: ErrorsContainerType) => {
  return (
    <Stack
      width="90%"
      mx="auto"
      mt={margin}
      direction={{ xs: "column", md: "row-reverse" }}
      justifyContent="space-around"
      alignItems="center"
    >
      {children}
    </Stack>
  );
};

export default ErrorsContainer;
