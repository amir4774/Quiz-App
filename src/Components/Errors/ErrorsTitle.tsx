import { Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, MotionPathPlugin);

const ErrorsTitle = () => {
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
    <Typography
      fontWeight={600}
      fontSize={50}
      color="text.primary"
      textAlign={{ xs: "center", md: "left" }}
      id="text"
    >
      Oops...
    </Typography>
  );
};

export default ErrorsTitle;
