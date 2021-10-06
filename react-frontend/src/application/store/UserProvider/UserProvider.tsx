import { createContext, FC, useState } from 'react';

export interface User {
  name: string;
}

const defaultSetUser = (user: User) => {};

export interface UserCtx {
  user?: User;
  setUser: (user: User) => void;
}
export const UserContext = createContext<UserCtx>({ setUser: defaultSetUser });

export const UserProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>();

  return (
    <UserContext.Provider
      value={{ user: currentUser, setUser: (user) => setCurrentUser(user) }}
    >
      {children}
    </UserContext.Provider>
  );
};
