"use client";

// import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useEffect } from "react";
import CartDrawerItem from "./CartDrawerItem";
import { getCartItemsDetails } from "@/lib/get-cart-items-details";
// import CartDrawerItem from "./CartDrawerItem";
// import { getCartItemsDetails } from "@/lib/get-cart-items-details";
// import { useCartStore } from "@/store/cart";
// import { PizzaSize, PizzaType } from "@/constants/pizza";

interface Props {
  className?: string;
}

const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  const [totalAmount, fetchCartItems, items] = useCartStore([
    state.totalAmount,
    state.fetchCartItems,
    state.items
  ]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl={"https://"}
              details={getCartItemsDetails(2, 30, [
                { name: "Цыпленок" },
                { name: "Сыр" },
              ])}
              name={"Чоризо фреш"}
              price={10}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
