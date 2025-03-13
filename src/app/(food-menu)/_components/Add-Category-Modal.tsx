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
import { ChangeEvent } from "react";

type AddCategoryModalProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddCategory: () => Promise<void>;
};

export const AddCategoryModal = ({
  onChange,
  handleAddCategory,
}: AddCategoryModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-full bg-red-500 p-2">
        <PlusIcon color="white" size="14" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-9 ">
          <DialogTitle>Add new category</DialogTitle>
          <DialogDescription>
            <div>Category name</div>
            <Input onChange={onChange} placeholder="Type category name..." />
          </DialogDescription>
          <DialogDescription className="flex justify-end">
            <Button onClick={handleAddCategory}>Add category</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
