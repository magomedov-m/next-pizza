import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "lucide-react";
import SearchInput from "./SearchInputField";
import CartButton from "./CartButton";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <div>
        <Container className="flex items-center justify-between py-8">
          {/* Левая часть */}
          <Link href="/">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Logo" width={35} height={35} />
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

            <CartButton />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
