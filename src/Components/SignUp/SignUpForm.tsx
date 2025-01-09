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
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";
import { AxiosError } from "axios";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const showPassword = useShowPassword(false);
  const showConfirmPassword = useShowPassword(false);
  const navigate = useNavigate();
  const { t } = useGlobalTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  const onSubmit = async (data: SignUpData) => {
    try {
      setLoading(true);
      if (data.password !== data.confirmPassword) {
        toast.error(t("Passwords do not match"));
        return;
      }

      await InternalApi().post("register/", {
        username: data.name,
        password: data.password,
      });

      toast.success(t("Account created successfully. Please log in."));
      navigate("/login");
    } catch (err: AxiosError | any) {
      if (err.response.status === 400) {
        if (err.response.data.username) {
          toast.error(t("Username already exists"));
        }
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box color="text.primary" textAlign="center" px={5} width="100%">
      <QuizGradTitle />

      <Typography color="text.secondary">
        {t("Welcome!")} <br /> {t("Please create an account.")}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup sx={{ gap: "20px", mt: 4 }}>
          <FormControl fullWidth>
            <TextField
              label={t("Name")}
              {...register("name", { required: t("Name is required") })}
              name="name"
            />
            <FormHelperText error>{errors.name?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <TextField
              {...register("password", {
                required: t("Password is required"),
                minLength: {
                  value: 8,
                  message: t("Password must be at least 8 characters"),
                },
              })}
              name="password"
              label={t("Password")}
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
                required: t("Confirm Password is required"),
                minLength: {
                  value: 8,
                  message: t("Password must be at least 8 characters"),
                },
              })}
              name="confirmPassword"
              label={t("Confirm Password")}
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
            {loading ? t("Loading") : t("Sign up")}
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default SignUpForm;
