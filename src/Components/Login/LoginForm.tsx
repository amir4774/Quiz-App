import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./LoginStyle.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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

      <FormGroup sx={{ gap: "20px", mt: 4 }}>
        <FormControl fullWidth>
          <TextField label="Name" name="name" />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="password"
            name="password"
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
        </FormControl>

        <Button variant="useful">Login</Button>
      </FormGroup>
    </Box>
  );
};

export default LoginForm;
