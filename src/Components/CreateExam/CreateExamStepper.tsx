import { Step, StepLabel, Stepper } from "@mui/material";
import QontoStepIcon from "./QontoStepIcon";
import { QontoConnector } from "./styled";
import { StepperProps } from "./Interfaces";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const CreateExamStepper = ({ activeStep, completed, steps }: StepperProps) => {
  const { t } = useGlobalTranslation();

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
            {t(`${item}`)}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CreateExamStepper;
