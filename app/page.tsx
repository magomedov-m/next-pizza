import { Container } from "./shared/Container";
import { Title } from "./shared/Title";
import "./globals.css";
import TopBar from "./shared/TopBar";
import Filters from "./shared/Filters";
import ProductsGroupList from "./shared/ProductsGroupList";
import { prisma } from "@/prisma/prismaClient";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  console.log(categories)

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name} 
                      categoryId={category.id}
                      items={category.products} 
                      
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
