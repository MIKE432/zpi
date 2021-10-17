export interface UserLoginRequestBody {
  email: string;
  password: string;
}

export interface UserLoginResponseBody {
  token: string;
}

export interface UserRegisterRequestBody {
  name: string;
  lastName: string;
  email: string;
  studId: string;
  password: string;
}
