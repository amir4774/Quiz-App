import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const Submit = ({ open, setOpen }: any) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    // Fake Delay
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    
    navigate("/result");
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent sx={{ height: "430px" }}>
          <DialogContentText textAlign="center">
            <Box width="100%" height="200px">
              <CheckCircle
                color="success"
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Typography my={3} fontSize="20px">
              Are you sure you want to submit the exam?
            </Typography>
          </DialogContentText>

          <DialogActions>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              No
            </Button>
            <Button
              fullWidth
              variant="useful"
              onClick={handleSubmit}
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

export default Submit;
