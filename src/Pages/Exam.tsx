import { Box, Skeleton } from "@mui/material";
import useQuize from "../Hooks/useQuize";

const Exam = () => {
  const { isLoading, questions } = useQuize();

  return (
    <div>
      <Box width="90%" mx="auto">
        {isLoading ? (
          <Skeleton
            variant="text"
            animation="wave"
            sx={{ fontSize: "2rem", bgcolor: "background.default" }}
          />
        ) : (
          <>{questions[0]?.question}</>
        )}
      </Box>
    </div>
  );
};

export default Exam;
