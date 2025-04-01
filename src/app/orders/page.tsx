"use client";
import Menu from "@/components/Menu";
import NomLogo from "@/components/Nom-Nom-Logo";
import Orders from "./_features/Orders";
import { useUser } from "../provider/User-Provider";

const Home = () => {
  const { email } = useUser();
  console.log("email", email);

  return (
    <div className="flex">
      <div className="bg-white h-screen w-[10%] p-10">
        <NomLogo />
        <Menu />
      </div>
      <div className="bg-gray-200 h-screen w-[90%]">
        <Orders />
      </div>
    </div>
  );
};
export default Home;
