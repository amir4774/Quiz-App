import { Typography } from "@mui/material";

const QuizGradTitle = () => {
  return (
    <Typography fontSize={40} fontWeight={700} color="text.primary">
      <Typography
        component="span"
        color="text.secondary"
        fontSize={40}
        fontWeight={700}
        className="span-text"
      >
        Quiz
      </Typography>
      Grad
    </Typography>
  );
};

export default QuizGradTitle;
