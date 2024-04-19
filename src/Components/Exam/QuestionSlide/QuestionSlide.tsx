import { Box } from "@mui/material";
import QuestionButtons from "./QuestionButtons";
import QuestionTitle from "../QuestionTitle";
import useAnswers from "../../../Hooks/useAnswers";
import { QuestionSlideType } from "../Interfaces";

const QuestionSlide = ({ question, questionNumber }: QuestionSlideType) => {
  const { answers } = useAnswers(question);

  return (
    <Box mx="auto">
      <QuestionTitle
        question={question.question}
        isMultiple={false}
        questionNumber={questionNumber}
      />

      <QuestionButtons
        answers={answers}
        correct_answers={question.correct_answers}
      />
    </Box>
  );
};

export default QuestionSlide;
