import { useEffect, useState } from "react";

const useGetColors = (rate: number) => {
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    if (rate < 40) {
      setBorderColor("#f44336");
    } else if (rate < 70) {
      setBorderColor("#ffeb3b");
    } else {
      setBorderColor("#4caf50");
    }
  }, [rate]);

  return {
    borderColor,
  };
};

export default useGetColors;
