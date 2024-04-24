import { create } from "zustand";
import { Store, ExamParamsType } from "./Interfaces";

const useStore = create<Store>((set, get) => ({
  mode: sessionStorage.getItem("mode") || "dark",
  userName: sessionStorage.getItem("userName") || "",
  examParams: { category: "", difficulty: "", limit: 0 },
  result: { correct: 0, incorrect: 0 },

  changeMode: () => {
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" }));
    sessionStorage.setItem("mode", get().mode);
  },

  changeUserName: (name: string) => {
    set(() => ({ userName: name }));
    sessionStorage.setItem("userName", name);
  },

  changeExamParams: (params: ExamParamsType) =>
    set(() => ({ examParams: params })),

  changeResult: (status: "correct" | "incorrect") =>
    set((state) => ({
      result: { ...state.result, [status]: state.result[status] + 1 },
    })),

  resetResult: () => set(() => ({ result: { correct: 0, incorrect: 0 } })),
}));

export default useStore;
