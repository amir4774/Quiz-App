import { Stack, Typography, useTheme } from "@mui/material";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";
import { UserExamsResultProps } from "./Interfaces";

const UserExamsResult = ({
  question_numbers,
  corrects,
}: UserExamsResultProps) => {
  const { t } = useGlobalTranslation();
  const theme = useTheme();

  return (
    <>
      <Stack my={1} direction="row" justifyContent="space-between" flexWrap="wrap">
        <Typography
          color={theme.palette.mode === "light" ? "#666" : "text.secondary"}
        >
          {t("Question Numbers")}: {question_numbers}
        </Typography>

        <Typography
          color={theme.palette.mode === "light" ? "#198754" : "#76ff03"}
        >
          {t("Correct")}: {corrects}
        </Typography>
      </Stack>

      <Typography
        color={theme.palette.mode === "light" ? "#dc3545" : "#f73378"}
      >
        {t("Incorrect or Omitted")}: {question_numbers - corrects}
      </Typography>
    </>
  );
};

export default UserExamsResult;
