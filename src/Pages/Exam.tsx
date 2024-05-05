import { useEffect } from "react";
import { Box } from "@mui/material";
import useQuize from "../Hooks/useQuize";
import LoadingExam from "../Components/Exam/Loading/LoadingExam";
import ErrorExam from "../Components/Exam/ErrorExam";
import Questions from "../Components/Exam/Questions";
import useStore from "../Zustand/Store";

const Exam = () => {
  const { resetResult } = useStore();
  const { isLoading, isError, questions } = useQuize();

  useEffect(() => {
    resetResult();
  }, []);

  if (isError) return <ErrorExam />;

  return (
    <div>
      <Box width="90%" mx="auto">
        {isLoading ? <LoadingExam /> : <Questions questions={questions} />}
      </Box>
    </div>
  );
};

export default Exam;
