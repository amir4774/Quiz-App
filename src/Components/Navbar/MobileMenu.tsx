import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import NavTitle from "./NavTitle";
import LoginListItem from "./LoginListItem";
import useStore from "../../Zustand/Store";

const MobileMenu = () => {
  const { userName, changeMode } = useStore();
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box my={2} display="flex" justifyContent="center">
        <NavTitle text="Grad" spanText="Quiz" />
      </Box>

      <Divider />

      <List sx={{ textAlign: "center" }}>
        {userName && (
          <ListItem>
            <ListItemText
              sx={{ textAlign: "center", color: "text.secondary" }}
              primary={userName}
            />
          </ListItem>
        )}

        <ListItem>
          <Link style={{ margin: "0 auto" }} to="#">
            <ListItemText
              sx={{ background: "none", color: "text.secondary" }}
              primary="About Us"
            />
          </Link>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={{
              color:
                theme.palette.mode === "light"
                  ? "text.secondary"
                  : "text.primary",
              textAlign: "center",
            }}
            onClick={changeMode}
          >
            <ListItemText
              primary={
                theme.palette.mode === "light" ? (
                  <DarkModeOutlined />
                ) : (
                  <LightModeOutlined />
                )
              }
            />
          </ListItemButton>
        </ListItem>

        {userName ? (
          <LoginListItem title="Logout" />
        ) : (
          <Link to="/login">
            <LoginListItem title="Login" />
          </Link>
        )}
      </List>
    </Box>
  );
};

export default MobileMenu;
