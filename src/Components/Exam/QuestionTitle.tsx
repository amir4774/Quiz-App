import { Avatar, Stack, Typography } from "@mui/material";
import { QuestionTitleType } from "./Interfaces";

const QuestionTitle = ({
  question,
  questionNumber,
  isMultiple,
}: QuestionTitleType) => {
  return (
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
        {question}
        {isMultiple && (
          <Typography component="span" variant="caption" ml={1}>
            (Choose more than one option)
          </Typography>
        )}
      </Typography>
    </Stack>
  );
};

export default QuestionTitle;
