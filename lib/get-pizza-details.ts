import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
import { PizzaSize, PizzaType, mapPizzaType } from "@/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

export const getPizzaDetails = (type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>,) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца; ингредиенты: ( ${selectedIngredients.size} )`;

  return { totalPrice, textDetails };
};
