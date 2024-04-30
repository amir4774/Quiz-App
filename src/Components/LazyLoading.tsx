import { Box, LinearProgress } from "@mui/material";
import QuizGradTitle from "./QuizGradTitle";

const LazyLoading = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
          }}
        >
          <QuizGradTitle />

          <LinearProgress />
        </Box>
      </Box>
    </div>
  );
};

export default LazyLoading;
