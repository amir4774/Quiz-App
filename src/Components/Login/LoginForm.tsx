import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { AxiosResponse, isAxiosError } from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import QuizGradTitle from "../QuizGradTitle";
import useStore from "../../Zustand/Store";
import useShowPassword from "../../Hooks/useShowPassword";
import InternalApi from "../../Services/InternalApi";
import { LoginData, LoginResponse } from "../SignUp_Login/Interfaces";
import "../SignUp_Login/SignUp_Login_Style.css";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";
const LoginForm = () => {
  const showPassword = useShowPassword(false);
  const [loading, setLoading] = useState(false);
  const { changeUserName, changeToken } = useStore();
  const navigate = useNavigate();
  const { t } = useGlobalTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      setLoading(true);

      const res: AxiosResponse<LoginResponse> = await InternalApi().post(
        "login/",
        {
          username: data.name,
          password: data.password,
        }
      );

      toast.success(t("Welcome back!") + ` ${data.name}`);
      changeUserName(data.name);

      localStorage.setItem("token", res.data.access);
      changeToken(res.data.access);

      navigate("/");
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error(t("Wrong username or password"));
        } else {
          toast.error(t("Something went wrong"));
        }
      } else {
        toast.error(t("An unexpected error occurred"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box color="text.primary" textAlign="center" px={5} width="100%">
      <QuizGradTitle />

      <Typography color="text.secondary">
        {t("Welcome back!")} <br /> {t("Please Login to your account.")}
      </Typography>

      <Link to="/sign-up" style={{ display: "inline-block", marginTop: "8px" }}>
        <Typography color="text.primary" fontWeight="bold">
          {t("don't have an account?")}
        </Typography>
      </Link>

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

          <Button variant="useful" type="submit" disabled={loading}>
            {loading ? t("Loading") : t("Login")}
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default LoginForm;
