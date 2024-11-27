import { Api } from "@/sevices/api-client";
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react";

interface ReturnProps {
    items: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
    const [items, setItems] = useState<Ingredient[]>([]);
    useEffect(() => {
        async function fetchIngredients() {
            try {
                const ingredients = await Api.ingredients.getAll;
                return ingredients
            }catch (error) {
                console.log(error)
            }
        }
        fetchIngredients();
    }, []);

    return { items }
}