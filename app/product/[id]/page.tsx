import { prisma } from "@/prisma/prismaClient";
import { notFound } from "next/navigation";
import { Container } from "@/app/shared/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { Title } from "@/app/shared/Title";
import GroupVariants from "@/app/shared/GroupVariants";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} className="" size={20} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem
            praesentium recusandae a quidem itaque enim nihil odio modi aliquid
            tenetur reiciendis, corporis, temporibus ipsam vitae sit
            voluptatibus laborum possimus!
          </p>

          <GroupVariants
          selectedValue="2"
            items={[
              {
                name: "Маленькая",
                value: '1',
              },
              {
                name: "Средняя",
                value: '2',
              },
              {
                name: "Большая",
                value: '3',
              },
              
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
