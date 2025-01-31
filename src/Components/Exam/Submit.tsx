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
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const Submit = ({ open, setOpen }: SubmitType) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { examParams, result } = useStore();
  const { t } = useGlobalTranslation();

  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const values = {
        rate: Math.round((result.correct / examParams.limit) * 100),
        question_numbers: examParams.limit,
        category: examParams.category,
        difficulty: examParams.difficulty,
        corrects: result.correct,
      };

      await InternalApi().post("exam/", values);

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
              {t("Are you sure you want to submit the exam?")}
            </Typography>
          </DialogContentText>

          <DialogActions>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              {t("No")}
            </Button>
            <Button
              fullWidth
              variant="useful"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? t("Loading...") : t("Yes")}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Submit;
