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
import { ChevronRightCircleIcon, PlusIcon } from "lucide-react";

const AddCategory = () => {
  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger className="rounded-full bg-red-500 p-2">
            <PlusIcon color="white" size="14" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col gap-9 ">
              <DialogTitle>Add new category</DialogTitle>
              <DialogDescription>
                <div>Category name</div>
                <Input placeholder="Type category name..." />
              </DialogDescription>
              <DialogDescription className="flex justify-end">
                <Button>Add category</Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
export default AddCategory;
