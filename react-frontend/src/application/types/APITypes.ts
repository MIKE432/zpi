export interface UserLoginRequestBody {
  email: string;
  password: string;
}

export interface UserLoginResponseBody {
  token: string;
}
