"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { AddFood } from "./Add-Food";
import { Categories } from "./Categories";

export const FoodCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:4007/food-category`);
      setCategories(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log("this is err", err);
      setLoading(false);
    }
  };
  console.log(categories);
  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[80%] flex flex-col gap-6">
          <Categories />

          <AddFood />
        </div>
      </div>
    </>
  );
};
