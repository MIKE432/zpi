import { createContext, FC, useEffect, useState } from 'react';
import { useCurrentUser } from '../../api/user/UserLogin';

export interface User {
  id: number;
  email: string;
  name: string;
  lastName: string;
}

const defaultSetUser = (user: User) => {};

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
      {isLoading ? <h1>Loading</h1> : children}
    </UserContext.Provider>
  );
};
