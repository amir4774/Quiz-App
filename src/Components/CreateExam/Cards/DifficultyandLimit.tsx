import { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import CardTitle from "./CardTitle";
import { DifficultyProps } from "../Interfaces";
import CardError from "./CardError";

const difficulties = ["Easy", "Medium", "Hard", "Random"];

const DifficultyandLimit = ({
  register,
  errors,
  setValue,
}: DifficultyProps) => {
  const [difficultyValue, setDifficultyValue] = useState("");
  const theme = useTheme();

  const handleChangeDifficulty = (e: SelectChangeEvent) => {
    setDifficultyValue(e.target.value);
    setValue("difficulty", e.target.value);
  };

  return (
    <div>
      <Card
        sx={{
          mt: 5,
          bgcolor: "background.default",
        }}
      >
        <CardContent>
          <CardTitle text="Choose Difficulty and Limit" />

          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: "15px", md: "0" }}
          >
            <Stack direction="column" width="100%">
              <FormControl fullWidth>
                <InputLabel id="select-difficulty">Difficulty</InputLabel>
                <Select
                  labelId="select-difficulty"
                  label="Difficulty"
                  sx={{
                    color: "text.secondary",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "text.secondary",
                    },
                  }}
                  value={difficultyValue}
                  {...register("difficulty", {
                    required: "Please select an option",
                  })}
                  onChange={handleChangeDifficulty}
                >
                  {difficulties.map((difficulty) => (
                    <MenuItem
                      value={difficulty}
                      key={difficulty}
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      {difficulty}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <CardError text={errors.difficulty?.message} />
            </Stack>

            <Stack direction="column" width="100%">
              <FormControl fullWidth>
                <TextField
                  label="Limit"
                  type="number"
                  InputProps={{
                    style: {
                      color: theme.palette.text.secondary,
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: theme.palette.text.secondary,
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "text.secondary",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "text.secondary",
                      },
                    },
                  }}
                  {...register("limit", {
                    required: "Limit is required",
                    valueAsNumber: true,
                    max: {
                      value: 20,
                      message: "Please enter a value equal to or below 20",
                    },
                    min: {
                      value: 5,
                      message: "Please enter a value equal to or above 5",
                    },
                  })}
                />
              </FormControl>

              <CardError text={errors.limit?.message} />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default DifficultyandLimit;
