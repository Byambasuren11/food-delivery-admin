"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { AddFood } from "./Add-Food";
import AddCategory from "../_components/Add-Category";
import { Categories } from "./Categories";

export const FoodCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("categories", categories);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[80%] flex flex-col gap-6">
          <Categories categories={categories} />
          <AddFood categories={categories} />
        </div>
      </div>
    </>
  );
};
