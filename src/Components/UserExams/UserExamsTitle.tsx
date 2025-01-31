import { Stack, Typography, useTheme } from "@mui/material";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";
import { UserExamsTitleProps } from "./Interfaces";
import UserExamsRate from "./UserExamsRate";

const UserExamsTitle = ({
  difficulty,
  category,
  rate,
}: UserExamsTitleProps) => {
  const { t } = useGlobalTranslation();
  const theme = useTheme();

  return (
    <>
      <Typography
        fontWeight={600}
        fontSize={20}
        color={
          theme.palette.mode === "light" ? "text.secondary" : "text.primary"
        }
      >
        {t(category)}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="text.secondary">
          {t("Difficulty")}: {t(difficulty)}
        </Typography>

        <UserExamsRate rate={rate} />
      </Stack>
    </>
  );
};

export default UserExamsTitle;
