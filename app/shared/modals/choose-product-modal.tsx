import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { DialogContent, Title } from "@radix-ui/react-dialog";
import React from "react";

interface Props {
  product: Product;
  className?: string;
}

const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden"
        )}
      >
        <Title>{product.name}</Title>
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
