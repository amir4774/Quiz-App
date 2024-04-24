import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import useStore from "../Zustand/Store";
import Chart from "../Components/Result/Chart";
import ResultTitle from "../Components/Result/ResultTitle";
import PlayAgain from "../Components/Result/PlayAgain";

const Result = () => {
  const { result } = useStore();

  if (result.correct === 0 && result.incorrect === 0) {
    return <Navigate to="/exam" />;
  }

  return (
    <div>
      <Box width="90%" mx="auto">
        <ResultTitle />
        <Chart />
        <PlayAgain />
      </Box>
    </div>
  );
};

export default Result;
