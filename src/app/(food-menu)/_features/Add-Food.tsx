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
  const [food, setFood] = useState<FoodType>({
    foodName: "",
    price: 0,
    ingredients: "",
    image: "",
    category: "",
  });
  const [foodGet, setFoodGet] = useState();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const onClick = async (_id: string) => {
    await axios.post(`http://localhost:4007/food`, { ...food, category: _id });
  };

  const getFood = async () => {
    const response = await axios.get(`http://localhost:4007/food`);
    setFoodGet(response.data.data);
  };
  console.log(foodGet);

  useEffect(() => {
    getFood();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-6">
        {categories?.map((element, index) => {
          return (
            <div key={index}>
              <div className="h-fit p-5 bg-white rounded-xl w-full flex  gap-5 ">
                <div>
                  {element.categoryName}
                  <div className="border-dashed border-red-600 border w-[250px] h-[200px] rounded-xl flex flex-col justify-center items-center">
                    <AddFoodModal
                      onChange={onChange}
                      onClick={() => onClick(element._id)}
                    />
                    <div className="text-xs w-28 ">Add new Dish to Salads </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  {foodGet?.map((el, index) => {
                    if (el.category === element._id) {
                      return (
                        <div className="border-dashed border-red-600 border w-[250px] h-[200px] rounded-xl flex flex-col p-3 mt-[24px] gap-3">
                          <div className="w-full h-3/5 border border-gray-100 rounded-2xl flex flex-col"></div>
                          <div className="flex justify-between text-sm">
                            <p className="text-red-600"> {el.foodName}</p>
                            <p>{el.price}$</p>
                          </div>
                          <div className="text-xs">{el.ingredients}</div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
