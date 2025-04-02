"use client";
import {
  useState,
  createContext,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

type categoryContextType = {
  categories: category[];
  setCategories: Dispatch<SetStateAction<category[]>>;
};

type category = {
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
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     const category1 = localStorage.getItem("category");

  //     if (category1) {
  //       const category = JSON.parse(category1);
  //       setCategory(category);
  //       setLoading(false);
  //     }
  //   }, []);

  return (
    <CategoryContext.Provider
      value={{
        setCategories,
        // categoryName: category?.categoryName,
        // foodCount: category.foodCount,
        // _id: category._id,
        categories,
      }}
    >
      {loading ? <div>Loading</div> : children}
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
