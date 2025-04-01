"use client";
import Menu from "@/components/Menu";
import NomLogo from "@/components/Nom-Nom-Logo";
import { FoodCategories } from "./_features/FoodCategories";
import { AddCategoryModal1 } from "./_components/Add-Category";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import { useUser } from "../provider/User-Provider";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const { email } = useUser();
  const onClick = () => {
    localStorage.clear();
    router.push("/Login");
  };
  return (
    <div className="flex">
      <div className="bg-white h-screen w-[10%] p-10">
        <NomLogo />
        <Menu />
      </div>
      <div className="bg-gray-200 h-full w-[90%]">
        <div className="flex justify-end w-[90%] mt-4">
          <Popover>
            <PopoverTrigger>
              <User className="p-3 bg-white rounded-full text-red-500 w-9 h-9" />
            </PopoverTrigger>
            <PopoverContent className=" text-center">
              <div className="text-xs"> {email} </div>
              <Button
                className="bg-gray-200 text-black rounded-2xl"
                onClick={onClick}
              >
                Sign Out
              </Button>
            </PopoverContent>
          </Popover>
        </div>
        <FoodCategories />
      </div>
    </div>
  );
};
export default Home;
