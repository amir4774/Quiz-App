import { create } from "zustand";

interface Store {
  mode: string;
  changeMode: () => void;
}

const useStore = create<Store>((set) => ({
  mode: "light",
  changeMode: () =>
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
}));

export default useStore;
