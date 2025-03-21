import { PizzaImage } from "@/components/ui/PizzaImage";
import { cn } from "@/lib/utils";
import { ingredients } from "@/prisma/constants";
import React from "react";
import { Title } from "./Title";
import { Button } from "@/components/ui/button";

interface Props {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
}

const chooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  onClickAdd,
  className,
}) => {
  const textDetails = "30 см, традиционное тесто 30";
  const totalPrice = 350;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div
        className={cn(
          className,
          "flex items-center justify-center flex-1 relative w-full"
        )}
      >
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};

export default chooseProductForm;
