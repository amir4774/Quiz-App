import { Box, Grid } from "@mui/material";
import LoadingUserExams from "../Components/UserExams/LoadingUserExams";
import UserExamsTitle from "../Components/UserExams/UserExamsTitle";
import useUserExams from "../Hooks/useUserExams";
import UserExamsMoreDetails from "../Components/UserExams/UserExamsMoreDetails";
import LearnMore from "../Components/UserExams/LearnMore.tsx";

const UserExams = () => {
  const { examsData, isLoading } = useUserExams();

  if (isLoading) return <LoadingUserExams />;

  return (
    <section>
      <Box width="90%" mx="auto" mb={2}>
        <Grid container spacing={3} alignSelf={'stretch'}>
          {examsData.map((exam) => (
            <Grid item xs={12} md={4} key={exam.id}>
              <Box borderRadius="10px" p={2} bgcolor="background.default">
                <UserExamsTitle
                  difficulty={exam.difficulty}
                  category={exam.category}
                  rate={exam.rate}
                />

                <UserExamsMoreDetails
                  corrects={exam.corrects}
                  question_numbers={exam.question_numbers}
                />

                  {exam.category !== "Random" && <LearnMore category={exam.category} />}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default UserExams;
