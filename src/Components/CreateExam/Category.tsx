import { Dispatch, SetStateAction, MouseEvent } from "react";
import { Box, Button } from "@mui/material";
import { Params } from "./Interfaces";

const Category = ({
  setExamParams,
}: {
  setExamParams: Dispatch<SetStateAction<Params>>;
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setExamParams((prev) => ({ ...prev, category: e.currentTarget.value }));
  };

  return (
    <div>
      <Box mt={5}>
        <Button variant="outlined" onClick={handleClick} value="Linux">
          Linux
        </Button>
        <Button variant="outlined" onClick={handleClick} value="JS">
          JS
        </Button>
        <Button variant="outlined" onClick={handleClick} value="TS">
          TS
        </Button>
        <Button variant="outlined" onClick={handleClick} value="Python">
          Python
        </Button>
      </Box>
    </div>
  );
};

export default Category;
