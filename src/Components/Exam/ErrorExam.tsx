import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { Box, Button, Stack, Typography } from "@mui/material";
import errorLogo from "../../assets/Error.png";

gsap.registerPlugin(useGSAP, MotionPathPlugin);

const ErrorExam = () => {
  useGSAP(() => {
    const scales = [{ scale: 1.3 }, { scale: 0.5 }, { scale: 1 }];

    gsap.to("#text", {
      motionPath: {
        path: scales,
        curviness: 1,
      },
      duration: 3,
      ease: "none",
      repeat: -1,
      repeatDelay: 1.5,
    });
  });

  return (
    <div>
      <Stack
        width="90%"
        mx="auto"
        mt={{ xs: -8, md: -3 }}
        direction={{ xs: "column", md: "row-reverse" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box
          component="img"
          src={errorLogo}
          width={{ xs: "100%", md: "500px" }}
        />

        <Box mt={{ xs: -3, md: 0 }}>
          <Typography
            fontWeight={600}
            fontSize={50}
            color="text.primary"
            textAlign={{ xs: "center", md: "left" }}
            id="text"
          >
            Oops...
          </Typography>

          <Typography color="#828282" my={3}>
            Sorry! Something went wrong!
          </Typography>

          <Link to="/create-exam">
            <Button fullWidth>Back</Button>
          </Link>
        </Box>
      </Stack>
    </div>
  );
};

export default ErrorExam;
