import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useStore from "../../Zustand/Store";
import { Data } from "./Interfaces";
import "./LoginStyle.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { changeUserName } = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data: Data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    toast.success(`!Welcome back, ${data.name}`);
    changeUserName(data.name);
    navigate("/");
  };

  return (
    <Box color="text.primary" textAlign="center" px={5} width="100%">
      <Typography fontSize={40} fontWeight={700}>
        <Typography
          component="span"
          color="text.secondary"
          fontSize={40}
          fontWeight={700}
          className="span-text"
        >
          Quiz
        </Typography>
        Grad
      </Typography>

      <Typography color="text.secondary">
        Welcome back! <br /> Please Login to your account.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup sx={{ gap: "20px", mt: 4 }}>
          <FormControl fullWidth>
            <TextField
              label="Name"
              {...register("name", { required: "Name is required" })}
              name="name"
            />
            <FormHelperText error>{errors.name?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <TextField
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormHelperText error>{errors.password?.message}</FormHelperText>
          </FormControl>

          <Button variant="useful" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default LoginForm;
