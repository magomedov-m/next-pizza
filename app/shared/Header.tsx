import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <div>
        <Container className="flex items-center justify-between py-8">
          {/* Левая часть */}
          <div>
            <Image src="" alt="Logo" width={35} height={35}/>
            <div>
                <h1 className="text-21xl uppercase font-black">Next Pizza</h1>
                <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
