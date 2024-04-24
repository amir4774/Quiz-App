export interface ExamParamsType {
  category: string;
  difficulty: string;
  limit: number;
}

export interface ResultType {
  correct: number;
  incorrect: number;
}

export interface Store {
  mode: string;
  userName: string;
  examParams: ExamParamsType;
  result: ResultType;
  changeMode: () => void;
  changeUserName: (name: string) => void;
  changeExamParams: (params: ExamParamsType) => void;
  changeResult: (status: "correct" | "incorrect") => void;
  resetResult: () => void;
}
