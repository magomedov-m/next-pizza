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
        }
      }
    }
  })
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
              <ProductsGroupList title="Пиццы" categoryId={1} items={[{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 2,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 3,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 4,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 5,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 6,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 7,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },]} 
              />

              <ProductsGroupList title="Комбо" categoryId={2} items={[{
                id: 8,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 9,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 10,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 11,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 12,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 13,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 14,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },]} 
              />

              <ProductsGroupList title="Закуски" categoryId={3} items={[{
                id: 15,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 16,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 17,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 18,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 19,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 20,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 21,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                price: 550,
                items: [{ price: 550 }]
              },]} 
              />
              </div>
          </div>
        </div>
      </Container>
    </>
  );
}
