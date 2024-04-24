import { Typography, useTheme } from "@mui/material";
import useResult from "../../Hooks/useResult";
import useStore from "../../Zustand/Store";

const ResultTitle = () => {
  const theme = useTheme();
  const { percent } = useResult();
  const {
    examParams: { category },
  } = useStore();

  return (
    <Typography
      fontWeight={600}
      fontSize={{ xs: 17, md: 20 }}
      textAlign="center"
      color={theme.palette.mode === "light" ? "text.secondary" : "text.primary"}
    >
      You Got {Math.trunc(percent)}% in the {category} Quiz!
    </Typography>
  );
};

export default ResultTitle;
