"use client";
import { ChangeEvent, useState } from "react";
import { AddFoodModal } from "../_components/Add-Food-Modal";

type Category = {
  categoryName: String;
};

type FoodType = {
  foodName: string;
  foodPrice: number;
  ingredients: string;
  foodImage: string;
};

type AddCategoryProps = {
  categories: Category[];
};

export const AddFood = (props: AddCategoryProps) => {
  const { categories } = props;
  const [food, setFood] = useState<FoodType>({
    foodName: "",
    foodPrice: 0,
    ingredients: "",
    foodImage: "",
  });

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setFood({ ...food, foodName: event.target.value });
  };
  return (
    <>
      <div className="flex flex-col gap-6">
        {categories?.map((element, index) => {
          return (
            <div
              key={index}
              className="h-fit p-5 bg-white rounded-xl w-full flex flex-col gap-3"
            >
              {element.categoryName}
              <div className="border-dashed border-red-600 border w-[200px] h-[200px] rounded-xl flex flex-col justify-center items-center">
                <AddFoodModal onChange={onChangeName}
                 />
                <div className="text-xs w-28 ">Add new Dish to Salads </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
