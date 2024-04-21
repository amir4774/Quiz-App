import { useMemo, useState } from "react";
import { Box, Button } from "@mui/material";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import Submit from "./Submit";
import useStore from "../../Zustand/Store";
import { SliderButtonType } from "./Interfaces";

const SliderButton = ({ questionNumber }: SliderButtonType) => {
  const [openSubmit, setOpenSubmit] = useState(false);
  const { examParams } = useStore();
  const isLastQuestion = useMemo(
    () => questionNumber === examParams.limit,
    [questionNumber]
  );

  const handleClick = () => setOpenSubmit(true);

  return (
    <div>
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

        {isLastQuestion ? (
          <Button
            sx={{ padding: "7px 25px" }}
            endIcon={<ArrowRightRounded />}
            onClick={handleClick}
          >
            Submit
          </Button>
        ) : (
          <Button
            className="next-slide"
            sx={{ padding: "7px 25px" }}
            endIcon={<ArrowRightRounded />}
          >
            Next
          </Button>
        )}
      </Box>

      <Submit open={openSubmit} setOpen={setOpenSubmit} />
    </div>
  );
};

export default SliderButton;
