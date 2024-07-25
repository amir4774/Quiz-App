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
import QuizGradTitle from "../QuizGradTitle";
import useStore from "../../Zustand/Store";
import useShowPassword from "../../Hooks/useShowPassword";
import { LoginData } from "../SignUp_Login/Interfaces";
import "../SignUp_Login/SignUp_Login_Style.css";

const LoginForm = () => {
  const showPassword = useShowPassword(false);
  const [loading, setLoading] = useState(false);
  const { changeUserName } = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      setLoading(true);

      // Fake delay
      await new Promise((res) => setTimeout(res, 2000));

      toast.success(`!Welcome back, ${data.name}`);
      changeUserName(data.name);

      navigate("/");
    } catch (error: any) {
      if (error.response?.status == 401) {
        toast.error("Wrong username or password");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box color="text.primary" textAlign="center" px={5} width="100%">
      <QuizGradTitle />

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
              type={showPassword.value ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={showPassword.OnClick}>
                      {showPassword.value ? <VisibilityOff /> : <Visibility />}
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
