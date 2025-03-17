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
import axios from "axios";

const NEXT_PUBLIC_CLOUDINARY_API_KEY = "838167655913687";
const CLOUDNARY_UPLOAD_PRESENT = "FoodPhoto";
const CLOUDNARY_CLOUD_NAME = "dp1u0n6zb";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDNARY_CLOUD_NAME}/image/upload`;

type AddCategoryModalProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};
type a = {
  file: string;
};

export const AddFoodModal = ({ onChange, onClick }: AddCategoryModalProps) => {
  const [file1, setFile] = useState<string>("");

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files ? event?.target?.files[0] : "";
    const url = URL.createObjectURL(file as Blob);
    setFile(url);
    uploadCloudinary();
    onChange(event);
  };
  const uploadCloudinary = async () => {
    if (!file1) alert("Please insert photo");

    try {
      const file = new FormData();
      file.append("file", file1);
      file.append("upload_present", CLOUDNARY_UPLOAD_PRESENT);
      file.append("api_key", NEXT_PUBLIC_CLOUDINARY_API_KEY);

      const response = await axios.post(CLOUDINARY_URL, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
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
                className="border-dashed h-32"
              />

              <img src={file1} />
            </div>
          </DialogDescription>
          <DialogDescription className="flex justify-end">
            <Button onClick={() => onClick}>Add Dish</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
