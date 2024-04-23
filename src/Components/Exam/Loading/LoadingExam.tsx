import { Box, Grid, Skeleton, Stack } from "@mui/material";
import LoadingButton from "./LoadingButton";

const LoadingExam = () => {
  return (
    <Box component="div">
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          bgcolor: "background.default",
          height: "100px",
          mt: 3,
          mx: "auto",
        }}
      />

      <Stack display="flex" alignItems="center" direction="row" my={2}>
        <Skeleton
          animation="wave"
          variant="circular"
          width={35}
          height={35}
          sx={{ bgcolor: "background.default" }}
        />

        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            bgcolor: "background.default",
            width: "90%",
            height: "70px",
            ml: 2,
          }}
        />
      </Stack>

      <Grid container spacing={3}>
        <LoadingButton />
        <LoadingButton />
        <LoadingButton />
        <LoadingButton />
      </Grid>
    </Box>
  );
};

export default LoadingExam;
