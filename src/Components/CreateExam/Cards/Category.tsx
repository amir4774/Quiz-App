import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  useTheme,
} from "@mui/material";
import CardTitle from "./CardTitle";
import { CategoryProps } from "../Interfaces";
import CardError from "./CardError";

const categories = [
  "Linux",
  "DevOps",
  "Code",
  "Docker",
  "SQL",
  "CMS",
  "Random",
];

const Category = ({ register, errors }: CategoryProps) => {
  const theme = useTheme();

  return (
    <div>
      <Card
        sx={{
          mt: 5,
          bgcolor: "background.default",
        }}
      >
        <CardContent>
          <CardTitle text="Choose your favorite category" />

          <FormControl variant="standard" sx={{ width: "100%" }}>
            <RadioGroup>
              <Grid container>
                {categories.map((category) => (
                  <Grid item xs={6} md={3} key={category}>
                    <FormControlLabel
                      value={category}
                      label={category}
                      control={<Radio />}
                      {...register("category", {
                        required: "Please select a category",
                      })}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: "text.secondary",
                        },
                        "& .Mui-checked .MuiSvgIcon-root": {
                          color:
                            theme.palette.mode === "dark"
                              ? "#4af452"
                              : "#784af4",
                        },
                        "& .MuiTypography-root": {
                          color: "text.secondary",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
            
            <CardError text={errors.category?.message} />
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};

export default Category;
