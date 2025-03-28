import Menu from "@/components/Menu";
import NomLogo from "@/components/Nom-Nom-Logo";
import { FoodCategories } from "./_features/FoodCategories";


const Home = () => {
  return (
    <div className="flex">
      <div className="bg-white h-screen w-[10%] p-10">
        <NomLogo />
        <Menu />
      </div>
      <div className="bg-gray-200 h-full w-[90%]">
        <FoodCategories />
      </div>
    </div>
  );
};
export default Home;
