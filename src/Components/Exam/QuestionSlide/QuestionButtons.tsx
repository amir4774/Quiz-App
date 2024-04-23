import { MouseEvent, useState } from "react";
import { Grid } from "@mui/material";
import QuestionButton from "./QuestionButton";
import useStore from "../../../Zustand/Store";
import { QuestionButtonsType } from "../Interfaces";

const QuestionButtons = ({ correct_answers, answers }: QuestionButtonsType) => {
  const [reply, setReply] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [wrongAnswerValue, setWrongAnswerValue] = useState("");
  const { changeResult } = useStore();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedButton = e.currentTarget;

    // Find correct index
    const correctIndex = Object.values(correct_answers).findIndex(
      (item) => item === "true"
    );

    setCorrectAnswerIndex(correctIndex);

    // Check is it correct?
    if (answers[correctIndex] !== selectedButton.value) {
      setWrongAnswerValue(selectedButton.value);
      changeResult("incorrect");
    } else {
      changeResult("correct");
    }

    // All Button Disabled
    setReply(true);
  };

  return (
    <Grid container spacing={2} px={2}>
      {answers.map((answer, index) => (
        <Grid item xs={12} md={6} key={index}>
          <QuestionButton
            answer={answer}
            reply={reply}
            index={index}
            correctAnswerIndex={correctAnswerIndex}
            wrongAnswerValue={wrongAnswerValue}
            handleClick={handleClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default QuestionButtons;
