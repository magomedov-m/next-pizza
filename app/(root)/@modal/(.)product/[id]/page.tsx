'use client'

import { prisma } from "@/prisma/prismaClient";
import { notFound } from "next/navigation";
import { Container } from "@/app/shared/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { Title } from "@/app/shared/Title";
import GroupVariants from "@/app/shared/GroupVariants";
import ChooseProductModal from "@/app/shared/modals/choose-product-modal";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />
}
