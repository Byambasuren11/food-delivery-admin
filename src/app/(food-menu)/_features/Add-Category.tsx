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

const AddCategory = () => {
  const [categoryName, setCategory] = useState({});
  const postData = async () => {
    const response = await axios.post(
      `http://localhost:4007/food-category`,
      categoryName
    );
    console.log("post", response);
  };
  const handleAddCategory = () => {
    postData();
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...categoryName, categoryName: event.target.value });
  };
  return (
    <div className="flex justify-center">
      <div className="bg-white w-[80%] rounded-xl p-4 mt-14">
        <div>Dishes category</div>
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
      </div>
    </div>
  );
};
export default AddCategory;
