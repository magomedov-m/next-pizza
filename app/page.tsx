import {Container} from "./shared/Container";
import { Title } from "./shared/Title";
import "./globals.css";
import TopBar from "./shared/TopBar";

export default function Home() {
  return <>
  
    <Container className="mt-10">
      <Title text='Все пиццы' size='lg' className='font-extrabold' />
      <TopBar />
    </Container>
  
  </>;
}
