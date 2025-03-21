"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { PlusIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";

type Category = {
  categoryName: String;
};

type AddCategoryProps = {
  categories: Category[];
};

const AddCategory = (props: AddCategoryProps) => {
  const [categoryName, setCategory] = useState<Category>({
    categoryName: "",
  });
  const [closeDialog, setCloseDialog] = useState(false);
  const { categories } = props;

  const postData = async () => {
    const response = await axios.post(
      `http://localhost:4007/food-category`,
      categoryName
    );
    setCloseDialog(false);
  };

  const handleAddCategory = () => {
    setCloseDialog(true);
    postData();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...categoryName, categoryName: event.target.value });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full rounded-xl p-4 mt-14 flex flex-col gap-3">
        <div>Dishes category</div>
        <div className="flex gap-3">
          <div className="flex gap-3 ">
            {categories?.map((element, index) => {
              return (
                <Button
                  className="border pl-3 pr-3 rounded-xl border-gray-200 bg-white text-black hover:bg-gray-100"
                  key={index}
                >
                  {element.categoryName}
                </Button>
              );
            })}
          </div>
          {closeDialog ? (
            <></>
          ) : (
            <Dialog>
              <DialogTrigger className="rounded-full bg-red-500 p-2">
                <PlusIcon color="white" size="14" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="flex flex-col gap-9 ">
                  <DialogTitle>Add new category</DialogTitle>
                  <DialogDescription>
                    <div>Category name</div>
                    <Input
                      onChange={onChange}
                      placeholder="Type category name..."
                    />
                  </DialogDescription>
                  <DialogDescription className="flex justify-end">
                    <Button onClick={handleAddCategory}>Add category</Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddCategory;
