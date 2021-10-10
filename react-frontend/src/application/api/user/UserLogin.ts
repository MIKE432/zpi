import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult
} from 'react-query';
import { QueryKeys } from '../QueryKeys';
import { Axios } from '../Axios';
import { ApiUrls, serverUrl } from '../ApiUrls';
import { User } from '../../store/UserProvider/UserProvider';
import { AxiosError, AxiosResponse } from 'axios';
import { wrapWithAuthHeaders } from '../utils/ApiHeadersUtils';
import {
  UserLoginRequestBody,
  UserLoginResponseBody
} from '../../types/APITypes';

export const getCurrentUser = async () =>
  (
    await Axios.get<User>(serverUrl + ApiUrls.member + 'current', {
      headers: wrapWithAuthHeaders({})
    })
  ).data;

export const useCurrentUser = (): UseQueryResult<User, AxiosError> => {
  return useQuery(QueryKeys.userCurrent, getCurrentUser);
};

const loginUser = ({ email, password }: UserLoginRequestBody) =>
  Axios.post<UserLoginRequestBody, UserLoginResponseBody>(
    serverUrl + ApiUrls.login,
    {
      password,
      email
    }
  );

export const useUserLoginMutation = (): UseMutationResult<
  AxiosResponse<UserLoginResponseBody>,
  AxiosError,
  UserLoginRequestBody
> => {
  return useMutation(loginUser);
};
