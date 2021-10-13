import { createContext, FC, useEffect, useState } from 'react';
import { useCurrentUser } from '../../api/user/UserLogin';
import styled from '@emotion/styled';
import { LoadingComponent } from '../../../infrastructure/components/ProgressBars/LoadingComponent';
import { LoadingBarStyled } from './UserProvider.style';

export interface User {
  id: number;
  email: string;
  name: string;
  lastName: string;
}

const defaultSetUser = () => {};

export interface UserCtx {
  user?: User;
  setUser: (user: User) => void;
}
export const UserContext = createContext<UserCtx>({ setUser: defaultSetUser });

export const UserProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const { data, isLoading } = useCurrentUser();

  useEffect(() => {
    setCurrentUser(data);
  }, [data]);

  return (
    <UserContext.Provider
      value={{ user: currentUser, setUser: (user) => setCurrentUser(user) }}
    >
      {isLoading ? <LoadingBarStyled /> : children}
    </UserContext.Provider>
  );
};
