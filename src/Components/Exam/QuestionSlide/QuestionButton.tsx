import { Button } from "@mui/material";
import { QuestionButtonType } from "../Interfaces";
import { useMemo } from "react";

const QuestionButton = ({
  answer,
  reply,
  index,
  wrongAnswerValue,
  correctAnswerIndex,
  handleClick,
}: QuestionButtonType) => {
  const changeBackgroundColor = useMemo(() => {
    return index === correctAnswerIndex
      ? "#198754"
      : answer === wrongAnswerValue
      ? "#dc3545"
      : "inherit";
  }, [correctAnswerIndex, wrongAnswerValue]);

  const changeColor = useMemo(() => {
    return index === correctAnswerIndex || answer === wrongAnswerValue
      ? "#fff"
      : "#ddd";
  }, [correctAnswerIndex, wrongAnswerValue]);

  return (
    <Button
      variant="outlined"
      fullWidth
      value={answer}
      disabled={reply}
      onClick={handleClick}
      sx={{
        py: 2,
        transition: "transform 0.3s, background 1s",
        "&:hover": {
          transform: "scale(1.03)",
        },
        "&:disabled": {
          bgcolor: changeBackgroundColor,
          color: changeColor,
        },
      }}
    >
      {answer}
    </Button>
  );
};

export default QuestionButton;
