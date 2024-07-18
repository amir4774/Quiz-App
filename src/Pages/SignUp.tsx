import SignUpLogo from "../Components/SignUp/SignUpLogo.tsx";
import SignUpForm from "../Components/SignUp/SignUpForm.tsx";
import SignUp_Login_Box from "../Components/SignUp_Login/SignUp_Login_Box.tsx";

const SignUp = () => {
  return (
    <div>
      <SignUp_Login_Box>
        <SignUpForm />
        <SignUpLogo />
      </SignUp_Login_Box>
    </div>
  );
};

export default SignUp;
