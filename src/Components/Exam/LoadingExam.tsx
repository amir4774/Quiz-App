import { Skeleton } from "@mui/material";

const LoadingExam = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      sx={{ fontSize: "2rem", bgcolor: "background.default" }}
    />
  );
};

export default LoadingExam;
