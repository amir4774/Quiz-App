import { Box, Button } from "@mui/material";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import useStore from "../../Zustand/Store";
import { SliderButtonType } from "./Interfaces";

const SliderButton = ({ questionNumber }: SliderButtonType) => {
  const { examParams } = useStore();

  return (
    <Box
      my={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        className="prev-slide"
        sx={{ padding: "7px 25px" }}
        startIcon={<ArrowLeftRounded />}
        disabled={questionNumber === 1}
      >
        Back
      </Button>
      <Button
        className="next-slide"
        sx={{ padding: "7px 25px" }}
        endIcon={<ArrowRightRounded />}
      >
        {questionNumber === examParams.limit ? "Submit" : "Next"}
      </Button>
    </Box>
  );
};

export default SliderButton;
