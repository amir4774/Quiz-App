import { FieldErrors, UseFormRegister } from "react-hook-form";

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

export interface CategoryProps {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
}
