import { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import logoutLogo from "../../assets/logout.png";
import useStore from "../../Zustand/Store";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Logout = ({ open, setOpen }: Props) => {
  const [loading, setLoading] = useState(false);
  const { changeUserName } = useStore();

  const handleClose = () => setOpen(false);

  const handleLogOut = async () => {
    // Fake Delay
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Logged out successfully");
    changeUserName("");
    setLoading(false);
    window.location.reload();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent sx={{ height: "400px" }}>
          <DialogContentText textAlign="center">
            <Box component="img" src={logoutLogo} height="200px" />
            <Typography color="text.secondary" fontSize={"20px"} my={3}>
              Are you sure you want to logout?
            </Typography>
          </DialogContentText>

          <DialogActions>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              No
            </Button>
            <Button
              fullWidth
              variant="useful"
              onClick={handleLogOut}
              disabled={loading}
            >
              {loading ? "Loading..." : "Yes"}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Logout;
