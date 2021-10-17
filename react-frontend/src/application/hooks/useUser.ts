import { useContext } from 'react';
import { User, UserContext, UserCtx } from '../store/UserProvider/UserProvider';
import {
  getCurrentUser,
  TOKEN,
  useCurrentUser,
  useUserLoginMutation
} from '../api/user/UserLogin';
import { UseMutationResult, UseQueryResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
  UserLoginRequestBody,
  UserLoginResponseBody,
  UserRegisterRequestBody
} from '../types/APITypes';
import cookies from 'js-cookie';
import { useUserRegisterMutation } from '../api/user/UserRegister';

export interface UseUserAdditionalProps {
  useLogin: () => UseMutationResult<
    AxiosResponse<UserLoginResponseBody>,
    AxiosError,
    UserLoginRequestBody
  >;
  useRegister: () => UseMutationResult<
    AxiosResponse<undefined>,
    any,
    UserRegisterRequestBody
  >;
  useCurrentUser: () => UseQueryResult<User, AxiosError>;
  getCurrentUserAndReload: () => Promise<void>;
  logout: () => void;
}

export type UseUserReturn = UserCtx & UseUserAdditionalProps;

export const useUser = (): UseUserReturn => {
  const { user, setUser } = useContext(UserContext);
  async function getCurrentUserAndReload() {
    const user = await getCurrentUser();
    setUser(user);
  }

  function logout() {
    cookies.remove(TOKEN);
    setUser(undefined);
  }

  return {
    user,
    setUser,
    useLogin: useUserLoginMutation,
    useCurrentUser,
    getCurrentUserAndReload,
    logout,
    useRegister: useUserRegisterMutation
  };
};
