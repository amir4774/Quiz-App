import { Box } from "@mui/material";
import useQuize from "../Hooks/useQuize";
import LoadingExam from "../Components/Exam/LoadingExam";
import Questions from "../Components/Exam/Questions";

const Exam = () => {
  const { isLoading, questions } = useQuize();

  return (
    <div>
      <Box width="90%" mx="auto">
        {isLoading ? <LoadingExam /> : <Questions questions={questions} />}
      </Box>
    </div>
  );
};

export default Exam;
