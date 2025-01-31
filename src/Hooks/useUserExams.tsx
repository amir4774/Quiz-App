import { useEffect, useState } from "react";
import InternalApi from "../Services/InternalApi";

interface UserExams {
  category: string;
  corrects: number;
  difficulty: string;
  id: number;
  question_numbers: number;
  rate: number;
}

const useUserExams = () => {
  const [examsData, setExamsData] = useState<UserExams[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await InternalApi().get("/user-exams/");
        setExamsData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    examsData,
    isLoading
  };
};

export default useUserExams;
