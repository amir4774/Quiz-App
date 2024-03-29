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
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  DarkModeOutlined,
  LightModeOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@mui/icons-material";
import NavTitle from "./NavTitle";
import useStore from "../../Zustand/Store";

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

        <Link to="/login">
          <ListItem>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                sx={{ fontWeight: 600, color: "text.primary" }}
                primary={userName ? "Logout" : "Login"}
              />
            </ListItemButton>
          </ListItem>
        </Link>
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

            <Link to="/login">
              <Tooltip title={userName ? "Logout" : "Login"}>
                <IconButton>
                  {userName ? <LogoutOutlined /> : <LoginOutlined />}
                </IconButton>
              </Tooltip>
            </Link>
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

            <Link to="/login">
              <Button
                variant="outlined"
                sx={{ p: "5px 30px", fontWeight: 600 }}
              >
                {userName ? "Logout" : "Login"}
              </Button>
            </Link>
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
