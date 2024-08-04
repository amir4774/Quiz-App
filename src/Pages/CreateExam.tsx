import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import CreateExamStepper from "../Components/CreateExam/CreateExamStepper";
import Category from "../Components/CreateExam/Cards/Category";
import DifficultyandLimit from "../Components/CreateExam/Cards/DifficultyandLimit";
import { FormInputs } from "../Components/CreateExam/Interfaces";
import useStore from "../Zustand/Store";

const steps = ["Category", "Difficulty", "Limit"];

const CreateExam = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean[]>([]);

  const { changeExamParams } = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>();

  const watchCategory = watch("category");
  const watchDifficulty = watch("difficulty");
  const watchLimit = watch("limit");

  const totalSteps = () => steps.length;

  const completedSteps = () => completed.filter((bool) => bool).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleComplete = (index: number) => {
    const newCompleted = completed;
    if (newCompleted[index]) {
      return;
    }
    newCompleted[index] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const onSubmit = (data: FormInputs) => {
    if (allStepsCompleted()) {
      changeExamParams(data);
      navigate("/exam");
    }
  };

  useEffect(() => {
    if (watchCategory) {
      handleComplete(0);
    }
    if (watchDifficulty) {
      handleComplete(1);
    }
    if (watchLimit) {
      handleComplete(2);
    }
  }, [watchCategory, watchDifficulty, watchLimit]);

  return (
    <div>
      <Box width="90%" mx="auto" position="sticky">
        <CreateExamStepper
          activeStep={activeStep}
          completed={completed}
          steps={steps}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Category register={register} errors={errors} />
          <DifficultyandLimit
            register={register}
            errors={errors}
            setValue={setValue}
          />

          <Button
            type="submit"
            variant="useful"
            sx={{ my: 3, width: { xs: "100%", md: "150px" }, float: "right" }}
          >
            Start Quiz
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default CreateExam;
