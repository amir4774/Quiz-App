export interface ExamParamsType {
  category: string;
  difficulty: string;
  limit: number;
}

export interface Store {
  mode: string;
  userName: string;
  examParams: ExamParamsType;
  changeMode: () => void;
  changeUserName: (name: string) => void;
  changeExamParams: (params: ExamParamsType) => void;
}
