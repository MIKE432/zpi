import {
  UserLoginRequestBody,
  UserLoginResponseBody,
  UserRegisterRequestBody
} from '../../types/APITypes';
import { Axios } from '../Axios';
import { ApiUrls, serverUrl } from '../ApiUrls';
import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

const registerUser = (body: UserRegisterRequestBody) =>
  Axios.post<UserRegisterRequestBody, undefined>(
    serverUrl + ApiUrls.register,
    body
  );

export const useUserRegisterMutation = (): UseMutationResult<
  AxiosResponse<undefined>,
  any,
  UserRegisterRequestBody
> => {
  return useMutation(registerUser);
};
