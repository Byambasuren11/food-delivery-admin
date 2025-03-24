"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { AddFoodModal } from "../_components/Add-Food-Modal";
import axios from "axios";
import { Categories } from "./Categories";

const NEXT_PUBLIC_CLOUDINARY_API_KEY = "838167655913687";
const CLOUDINARY_UPLOAD_PRESET = "ml_default";
const CLOUDNARY_CLOUD_NAME = "dp1u0n6zb";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDNARY_CLOUD_NAME}/image/upload`;

type Category = {
  categoryName: string;
  _id: string;
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

  const [file1, setFile] = useState<string>("");

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files ? event?.target?.files[0] : "";
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setFile(url);
    };
    reader.readAsDataURL(file);
  };

  const onClick = async (_id: string) => {
    await uploadCloudinary().then(async (response) => {
      await axios.post(`http://localhost:4007/food`, {
        ...food,
        category: _id,
        image: response,
      });
    });
  };

  const getFood = async () => {
    const response = await axios.get(`http://localhost:4007/food`);
    setFoodGet(response.data.data);
  };

  const uploadCloudinary = async () => {
    try {
      const file = new FormData();
      file.append("file", file1);
      file.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      file.append("api_key", NEXT_PUBLIC_CLOUDINARY_API_KEY);

      const response = await axios.post(CLOUDINARY_URL, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      return response.data.secure_url;
    } catch (error) {
      console.log("error", error);
    }
  };
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
                      onClick={() => onClick(element._id)}
                      handleFile={handleFile}
                      file1={file1}
                      setFood={setFood}
                    />
                    <div className="text-xs w-28 ">Add new Dish to Salads </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  {foodGet?.map((el, index) => {
                    if (el.category === element._id) {
                      return (
                        <div
                          key={index}
                          className="border-dashed border-red-600 border w-[250px] h-[200px] rounded-xl flex flex-col p-3 mt-[24px] gap-3"
                        >
                          <div className="w-full h-3/5 border border-gray-100 rounded-2xl flex flex-col overflow-hidden object-cover">
                            <img src={el.image} />
                          </div>
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
