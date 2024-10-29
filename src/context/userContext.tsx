"use client";

import { IUser, IUserContextType } from "@/interfaces/IUser";
import { createContext, useContext, useState } from "react";

const UserContext = createContext<IUserContextType>({
  user: null,
  setUser: () => {},
});

interface UserStateProps {
  children: JSX.Element;
}

const UserState = ({ children }: UserStateProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const state: IUserContextType = {
    user,
    setUser,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

export default UserState;
