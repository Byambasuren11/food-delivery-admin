"use client";
import { category, useCategory } from "@/app/provider/Category-Provider";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

type CatergoryButtonProps = {
  name: string;
  index: number;
  categoryId:string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<category[], Error>>;
};

export const CatergoryButton = ({ index, name, categoryId, refetch }: CatergoryButtonProps) => {
  const {deleteCategory}=useCategory();
  const onClick= async (id:string)=>{
    deleteCategory(id);
    await refetch;
  }
  return (
    <Popover>
  <PopoverTrigger key={index}>
    <Button  className="border pl-3 pr-3 rounded-xl border-gray-200 bg-white text-black hover:bg-gray-100" >{name}</Button>
    </PopoverTrigger>
  <PopoverContent>
    <div>
Are you sure delete this category?
    </div>
    <Button onClick={()=>onClick(categoryId)}>Delete</Button>
  </PopoverContent>

</Popover>
  );
};
