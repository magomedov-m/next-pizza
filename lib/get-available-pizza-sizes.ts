import { Variant } from "@/app/shared/GroupVariants";
import { PizzaSizes, PizzaType } from "@/constants/pizza";
import { ProductItem } from "@prisma/client";

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items?: ProductItem[]
): Variant[] => {
  const filteredPizzasByType = items?.filter((item) => item.pizzaType === type);
  return PizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: filteredPizzasByType?.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
