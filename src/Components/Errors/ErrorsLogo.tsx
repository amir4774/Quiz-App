import { Box } from "@mui/material";
import { ErrorsLogoType } from "./Interfaces";

const ErrorsLogo = ({ imageSrc }: ErrorsLogoType) => {
  return (
    <Box component="img" src={imageSrc} alt="Error" width={{ xs: "100%", md: "500px" }} />
  );
};

export default ErrorsLogo;
