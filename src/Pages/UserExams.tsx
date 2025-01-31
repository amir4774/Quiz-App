import { Avatar, Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import useUserExams from "../Hooks/useUserExams";
import useGlobalTranslation from "../Hooks/useGlobalTranslation";
import LoadingUserExams from "../Components/UserExams/LoadingUserExams";

const UserExams = () => {
  const { examsData, isLoading } = useUserExams();
  const { t } = useGlobalTranslation();
  const theme = useTheme();

  if (isLoading) return <LoadingUserExams />;

  return (
    <section>
      <Box width="90%" mx="auto">
        <Grid container spacing={5}>
          {examsData.map((exam) => (
            <Grid item xs={12} md={6} key={exam.id}>
              <Box borderRadius="10px" p={2} bgcolor="background.default">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    fontWeight={600}
                    fontSize={20}
                    color={
                      theme.palette.mode === "light"
                        ? "text.secondary"
                        : "text.primary"
                    }
                  >
                    {t(exam.category)}
                  </Typography>
                  <Avatar
                    sx={{
                      bgcolor: "background.default",
                      color: "text.secondary",
                      width: 35,
                      height: 35,
                      mr: 1,
                    }}
                  >
                    {exam.rate}%
                  </Avatar>
                </Stack>

                <Typography color="text.secondary" my={2}>
                  <strong>{t("Difficulty")}:</strong> {t(exam.difficulty)}
                </Typography>

                <Typography
                  color="text.secondary"
                  fontWeight={600}
                  gutterBottom
                >
                  {t("Details")}
                </Typography>

                <Stack direction="row" justifyContent="space-around" flexWrap="wrap">
                  <Typography
                    color={
                      theme.palette.mode === "light" ? "#666" : "text.secondary"
                    }
                  >
                    {t("Question Numbers")}: {exam.question_numbers}
                  </Typography>

                  <Typography
                    color={
                      theme.palette.mode === "light" ? "#198754" : "#76ff03"
                    }
                  >
                    {t("Correct")}: {exam.corrects}
                  </Typography>
                  
                  <Typography
                    color={
                      theme.palette.mode === "light" ? "#dc3545" : "#f73378"
                    }
                  >
                    {t("Incorrect or Omitted")}: {exam.question_numbers - exam.corrects}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default UserExams;
