import AddCategory from "./_features/Add-Category";
import { AddFood } from "./_features/Add-Food";

const FoodMenu = () => {
  return (
    <div className="bg-gray-200 h-screen w-[90%]">
      <AddCategory />
      <AddFood />
    </div>
  );
};
export default FoodMenu;
