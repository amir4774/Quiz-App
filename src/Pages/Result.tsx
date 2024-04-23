import { Navigate } from "react-router-dom";
import useStore from "../Zustand/Store";

const Result = () => {
  const { result } = useStore();

  if (result.correct === 0 && result.incorrect === 0) {
    return <Navigate to="/exam" />;
  }

  return (
    <div>
      {result.incorrect} {result.correct}
    </div>
  );
};

export default Result;
