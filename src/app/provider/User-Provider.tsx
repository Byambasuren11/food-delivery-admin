"use client";
import { useState, createContext, useContext, useEffect } from "react";

type userContextType = {
  email: string;
};

const UserContext = createContext<userContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userContextType | undefined>(undefined);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ email: user }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
