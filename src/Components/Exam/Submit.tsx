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
import { SubmitType } from "./Interfaces";

const Submit = ({ open, setOpen }: SubmitType) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // Fake delay
      await new Promise((res) => setTimeout(res, 2000));
      navigate("/result");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
