import { Box, Skeleton } from "@mui/material";

const LoadingUserExams = () => {
  return (
    <Box width="90%" mx="auto">
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton
          key={index}
          variant="text"
          animation="wave"
          sx={{
            bgcolor: "background.default",
            height: "120px",
          }}
        />
      ))}
    </Box>
  );
};

export default LoadingUserExams;
