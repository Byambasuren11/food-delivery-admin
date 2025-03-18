"use client";
import { Button } from "@/components/ui/button";

type CatergoryButtonProps = {
  name: string;
  index: number;
  onClick: () => void;
};

export const CatergoryButton = ({
  index,
  name,
  onClick,
}: CatergoryButtonProps) => {
  return (
    <Button
      className="border pl-3 pr-3 rounded-xl border-gray-200 bg-white text-black hover:bg-gray-100"
      key={index}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
