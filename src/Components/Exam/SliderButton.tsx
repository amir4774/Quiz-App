import { Box, Button } from "@mui/material";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import { SliderButtonType } from "./Interfaces";

const SliderButton = ({ index, length }: SliderButtonType) => {
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
        disabled={index === 0}
      >
        Back
      </Button>
      <Button
        className="next-slide"
        sx={{ padding: "7px 25px" }}
        endIcon={<ArrowRightRounded />}
      >
        {index + 1 === length ? "Submit" : "Next"}
      </Button>
    </Box>
  );
};

export default SliderButton;
