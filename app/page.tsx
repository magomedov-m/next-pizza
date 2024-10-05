import { Button } from "@/components/ui/button";
import {Container} from "./shared/Container";
import Categories from "./shared/categories";
import { Title } from "./shared/Title";
import "./globals.css";

export default function Home() {
  return <>
  
    <Container className="mt-10">
      <Title text='Все пиццы' size='lg' className='font-extrabold' />
      <Categories />
    </Container>
  
  </>;
}
