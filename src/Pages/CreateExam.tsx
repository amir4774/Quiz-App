import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Category from "../Components/CreateExam/Category";
import { Params } from "../Components/CreateExam/Interfaces";
import CreateExamStepper from "../Components/CreateExam/CreateExamStepper";

const steps = ["Category", "Difficulty", "Limit"];

const CreateExam = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean[]>([]);
  const [examParams, setExamParams] = useState<Params>({
    category: "",
    difficulty: "",
    limit: 0,
  });

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return completed.filter((bool) => bool).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    if (completedSteps() === totalSteps()) {
      navigate("/");
      return true;
    }

    return false;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleComplete = (test: number) => {
    const newCompleted = completed;
    if (newCompleted[test]) {
      return;
    }
    newCompleted[test] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  useEffect(() => {
    if (examParams.category) {
      handleComplete(0);
    } else if (examParams.difficulty) {
      handleComplete(1);
    } else if (examParams.limit) {
      handleComplete(2);
    }
  }, [examParams]);

  return (
    <div>
      <Box width="90%" mx="auto" position="sticky">
        <CreateExamStepper
          activeStep={activeStep}
          completed={completed}
          steps={steps}
        />

        <div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <>{examParams.category}</>
          </Box>
        </div>

        <Category setExamParams={setExamParams} />
      </Box>
    </div>
  );
};

export default CreateExam;
