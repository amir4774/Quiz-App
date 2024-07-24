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
import useShowPassword from "../../Hooks/useShowPassword";
import { SignUpData } from "../SignUp_Login/Interfaces";
import "../SignUp_Login/SignUp_Login_Style.css";
import InternalApi from "../../Services/InternalApi";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const showPassword = useShowPassword(false);
  const showConfirmPassword = useShowPassword(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  const onSubmit = async (data: SignUpData) => {
    try {
      setLoading(true);
      if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      InternalApi().post("register/", {
        username: data.name,
        password: data.password,
      });

      // axios.post("http://127.0.0.1:8000/register/", {
      //   username: data.name,
      //   password: data.password,
      // });

      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box color="text.primary" textAlign="center" px={5} width="100%">
      <QuizGradTitle />

      <Typography color="text.secondary">
        Welcome! <br /> Please create an account.
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

          <FormControl fullWidth>
            <TextField
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword.value ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={showConfirmPassword.OnClick}>
                      {showConfirmPassword.value ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormHelperText error>
              {errors.confirmPassword?.message}
            </FormHelperText>
          </FormControl>

          <Button variant="useful" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign up"}
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default SignUpForm;
