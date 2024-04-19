import { Paper } from "@mui/material";
import { QuestionDetailsType } from "../Interfaces";
import QuestionDetailsTitle from "./QuestionDetailsTitle";

const QuestionDetails = ({ category, difficulty }: QuestionDetailsType) => {
  return (
    <div>
      <Paper
        variant="outlined"
        square={false}
        sx={{
          bgcolor: "background.default",
          color: "text.secondary",
          display: "flex",
          justifyContent: category ? "space-between" : "center",
          alignItems: "center",
          mt: 3,
          p: 2,
        }}
      >
        <QuestionDetailsTitle text={category} title="Category" />
        <QuestionDetailsTitle text={difficulty} title="Difficulty" />
      </Paper>
    </div>
  );
};

export default QuestionDetails;
