"use client";

import { useEffect, useState } from "react";
import AddCategory from "./Add-Category";
import axios from "axios";

export const FoodCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:4007/food-category`);
      setCategories(response.data);
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

  console.log(categories);

  return (
    <div>
      Dishes category
      {categories.map((catergory, index) => {
        return <div key={index}>{catergory.categoryName}</div>;
      })}
      <AddCategory />
    </div>
  );
};
