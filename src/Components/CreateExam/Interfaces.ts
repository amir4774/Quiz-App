import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface FormInputs {
  category: string;
  difficulty: string;
  limit: number;
}

export interface StepperProps {
  activeStep: number;
  completed: boolean[];
  steps: string[];
}

export interface DifficultyProps {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  setValue: UseFormSetValue<FormInputs>;
}

export interface CategoryProps extends Omit<DifficultyProps, "setValue"> {}
