"use client";
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
};

export type category = {
  categoryName: string;
  foodCount: number;
  _id: string;
};

const CategoryContext = createContext<categoryContextType>(
  {} as categoryContextType
);

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
