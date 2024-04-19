import { useCallback } from "react";
import { Button, Checkbox, FormControlLabel, useTheme } from "@mui/material";
import { MultipleButtonType } from "../Interfaces";

const MultipleButton = ({
  reply,
  answer,
  index,
  correct_answers,
  checked,
  handleChange,
}: MultipleButtonType) => {
  const theme = useTheme();
  const changeBackgroundColor = useCallback(
    (index: number) => {
      return correct_answers[index] === "true"
        ? "#198754"
        : checked[index]
        ? "#dc3545"
        : "inherit";
    },
    [checked]
  );

  return (
    <Button
      variant="outlined"
      fullWidth
      disabled={reply}
      sx={{
        transition: "transform 0.3s, background 1s",
        cursor: "default",
        "&:hover": {
          transform: "scale(1.03)",
        },
        "&:disabled": {
          bgcolor: changeBackgroundColor(index),
        },
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => handleChange(index)}
            checked={checked[index]}
          />
        }
        label={answer}
        sx={{
          color: reply
            ? "#ddd"
            : theme.palette.mode === "light"
            ? "text.primary"
            : "text.secondary",
        }}
      />
    </Button>
  );
};

export default MultipleButton;
