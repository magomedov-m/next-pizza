"use client";

import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { Input } from "@/components/ui/input";
import { RangeSlider } from "./RangeSlider";
import CheckboxFiltersGroup from "./CheckboxFiltersGroup";
import qs from "qs";
import { useRouter } from "next/navigation";
import { useIngredients } from "@/hooks/useIngredients";
import { useFilters } from "@/hooks/useFilters";
import router from "next/router";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const {ingredients, loading} = useIngredients();
  const filters = useFilters()

  

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        name="pizzaTypes"
        className="mb-5"
        title="Тип теста"
        onClickCheckBox={togglePizzatypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckBox={togglePizzatypes}
        selected={pizzaTypes}
        items={[
          { text: "20см", value: "20" },
          { text: "30см", value: "30" },
          { text: "40см", value: "40" },
        ]}
      />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckBox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};

export default Filters;
