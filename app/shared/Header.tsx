import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";
import { Button } from "../../components/ui/Index";
import Link from "next/link";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import SearchInput from "./SearchInputField";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <div>
        <Container className="flex items-center justify-between py-8">
          {/* Левая часть */}
          <Link href='/'>
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo" width={35} height={35} />
              <div>
                <h1 className="text-21xl uppercase font-black">Next Pizza</h1>
                <p className="text-sm text-gray-400 leading-3">
                  вкусней уже некуда
                </p>
              </div>
            </div>
          </Link>

          <div className="mx-10 flex-1">
            <SearchInput />
          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-1">
            <Button variant="outline" className="flex items-center gap-3">
              <User size={16} />
              Войти
            </Button>
            <div>
              <Button className="group relative">
                <b>520 ₽</b>
                <span className="h-full w-[1px] bg-white/30 mx-3" />
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                  <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                  <b>3</b>
                </div>
                <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
