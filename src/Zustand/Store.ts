import { create } from "zustand";
import { Store, ExamParamsType } from "./interfaces";

const useStore = create<Store>((set) => ({
  mode: "light",
  userName: sessionStorage.getItem("userName") || "",
  examParams: { category: "", difficulty: "", limit: 0 },

  changeMode: () =>
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),

  changeUserName: (name: string) => {
    set(() => ({ userName: name }));
    sessionStorage.setItem("userName", name);
  },

  changeExamParams: (params: ExamParamsType) =>
    set(() => ({ examParams: params })),
}));

export default useStore;
