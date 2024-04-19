import { useEffect, useState } from "react";
import { Box, FormGroup, Grid } from "@mui/material";
import QuestionTitle from "../QuestionTitle";
import MultipleButton from "./MultipleButton";
import useAnswers from "../../../Hooks/useAnswers";
import { MultipleSlideType } from "../Interfaces";

const MultipleSlide = ({ question, questionNumber }: MultipleSlideType) => {
  const [reply, setReply] = useState(false);
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { answers, correct_answers } = useAnswers(question);
  const numberOfSelected = checked.filter((item) => item).length;

  const handleChange = (selectedCheckBox: number) => {
    setChecked(
      checked.map((item, index) => (index === selectedCheckBox ? !item : item))
    );
  };

  useEffect(() => {
    if (
      numberOfSelected >=
      correct_answers.filter((item) => item === "true").length
    ) {
      setReply(true);
    }
  }, [checked]);

  return (
    <Box mx="auto">
      <QuestionTitle
        question={question.question}
        questionNumber={questionNumber}
        isMultiple={true}
      />

      <FormGroup>
        <Grid container spacing={2} px={2}>
          {answers.map((answer, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MultipleButton
                reply={reply}
                answer={answer}
                index={index}
                correct_answers={correct_answers}
                checked={checked}
                handleChange={handleChange}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </Box>
  );
};

export default MultipleSlide;
