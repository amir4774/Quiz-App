import { Typography } from "@mui/material";
import { QuestionDetailsTitleType } from "../Interfaces";

const QuestionDetailsTitle = ({ text, title }: QuestionDetailsTitleType) => {
  return (
    <>
      {text && (
        <Typography>
          <Typography component="span" fontWeight={600}>
            {title}:&nbsp;
          </Typography>
          {text}
        </Typography>
      )}
    </>
  );
};

export default QuestionDetailsTitle;
