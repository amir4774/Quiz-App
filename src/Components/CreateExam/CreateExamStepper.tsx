import { Step, StepLabel, Stepper } from "@mui/material";
import QontoStepIcon from "./QontoStepIcon";
import { QontoConnector } from "./styled";
import { StepperProps } from "./Interfaces";

const CreateExamStepper = ({ activeStep, completed, steps }: StepperProps) => {
  return (
    <Stepper
      nonLinear
      alternativeLabel
      connector={<QontoConnector />}
      activeStep={activeStep}
    >
      {steps.map((item, index) => (
        <Step key={item} completed={completed[index]}>
          <StepLabel StepIconComponent={QontoStepIcon} color="inherit">
            {item}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CreateExamStepper;
