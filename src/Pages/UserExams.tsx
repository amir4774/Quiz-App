import { useEffect } from "react";
import internalApi from "../Services/InternalApi";

const UserExams = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await internalApi().get("/user-exams");
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return <div>aa</div>;
};

export default UserExams;
