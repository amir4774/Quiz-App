import { Typography } from "@mui/material";

const CardTitle = ({ text }: { text: string }) => {
  return (
    <Typography
      textAlign="center"
      color="text.secondary"
      fontWeight={600}
      fontSize={20}
      mb={3}
    >
      {text}
    </Typography>
  );
};

export default CardTitle;
