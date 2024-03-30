import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import NavTitle from "./NavTitle";
import useStore from "../../Zustand/Store";
import LoginListItem from "./LoginListItem";
import LoginTooltip from "./LoginTooltip";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userName, changeMode } = useStore();
  const theme = useTheme();

  const mobileMenu = (
    <Box sx={{ textAlign: "center" }}>
      <Box my={2} display="flex" justifyContent="center">
        <NavTitle text="Quiz" spanText="Grad" />
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

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        component="nav"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar>
          {/* Mobile */}
          <Box
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Box>
              <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography color="text.primary" mr={2}>
              {userName ? (
                userName
              ) : (
                <Box display="flex" justifyContent="center">
                  <NavTitle text="Quiz" spanText="Grad" />
                </Box>
              )}
            </Typography>

            {userName ? (
              <LoginTooltip title="Logout" isLogin={false} />
            ) : (
              <Link to="/login">
                <LoginTooltip title="Login" isLogin={true} />
              </Link>
            )}
          </Box>

          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <NavTitle text="Quiz" spanText="Grad" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }} alignItems="center">
            <Link to="#">
              <Typography
                sx={{ ml: 3, background: "none", color: "text.secondary" }}
              >
                About Us
              </Typography>
            </Link>

            <Button
              variant="text"
              sx={{
                color:
                  theme.palette.mode === "light"
                    ? "text.secondary"
                    : "text.primary",
                mx: 2,
              }}
              onClick={changeMode}
            >
              {theme.palette.mode === "light" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </Button>

            {userName && (
              <Typography margin="0 40px 0 10px" color="text.primary">
                {userName}
              </Typography>
            )}

            {userName ? (
              <LoginButton title="Logout" />
            ) : (
              <Link to="/login">
                <LoginButton title="Login" />
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
            },
          }}
        >
          {mobileMenu}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
