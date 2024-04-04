import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { CategoryProps } from "./Interfaces";

const categories = [
  "Linux",
  "DevOps",
  "Networking",
  "Cloud",
  "Code",
  "Kubernetes",
  "Docker",
  "SQL",
  "CMS",
  "Random",
];

const Category = ({ register, errors }: CategoryProps) => {
  return (
    <div>
      <Card
        sx={{
          mt: 5,
          bgcolor: "background.default",
        }}
      >
        <CardContent>
          <Typography
            textAlign="center"
            color="text.secondary"
            fontWeight={600}
            fontSize={20}
            mb={3}
          >
            Choose your favorite category
          </Typography>

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
                        "& .MuiTypography-root": {
                          color: "text.secondary",
                        },
                        "&.Mui-checked .MuiTypography-root": {
                          color: "primary.main",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
            <FormHelperText
              error
              sx={{ fontWeight: 600, fontSize: 15, textAlign: "center" }}
            >
              {errors.category?.message}
            </FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};

export default Category;
