import Menu from "@/components/Menu";
import NomLogo from "@/components/Nom-Nom-Logo";
import AddCategory from "../food-menu/_components/Add-Category";
import FoodMenu from "../food-menu/page";

const Home = () => {
  return (
    <div className="flex">
      <div className="bg-white h-screen w-[10%] p-10">
        <NomLogo />
        <Menu />
      </div>
      <FoodMenu />
    </div>
  );
};
export default Home;
