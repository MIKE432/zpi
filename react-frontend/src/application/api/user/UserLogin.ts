import { useMutation, UseMutationResult } from 'react-query';
import { QueryKeys } from '../QueryKeys';
import { Axios } from '../Axios';
import { ApiUrls } from '../ApiUrls';
import { User } from '../../store/UserProvider/UserProvider';
import { AxiosError, AxiosResponse } from 'axios';

export interface UserLoginRequestBody {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  user: User;
}

const useUserLogin = (): UseMutationResult<
  AxiosResponse<UserLoginResponse>,
  AxiosError,
  UserLoginRequestBody
> => {
  return useMutation(QueryKeys.userLoginQueryKey, ({ password, email }) =>
    Axios.post<UserLoginRequestBody, UserLoginResponse>(ApiUrls.user, {
      password,
      email
    })
  );
};

useUserLogin().mutate(
  { email: 'dsa', password: 'sa' },
  { onError: (error) => {} }
);
