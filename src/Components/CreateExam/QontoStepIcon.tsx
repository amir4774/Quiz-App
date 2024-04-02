import { StepIconProps } from "@mui/material";
import { QontoStepIconRoot } from "./styled";
import { Check } from "@mui/icons-material";

const QontoStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
};

export default QontoStepIcon;
