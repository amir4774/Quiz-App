export interface Params {
  category: string;
  difficulty: string;
  limit: number;
}

export interface StepperProps {
  activeStep: number;
  completed: boolean[];
  steps: string[];
}
