import { Paper } from "@mui/material";
import { QuestionDetailsType } from "../Interfaces";
import QuestionDetailsTitle from "./QuestionDetailsTitle";
import useGlobalTranslation from "../../../Hooks/useGlobalTranslation";

const QuestionDetails = ({ category, difficulty }: QuestionDetailsType) => {
  const { t } = useGlobalTranslation();

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
        <QuestionDetailsTitle text={category} title={t("Category")} />
        <QuestionDetailsTitle
          text={t(`${difficulty}`)}
          title={t("Difficulty")}
        />
      </Paper>
    </div>
  );
};

export default QuestionDetails;
