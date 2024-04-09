import { FormHelperText } from "@mui/material";

const CardError = ({ text }: { text?: string }) => {
  return (
    <FormHelperText
      error
      sx={{ fontWeight: 600, fontSize: 15, textAlign: "center" }}
    >
      {text}
    </FormHelperText>
  );
};

export default CardError;
