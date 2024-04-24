import { useEffect } from "react";
import { Box } from "@mui/material";
import useQuize from "../Hooks/useQuize";
import LoadingExam from "../Components/Exam/Loading/LoadingExam";
import Questions from "../Components/Exam/Questions";
import useStore from "../Zustand/Store";

const Exam = () => {
  const { resetResult } = useStore();
  const { isLoading, questions } = useQuize();

  useEffect(() => {
    resetResult();
  }, []);

  return (
    <div>
      <Box width="90%" mx="auto">
        {isLoading ? <LoadingExam /> : <Questions questions={questions} />}
      </Box>
    </div>
  );
};

export default Exam;
