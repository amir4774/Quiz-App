import { useEffect, useState } from "react";
import useExamParams from "./useExamParams";
import Api from "../Services/Api";
import { apiKey } from "../Services/config";
import { QuestionsType } from "../Components/Exam/Interfaces";

const useQuize = () => {
  const [questions, setQuestions] = useState<QuestionsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { category, difficulty, limit } = useExamParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { data } = await Api().get(
          `/questions?apiKey=${apiKey}&&category=${category}&&limit=${limit}&&difficulty=${difficulty}`
        );
        setQuestions(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    questions,
    isLoading,
    isError,
  };
};

export default useQuize;
