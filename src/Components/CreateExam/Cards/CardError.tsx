import { FormHelperText } from "@mui/material";
import useGlobalTranslation from "../../../Hooks/useGlobalTranslation";

const CardError = ({ text }: { text?: string }) => {
  const { t } = useGlobalTranslation();

  return (
    <FormHelperText
      error
      sx={{ fontWeight: 600, fontSize: 15, textAlign: "center" }}
    >
      {text && t(`${text}`)}
    </FormHelperText>
  );
};

export default CardError;
