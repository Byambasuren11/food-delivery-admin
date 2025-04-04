"use client";
import { useState, createContext, useContext, useEffect } from "react";

type userContextType = {
  email: string;
  addrress: string;
};

const UserContext = createContext<userContextType>({} as userContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userContextType>({} as userContextType);

  useEffect(() => {
    const user1 = localStorage.getItem("user");
    if (user1) {
      const user = JSON.parse(user1);
      setUser(user);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ email: user?.email, addrress: user.addrress }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    console.log("hohho");
  }
  return context;
};
