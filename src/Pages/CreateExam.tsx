import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import CreateExamStepper from "../Components/CreateExam/CreateExamStepper";
import Category from "../Components/CreateExam/Category";
import { FormInputs } from "../Components/CreateExam/Interfaces";

const steps = ["Category", "Difficulty", "Limit"];

const CreateExam = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean[]>([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const watchCategory = watch("category");

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
    console.log(data);
  };

  // useEffect(() => {
  //   if (examParams.category) {
  //     handleComplete(0);
  //   } else if (examParams.difficulty) {
  //     handleComplete(1);
  //   } else if (examParams.limit) {
  //     handleComplete(2);
  //   }
  // }, [examParams]);
  useEffect(() => {
    if (watchCategory) {
      handleComplete(0);
    }
  }, [watchCategory]);

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

          <Button type="submit" variant="useful" sx={{ my: 3 }}>
            Start Quize
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default CreateExam;
