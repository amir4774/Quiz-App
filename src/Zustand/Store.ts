import { create } from "zustand";

interface Store {
  mode: string;
  userName: string;
  changeMode: () => void;
  changeUserName: (name: string) => void;
}

const useStore = create<Store>((set) => ({
  mode: "light",
  userName: sessionStorage.getItem("userName") || "",
  changeMode: () =>
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
  changeUserName: (name: string) => {
    set(() => ({ userName: name }));
    sessionStorage.setItem("userName", name);
  },
}));

export default useStore;
