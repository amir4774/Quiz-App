import { Typography, useTheme } from "@mui/material";
import useResult from "../../Hooks/useResult";
import useStore from "../../Zustand/Store";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const ResultTitle = () => {
  const theme = useTheme();
  const { percent } = useResult();
  const {
    examParams: { category },
  } = useStore();
  const { t, i18n } = useGlobalTranslation();

  return (
    <Typography
      fontWeight={600}
      fontSize={{ xs: 17, md: 20 }}
      textAlign="center"
      color={theme.palette.mode === "light" ? "text.secondary" : "text.primary"}
    >
      {i18n.language === "en" ? (
        <>
          You Got {Math.trunc(percent)}% in the {category} Quiz!
        </>
      ) : (
        <>
          شما در آزمون {t(`${category}`)}، {Math.trunc(percent)}% امتیاز کسب
          کردید
        </>
      )}
    </Typography>
  );
};

export default ResultTitle;
