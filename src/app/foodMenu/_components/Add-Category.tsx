"use client";
import {
  QueryClient,
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import axios from "axios";
import { PlusIcon, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AddCatergoryModalProps = {
  setAddCategory: Dispatch<SetStateAction<boolean>>;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
};

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

export const AddCategoryModal1 = ({
  setAddCategory,
  refetch,
}: AddCatergoryModalProps) => {
  const [newCategory, setNewCategory] = useState("");
  const queryClient = new QueryClient();

  const { mutate: addCategory, isPending } = useMutation({
    mutationFn: async ({ name }: { name: string }) => {
      await axios.post("http://localhost:4007/food-category", {
        categoryName: name,
      });
    },
    onSuccess: async () => {
      setAddCategory(false);

      // await timeout(3000);
      await queryClient.refetchQueries({
        queryKey: ["categories"],
        type: "active",
      });

      // await refetch();

      toast("🦄 Successfully added category", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    onError: (err) => {
      toast.error(err?.message || "Failed to add category", {
        position: "top-right",
        autoClose: 3000,
      });
    },
  });

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
            <Input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Type category name..."
            />
          </DialogDescription>
          <DialogDescription className="flex justify-end">
            <Button
              className="ml-[320px] rounded-[5px] mt-[50px] bg-black text-white px-[15px] py-[10px]"
              onClick={() => {
                addCategory({ name: newCategory });
              }}
              disabled={isPending}
            >
              {isPending ? "Adding..." : "Add category"}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
