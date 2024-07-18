import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const SignUpListItem = () => {
  return (
    <Link to="sign-up">
      <ListItem>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText
            sx={{ fontWeight: 600, color: "text.primary" }}
            primary="Sign up"
          />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SignUpListItem;
