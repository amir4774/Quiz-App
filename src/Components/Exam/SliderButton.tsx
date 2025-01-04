import { useMemo, useState } from "react";
import { Box, Button } from "@mui/material";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import Submit from "./Submit";
import useStore from "../../Zustand/Store";
import { SliderButtonType } from "./Interfaces";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const SliderButton = ({ questionNumber }: SliderButtonType) => {
  const [openSubmit, setOpenSubmit] = useState(false);
  const { examParams } = useStore();
  const isLastQuestion = useMemo(
    () => questionNumber === examParams.limit,
    [questionNumber]
  );
  const { t } = useGlobalTranslation();

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
          {t("Back")}
        </Button>

        {isLastQuestion ? (
          <Button
            sx={{ padding: "7px 25px" }}
            endIcon={<ArrowRightRounded />}
            onClick={handleClick}
          >
            {t("Submit")}
          </Button>
        ) : (
          <Button
            className="next-slide"
            sx={{ padding: "7px 25px" }}
            endIcon={<ArrowRightRounded />}
          >
            {t("Next")}
          </Button>
        )}
      </Box>

      <Submit open={openSubmit} setOpen={setOpenSubmit} />
    </div>
  );
};

export default SliderButton;
