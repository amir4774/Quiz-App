import { create } from "zustand";

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
  token: string;
  examParams: ExamParamsType;
  result: ResultType;
  changeMode: () => void;
  changeUserName: (name: string) => void;
  changeExamParams: (params: ExamParamsType) => void;
  changeResult: (status: "correct" | "incorrect") => void;
  resetResult: () => void;
  changeToken: (newToken: string) => void;
}

const useStore = create<Store>((set, get) => ({
  mode: localStorage.getItem("mode") || "dark",
  userName: localStorage.getItem("userName") || "",
  token: localStorage.getItem("token") || "",
  examParams: { category: "", difficulty: "", limit: 0 },
  result: { correct: 0, incorrect: 0 },

  changeMode: () => {
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" }));
    localStorage.setItem("mode", get().mode);
  },

  changeUserName: (name: string) => {
    set(() => ({ userName: name }));
    localStorage.setItem("userName", name);
  },

  changeExamParams: (params: ExamParamsType) =>
    set(() => ({ examParams: params })),

  changeResult: (status: "correct" | "incorrect") =>
    set((state) => ({
      result: { ...state.result, [status]: state.result[status] + 1 },
    })),

  resetResult: () => set(() => ({ result: { correct: 0, incorrect: 0 } })),

  changeToken: (newToken: string) =>
    set(() => ({
      token: newToken,
    })),
}));

export default useStore;
