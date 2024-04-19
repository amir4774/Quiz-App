import { useMemo } from "react";
import { QuestionsType } from "../Components/Exam/Interfaces";

const useAnswers = (question: QuestionsType) => {
  const answers = useMemo(() => {
    return Object.values(question.answers).filter((answer) => answer);
  }, [question]);

  const correct_answers = useMemo(() => {
    return Object.values(question.correct_answers);
  }, [question]);

  return { answers, correct_answers };
};

export default useAnswers;
