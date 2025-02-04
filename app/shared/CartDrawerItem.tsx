import { cn } from "@/lib/utils";
import React from "react";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";

import * as CartItem from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";

interface Props extends CartItemProps {
  className?: string;
}
console.log('hi')
const CartDrawerItem: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
  className,
}) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Image src={imageUrl} />

        <div className="flex-1">
          <CartItem.Info name="" />
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;
