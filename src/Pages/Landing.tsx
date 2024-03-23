import { Box, Button, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LandingTexts from "../Components/Landing/LandingTexts";
import logo from "../assets/Landing.png";

const Landing = () => {
  return (
    <div>
      <Stack
        width={{ sm: "90%", md: "60%" }}
        px={{ md: 0, xs: 3 }}
        mx="auto"
        alignItems="center"
        direction={{ md: "row", xs: "column-reverse" }}
      >
        <Box width="100%" mt={3} mb={5}>
          <LandingTexts />

          <Button variant="useful">Start solving</Button>
          <Button
            startIcon={<ArrowDropDownIcon />}
            sx={{ ml: 2, p: "8px 15px" }}
          >
            know more
          </Button>
        </Box>

        <Box component="img" src={logo} width="100%" />
      </Stack>
    </div>
  );
};

export default Landing;
