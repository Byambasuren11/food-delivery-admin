"use client";
import { category } from "@/app/provider/Category-Provider";
import { Button } from "@/components/ui/button";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

type CatergoryButtonProps = {
  name: string;
  index: number;
  categoryId: string;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<category[], Error>>;
};

export const CatergoryButton = ({ name }: CatergoryButtonProps) => {
  return (
    <Button className="border pl-3 pr-3 rounded-xl border-gray-200 bg-white text-black ">
      {name}
    </Button>
  );
};
