import { Typography } from "@mui/material";
import "./NavbarStyle.css";

interface NavTitleProps {
  text: string;
  spanText: string;
}

const NavTitle = ({ spanText, text }: NavTitleProps) => {
  return (
    <Typography variant="h6" fontWeight={600} color="text.secondary">
      {text}
      <Typography
        component="span"
        color="text.primary"
        variant="h6"
        fontWeight={600}
        className="nav-title"
      >
        {spanText}
      </Typography>
    </Typography>
  );
};

export default NavTitle;
