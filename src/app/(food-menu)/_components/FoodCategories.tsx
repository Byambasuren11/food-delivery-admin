"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

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
    <div className="flex gap-3 ">
      {categories.map((catergory, index) => {
        return (
          <Button
            className="border pl-3 pr-3 rounded-xl border-gray-200 bg-white text-black hover:bg-gray-100"
            key={index}
          >
            {catergory.categoryName}
          </Button>
        );
      })}
    </div>
  );
};
