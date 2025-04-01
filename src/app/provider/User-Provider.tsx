"use client";
import { useState, createContext, useContext, useEffect } from "react";

type userContextType = {
  email: string;
  addrress:string
};

const UserContext = createContext<userContextType>({} as userContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userContextType>({} as userContextType);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    setLoading(false);
    setUser(user!);
  }, []);

  return (
    <UserContext.Provider value={{ email: user?.email }}>
      {loading ? <div>Loading</div> : children}
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
