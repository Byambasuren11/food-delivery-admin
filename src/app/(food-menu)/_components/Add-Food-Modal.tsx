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
import { PlusIcon } from "lucide-react";
import image from "next/image";
import { ChangeEvent, useState } from "react";

type AddCategoryModalProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};
type a = {
  file: string;
};

export const AddFoodModal = ({ onChange, onClick }: AddCategoryModalProps) => {
  const [file, setFile] = useState([]);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    onChange(event);
  };
  return (
    <Dialog>
      <DialogTrigger className="rounded-full bg-red-500 p-2">
        <PlusIcon color="white" size="14" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-9 ">
          <DialogTitle>Add new Dish to Appetizers</DialogTitle>
          <DialogDescription className="flex flex-col gap-5 p-5">
            <div className="flex gap-3 w-full">
              <div>
                <div>Food name</div>
                <Input
                  placeholder="Type food name"
                  onChange={onChange}
                  name="foodName"
                />
              </div>
              <div>
                <div>Food price</div>
                <Input
                  placeholder="Enter price..."
                  onChange={onChange}
                  name="price"
                />
              </div>
            </div>
            <div className="flex justify-start items-start flex-col">
              <div>Ingredients</div>
              <Input
                placeholder="List ingredients..."
                className="h-20 "
                onChange={onChange}
                name="ingredients"
              />
            </div>
            <div>
              <div>Food image</div>
              <Input
                type="file"
                placeholder="Image"
                onChange={handleFile}
                name="image"
                // onChange={onChange}
                className="border-dashed h-32"
              />

              <img src={file} />
            </div>
          </DialogDescription>
          <DialogDescription className="flex justify-end">
            <Button onClick={onClick}>Add Dish</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
