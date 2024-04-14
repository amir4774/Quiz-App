import { Grid, Skeleton } from "@mui/material";

const LoadingButton = () => {
  return (
    <Grid item xs={12} md={6}>
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{ bgcolor: "background.default", p: 5 }}
      />
    </Grid>
  );
};

export default LoadingButton;
