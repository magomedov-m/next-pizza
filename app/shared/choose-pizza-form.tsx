"use client";
import { PizzaImage } from "@/components/ui/PizzaImage";
import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./Title";
import { Button } from "@/components/ui/button";
import GroupVariants from "./GroupVariants";
import {
  PizzaSize,
  PizzaType,
  PizzaTypes,
} from "@/constants/pizza";
import IngredientItem from "./Ingredient-item";
import { Ingredient, ProductItem } from "@prisma/client";
import { usePizzaOptions } from "@/hooks/use-pizza-options";
import { getPizzaDetails } from "@/lib/get-pizza-details";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items?: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAddCart,
  className,
}) => {

  const { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient } = usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(type, size, items!, ingredients, selectedIngredients);

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log("это данные консоля лог", {
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 my-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={PizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto crollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
