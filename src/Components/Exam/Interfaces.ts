import { MouseEvent } from "react";

export interface QuestionsType {
  id: number;
  question: string;
  multiple_correct_answers: string;
  answers: object;
  correct_answers: object;
  category: string;
}

export interface QuestionSlideType {
  questionNumber: number;
  question: QuestionsType;
}

export interface SliderButtonType extends Omit<QuestionSlideType, "question"> {}

export interface QuestionButtonsType {
  correct_answers: object;
  answers: string[];
}

export interface QuestionButtonType {
  answer: string;
  wrongAnswerValue: string;
  index: number;
  correctAnswerIndex: number;
  reply: boolean;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
