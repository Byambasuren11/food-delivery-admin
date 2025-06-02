"use client";
import axios from "axios";
import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type categoryContextType = {
  categories: category[];
  setCategories: Dispatch<SetStateAction<category[]>>;
  deleteCategory: (id: string) => Promise<void>
};

export type category = {
  categoryName: string;
  foodCount: number;
  _id: string;
};

const CategoryContext = createContext<categoryContextType>(
  {} as categoryContextType
);
export const deleteCategory=async(id:string)=>{
await axios.delete(`http://localhost:4007/food-category/${id}`);
}

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<category[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        setCategories,
        categories,
        deleteCategory
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    console.log("hohho");
  }
  return context;
};
