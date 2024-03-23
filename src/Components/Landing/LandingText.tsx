import { Typography } from "@mui/material";

const LandingText = ({ text }: { text: string }) => {
  return (
    <Typography variant="h4" fontWeight={600} color="text.secondary">
      {text}
    </Typography>
  );
};

export default LandingText;
