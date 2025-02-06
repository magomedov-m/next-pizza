import { prisma } from "@/prisma/prismaClient";
import { notFound } from "next/navigation";
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
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
