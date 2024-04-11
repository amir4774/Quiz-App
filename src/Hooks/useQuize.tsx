import { useEffect, useState } from "react";
import useExamParams from "./useExamParams";
import Api from "../Services/Api";
import { apiKey } from "../Services/config";

const useQuize = () => {
  const [questions, setQuestions] = useState([{ question: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const { category, difficulty, limit } = useExamParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const { data } = await Api().get(
        `/questions?apiKey=${apiKey}&&category=${category}&&limit=${limit}&&difficulty=${difficulty}`
      );
      setQuestions(data);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    questions,
    isLoading,
  };
};

export default useQuize;
