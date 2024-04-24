import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import useStore from "../Zustand/Store";
import Chart from "../Components/Result/Chart";
import ResultTitle from "../Components/Result/ResultTitle";
import PlayAgain from "../Components/Result/PlayAgain";

const Result = () => {
  const { result } = useStore();
  const { height, width } = useWindowSize();

  if (result.correct === 0 && result.incorrect === 0) {
    return <Navigate to="/exam" />;
  }

  return (
    <div>
      <Box width="95%" mx="auto">
        <Confetti
          width={width}
          height={height}
          numberOfPieces={850}
          confettiSource={{ x: 0, y: 0, w: width, h: 0 }}
          recycle={false}
        />
        <ResultTitle />
        <Chart />
        <PlayAgain />
      </Box>
    </div>
  );
};

export default Result;
