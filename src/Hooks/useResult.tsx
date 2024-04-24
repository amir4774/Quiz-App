import { useMemo } from "react";
import useStore from "../Zustand/Store";

const useResult = () => {
  const {
    result,
    examParams: { limit },
  } = useStore();

  const ommited = useMemo(() => limit - result.correct - result.incorrect, []);
  const percent = useMemo(() => (result.correct / limit) * 100, []);

  return { ommited, percent };
};

export default useResult;
