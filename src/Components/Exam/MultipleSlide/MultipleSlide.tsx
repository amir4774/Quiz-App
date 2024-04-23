import { useEffect, useState } from "react";
import { Box, FormGroup, Grid } from "@mui/material";
import QuestionTitle from "../QuestionTitle";
import MultipleButton from "./MultipleButton";
import useStore from "../../../Zustand/Store";
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
  const { changeResult } = useStore();
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
      // All Button Disabled
      setReply(true);

      // Check is it correct?
      let flag = true;
      // convert correct_answers from string "true" to boolean true
      const realTrue = correct_answers.map((item) =>
        item === "true" ? true : false
      );

      for (let i = 0; i < checked.length; i++) {
        if (realTrue[i] !== checked[i]) {
          changeResult("incorrect");
          flag = false;
          break;
        }
      }

      if (flag) {
        changeResult("correct");
      }
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
