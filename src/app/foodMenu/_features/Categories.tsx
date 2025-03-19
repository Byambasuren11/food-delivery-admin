"use client";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { AddCategoryModal } from "../_components/Add-Category-Modal";
import { CatergoryButton } from "../_components/CategoryButton";

type Category = {
  categoryName: string;
};

type AddCategoryProps = {
  categories: Category[];
};

export const Categories = (props: AddCategoryProps) => {
  const [categoryName, setCategory] = useState<Category>({
    categoryName: "",
  });
  const [closeDialog, setCloseDialog] = useState(false);
  const { categories } = props;

  const handleAddCategory = async () => {
    setCloseDialog(true);
    await axios.post(`http://localhost:4007/food-category`, categoryName);
    setCloseDialog(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...categoryName, categoryName: event.target.value });
  };

  const onClick = () => {};

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full rounded-xl p-4 mt-14 flex flex-col gap-3">
        <div>Dishes category</div>
        <div className="flex gap-3">
          <div className="flex gap-3 ">
            {categories?.map((element, index) => {
              return (
                <CatergoryButton
                  name={element.categoryName}
                  key={index}
                  index={index}
                  onClick={onClick}
                />
              );
            })}
          </div>
          {closeDialog ? (
            <></>
          ) : (
            <AddCategoryModal
              onChange={onChange}
              handleAddCategory={handleAddCategory}
            />
          )}
        </div>
      </div>
    </div>
  );
};
