export interface SignUpData {
  name: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponse {
  access: string;
}

export type LoginData = Omit<SignUpData, "confirmPassword">;

export interface SignUp_Login_Logo_Type {
  logo: string;
}
