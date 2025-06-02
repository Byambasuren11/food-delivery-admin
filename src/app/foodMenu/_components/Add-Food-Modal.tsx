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
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PlusIcon } from "lucide-react";
import { FoodType } from "../_features/Add-Food";

type AddCategoryModalProps = {
  onClick: () => void;
  file1: string;
  handleFile: (event: ChangeEvent<HTMLInputElement>) => void;
  setFood: Dispatch<SetStateAction<FoodType>>;
};
const SignupSchema = Yup.object().shape({
  foodName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .moreThan(0, "Must be greater than 0")
    .required("Required"),
  ingredients: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  image: Yup.mixed().required("Required"),
});

export const AddFoodModal = ({
  onClick,
  handleFile,
  file1,
  setFood,
}: AddCategoryModalProps) => {
  return (
    <Formik
      initialValues={{
        foodName: "",
        price: 0,
        ingredients: "",
        image: null,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        setFood(values);
        onClick();
      }}
    >
      {({ errors, setFieldValue }) => (
        <Dialog>
          <DialogTrigger className="rounded-full bg-red-500 p-2">
            <PlusIcon color="white" size="14" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col gap-9 ">
              <DialogTitle>Add new Dish to Appetizers</DialogTitle>
              <DialogDescription>
                <Form className="flex flex-col gap-5 p-5">
                  <div>
                    <label className="block">Food name</label>
                    <Field
                      name="foodName"
                      placeholder="Type food name"
                      className="border rounded-xl p-2 w-full"
                    />
                    {errors.foodName ? (
                      <div className="text-red-500">{errors.foodName}</div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block">Food price</label>
                    <Field
                      name="price"
                      placeholder="Enter price..."
                      className="border rounded-xl p-2 w-full"
                      type="number"
                    />
                    {errors.price ? (
                      <div className="text-red-500">{errors.price}</div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block">Ingredients</label>
                    <Field
                      name="ingredients"
                      placeholder="List ingredients..."
                      className="border rounded-xl p-2 w-full"
                      as="textarea"
                    />
                    {errors.ingredients ? (
                      <div className="text-red-500">{errors.ingredients}</div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block">Food image</label>
                    <input
                      type="file"
                      className="border p-2 w-full rounded-xl"
                      onChange={(event) => {
                        handleFile(event);
                        setFieldValue(
                          "image",
                          event.currentTarget.files?.[0] || null
                        );
                      }}
                    />
                    {errors.image ? (
                      <div className="text-red-500">{errors.image}</div>
                    ) : null}

                    {file1 && (
                      <img
                        src={file1}
                        className="mt-2 w-full h-40 object-cover"
                      />
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Add Dish</Button>
                  </div>
                </Form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </Formik>
  );
};
