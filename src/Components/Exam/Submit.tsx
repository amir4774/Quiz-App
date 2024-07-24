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
import useStore from "../../Zustand/Store";
import { SubmitType } from "./Interfaces";
import InternalApi from "../../Services/InternalApi";

const Submit = ({ open, setOpen }: SubmitType) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { examParams, result } = useStore();

  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const values = {
        rate: (result.correct / examParams.limit) * 100,
        question_numbers: examParams.limit,
        category: examParams.category,
        difficulty: examParams.difficulty,
        corrects: result.correct,
        examiner: 1,
      };

      const { data } = await InternalApi().post("exam/", values);

      // const { data } = await axios.post(
      //   "http://127.0.0.1:8000/exam/",
      //   {
      //     rate: (result.correct / examParams.limit) * 100,
      //     question_numbers: examParams.limit,
      //     category: examParams.category,
      //     difficulty: examParams.difficulty,
      //     corrects: result.correct,
      //     examiner: 1,
      //   },
      //   { headers: { Authorization: `Bearer ${token}` } }
      // );

      console.log(data);
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
