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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  DarkModeOutlined,
  LightModeOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import NavTitle from "./NavTitle";
import useStore from "../../Zustand/Store";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, changeMode } = useStore();

  const mobileMenu = (
    <Box sx={{ textAlign: "center" }}>
      <Box my={2} color="text.primary" display="flex" justifyContent="center">
        <NavTitle text="Quiz" color="text.secondary" />
        <NavTitle text="Grad" />
      </Box>

      <Divider />

      <List sx={{ textAlign: "center" }}>
        <ListItem>
          <ListItemText
            sx={{ textAlign: "center", color: "text.secondary" }}
            primary="Amir Mahdi Abbasi"
          />
        </ListItem>

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
              color: mode === "light" ? "text.secondary" : "text.primary",
              textAlign: "center",
            }}
            onClick={changeMode}
          >
            <ListItemText
              primary={
                mode === "light" ? <DarkModeOutlined /> : <LightModeOutlined />
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText sx={{ fontWeight: 600 }} primary="Login" />
          </ListItemButton>
        </ListItem>
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
              Amir Mahdi Abbasi
            </Typography>
            <IconButton>
              <LogoutOutlined />
            </IconButton>
          </Box>

          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <NavTitle text="Quiz" color="text.secondary" />
            <NavTitle text="Grad" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }} alignItems="center">
            <Typography color="text.primary">Amir Mahdi Abbasi</Typography>
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
                color: mode === "light" ? "text.secondary" : "text.primary",
                mx: 3,
              }}
              onClick={changeMode}
            >
              {mode === "light" ? <DarkModeOutlined /> : <LightModeOutlined />}
            </Button>
            <Button variant="outlined" sx={{ p: "5px 30px", fontWeight: 600 }}>
              Login
            </Button>
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
