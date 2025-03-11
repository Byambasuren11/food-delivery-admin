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

export const AddFood = (props) => {
  const { categories } = props;
  return (
    <>
      <div className="flex flex-col gap-6">
        {categories?.map((element, index) => {
          return (
            <div
              key={index}
              className="h-fit p-5 bg-white rounded-xl w-full flex flex-col gap-3"
            >
              {element.categoryName}
              <div className="border-dashed border-red-600 border w-[200px] h-[200px] rounded-xl flex flex-col justify-center items-center">
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
                            <Input placeholder="Type food name" />
                          </div>
                          <div>
                            <div>Food price</div>
                            <Input placeholder="Enter price..." />
                          </div>
                        </div>
                        <div className="flex justify-start items-start flex-col">
                          <div>Ingredients</div>
                          <Input
                            placeholder="List ingredients..."
                            className="h-20 "
                          />
                        </div>
                        <div>
                          <div>Food image</div>
                          <Input
                            placeholder=""
                            className="border-dashed h-32"
                          />
                        </div>
                      </DialogDescription>
                      <DialogDescription className="flex justify-end">
                        <Button>Add Dish</Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <div className="text-xs w-28 ">Add new Dish to Salads </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
