import { useState } from "react";
import ExpandCircleDownSharpIcon from "@mui/icons-material/ExpandCircleDownSharp";
import { Box, Button, Collapse } from "@mui/material";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";
import UserExamsResult from "./UserExamsResult";
import { UserExamsResultProps } from "./Interfaces";

const UserExamsMoreDetails = ({
  corrects,
  question_numbers,
}: UserExamsResultProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useGlobalTranslation();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Button
        endIcon={
          open ? (
            <ExpandCircleDownSharpIcon sx={{ rotate: "180deg" }} />
          ) : (
            <ExpandCircleDownSharpIcon />
          )
        }
        onClick={handleClick}
        sx={{ color: "text.secondary" }}
      >
        {t("More Details")}
      </Button>
      <Collapse in={open} timeout="auto">
        <UserExamsResult
          corrects={corrects}
          question_numbers={question_numbers}
        />
      </Collapse>
    </Box>
  );
};

export default UserExamsMoreDetails;
