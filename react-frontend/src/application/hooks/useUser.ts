import { useContext } from 'react';
import { UserContext, UserCtx } from '../store/UserProvider/UserProvider';

export type UseUserReturn = UserCtx;

export const useUser = (): UseUserReturn => {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
};
