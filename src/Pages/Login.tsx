import LoginLogo from "../Components/Login/LoginLogo";
import LoginForm from "../Components/Login/LoginForm";
import SignUp_Login_Box from "../Components/SignUp_Login/SignUp_Login_Box";

const Login = () => {
  return (
    <div>
      <SignUp_Login_Box>
        <LoginForm />
        <LoginLogo />
      </SignUp_Login_Box>
    </div>
  );
};

export default Login;
