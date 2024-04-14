export interface QuestionsType {
  id: number;
  question: string;
  multiple_correct_answers: string;
  answers: object;
  correct_answers: object;
  category: string;
}

export interface QuestionSlideType {
  index: number;
  question: QuestionsType;
}

export interface SliderButtonType {
  index: number;
  length: number;
}
