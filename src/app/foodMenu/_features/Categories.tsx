"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CatergoryButton } from "../_components/CategoryButton";
import { useQuery } from "@tanstack/react-query";
import { AddCategoryModal1 } from "../_components/Add-Category";
import { category, useCategory } from "@/app/provider/Category-Provider";

export const Categories = () => {
  const [addCategory, setAddCategory] = useState(false);
  const [closeDialog, setCloseDialog] = useState(false);

  const { setCategories } = useCategory();

  const { data: categoryList = [], refetch } = useQuery<category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      setCloseDialog(true);
      const response = await axios.get("http://localhost:4007/food-category");

      setCategories(categoryList);
      setCloseDialog(false);

      return response.data.data;
    },
  });

  useEffect(() => {
    document.body.style.overflow = addCategory ? "hidden" : "auto";
  }, [addCategory]);

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full rounded-xl p-4 mt-14 flex flex-col gap-3">
        <div>Dishes category</div>
        <div className="flex gap-3 flex-wrap">
          <div className="flex gap-3 flex-wrap">
            {categoryList?.map((element, index) => {
              return (
                <CatergoryButton
                  name={element.categoryName}
                  key={index}
                  index={index}
                />
              );
            })}
          </div>
          {closeDialog ? (
            <></>
          ) : (
            <AddCategoryModal1
              setAddCategory={setAddCategory}
              refetch={refetch}
            />
          )}
        </div>
      </div>
    </div>
  );
};
