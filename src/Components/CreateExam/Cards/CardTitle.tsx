import { useRef } from "react";
import { Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(useGSAP, TextPlugin, Observer);

const CardTitle = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      duration: 1,
      text,
      ease: "none",
    });

    const textTransform = (text: string) => {
      gsap.to(textRef.current, {
        duration: 0.7,
        text,
        ease: "power1.inOut",
      });
    };

    Observer.create({
      target: textRef.current,
      onHover: () => {
        textTransform(text.toUpperCase());
      },

      onHoverEnd: () => {
        textTransform(text.normalize());
      },
    });
  }, [text]);

  return (
    <Typography
      textAlign="center"
      color="text.secondary"
      fontWeight={600}
      fontSize={20}
      mb={3}
      ref={textRef}
    />
  );
};

export default CardTitle;
