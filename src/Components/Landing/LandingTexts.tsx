import { Typography } from "@mui/material";
import LandingText from "./LandingText";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const LandingTexts = () => {
  const { t } = useGlobalTranslation();

  return (
    <div>
      <LandingText text={t("Learn")} />
      <LandingText text={t("new concepts")} />
      <LandingText text={t("for each question")} />

      <Typography my={3} pl={2} borderLeft="5px solid #FCC822" color="#828282">
        {t("We help you prepare for exams and quizzes")}
      </Typography>
    </div>
  );
};

export default LandingTexts;
