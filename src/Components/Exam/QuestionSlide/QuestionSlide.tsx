import { useMemo } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import QuestionButtons from "./QuestionButtons";
import { QuestionSlideType } from "../Interfaces";

const QuestionSlide = ({ question, questionNumber }: QuestionSlideType) => {
  const answers = useMemo(() => {
    return Object.values(question.answers).filter((answer) => answer);
  }, [question]);

  return (
    <Box mx="auto">
      <Stack direction="row" alignItems="center" my={5}>
        <Avatar
          sx={{
            bgcolor: "background.default",
            color: "#fff",
            width: 35,
            height: 35,
            mr: 1,
          }}
        >
          {questionNumber}
        </Avatar>

        <Typography
          color="text.secondary"
          fontSize={{ xs: 15, md: 20 }}
          textAlign="justify"
        >
          {question.question}
        </Typography>
      </Stack>

      <QuestionButtons
        answers={answers}
        correct_answers={question.correct_answers}
      />
    </Box>
  );
};

export default QuestionSlide;
