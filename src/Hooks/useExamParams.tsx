import useStore from "../Zustand/Store";

const useExamParams = () => {
  const { examParams } = useStore();

  return {
    category: examParams.category !== "Random" ? examParams.category : "",
    difficulty: examParams.difficulty !== "Random" ? examParams.difficulty : "",
    limit: examParams.limit,
  };
};

export default useExamParams;
