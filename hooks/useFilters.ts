import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useSet } from "react-use";
import { useState } from "react";

interface PriceProps {
  priceFrom: number | undefined;
  priceTo: number | undefined;
}

export interface QueryFilters extends PriceProps {
  selectedIngredients(selectedIngredients: any): unknown;
  prices: any;
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceProps;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {

  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  //   Фильтр ингредиентов
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );
  // Фильтр размеров
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );
  // Фильтр типа пиццы
  const [pizzaTypes, { toggle: togglePizzatypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );
  // Фильтр стоимости
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzatypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
