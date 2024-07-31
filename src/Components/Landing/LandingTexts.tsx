import { Typography } from "@mui/material";
import LandingText from "./LandingText";

const LandingTexts = () => {
  return (
    <div>
      <LandingText text="Learn" />
      <LandingText text="new concepts" />
      <LandingText text="for each question" />

      <Typography my={3} pl={2} borderLeft="5px solid #FCC822" color="#828282">
        We help you prepare for exams and quizzes
      </Typography>
    </div>
  );
};

export default LandingTexts;
