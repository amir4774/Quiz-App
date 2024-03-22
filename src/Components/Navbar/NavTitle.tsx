import { Typography } from "@mui/material";

interface NavTitleProps {
  text: string;
  color?: string;
}

const NavTitle = ({ color, text }: NavTitleProps) => {
  return (
    <Typography variant="h6" fontWeight={600} color={color ?? "text.primary"}>
      {text}
    </Typography>
  );
};

export default NavTitle;
