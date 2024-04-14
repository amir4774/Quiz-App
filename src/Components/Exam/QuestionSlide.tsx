import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { QuestionSlideType } from "./Interfaces";

const QuestionSlide = ({ question, index }: QuestionSlideType) => {
  return (
    <Box mx="auto">
      <Stack direction="row" alignItems="center" my={5}>
        <Avatar
          sx={{
            bgcolor: "background.default",
            color: "#fff",
            width: 35,
            height: 35,
            mr: 1,
          }}
        >
          {index + 1}
        </Avatar>

        <Typography
          color="text.secondary"
          fontSize={{ xs: 15, md: 20 }}
          textAlign="justify"
        >
          {question.question}
        </Typography>
      </Stack>

      <Grid container spacing={2} px={2}>
        {Object.values(question.answers).map(
          (answer, index) =>
            answer && (
              <Grid item xs={12} md={6} key={index}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    py: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  {answer}
                </Button>
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};

export default QuestionSlide;
