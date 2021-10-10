import { useContext } from 'react';
import { User, UserContext, UserCtx } from '../store/UserProvider/UserProvider';
import {
  useUserLoginMutation,
  UserLoginRequestBody,
  useCurrentUser,
  UserLoginResponseBody,
  getCurrentUser
} from '../api/user/UserLogin';
import { UseMutationResult, UseQueryResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

export interface UseUserAdditionalProps {
  useLogin: () => UseMutationResult<
    AxiosResponse<UserLoginResponseBody>,
    AxiosError,
    UserLoginRequestBody
  >;
  useCurrentUser: () => UseQueryResult<User, AxiosError>;
  getCurrentUserAndReload: () => Promise<void>;
}

export type UseUserReturn = UserCtx & UseUserAdditionalProps;

export const useUser = (): UseUserReturn => {
  const { user, setUser } = useContext(UserContext);

  async function getCurrentUserAndReload() {
    const user = await getCurrentUser();
    setUser(user);
  }

  return {
    user,
    setUser,
    useLogin: useUserLoginMutation,
    useCurrentUser,
    getCurrentUserAndReload
  };
};
