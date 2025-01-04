import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import useGlobalTranslation from "../../../Hooks/useGlobalTranslation";

const SignUpListItem = () => {
  const { t } = useGlobalTranslation();

  return (
    <Link to="sign-up">
      <ListItem>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText
            sx={{ fontWeight: 600, color: "text.primary" }}
            primary={t("Sign up")}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SignUpListItem;
