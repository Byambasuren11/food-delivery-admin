"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { AddFoodModal } from "../_components/Add-Food-Modal";
import axios from "axios";
import { Categories } from "./Categories";

type Category = {
  categoryName: String;
  _id: String;
};

type FoodType = {
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  category: string;
};

type AddCategoryProps = {
  categories: Category[];
};
export const AddFood = (props: AddCategoryProps) => {
  const { categories } = props;
  console.log(categories);
  const [food, setFood] = useState<FoodType>({
    foodName: "",
    price: 0,
    ingredients: "",
    image: "",
    category: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const onClick = async (_id) => {
    setFood({ ...food, category: _id });
    const response = await axios.post(`http://localhost:4007/food`, food);
  };
  const getFood = async () => {
    const response = await axios.get(`http://localhost:4007/food`);
    console.log("food", response.data.data);
  };
  useEffect(() => {
    getFood();
  }, []);

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
                <AddFoodModal
                  onChange={onChange}
                  onClick={() => onClick(element._id)}
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
