"use client";

import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useClickAway } from "react-use";
import Link from "next/link";

interface Props {
  className?: string;
}

const SearchInputField: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  })
  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>}

        <div
          className={cn(
            "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
            className
          )}
        >
          <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
          <input
            className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
            type="text"
            placeholder="Найти пиццу..."
            onFocus={() => setFocused(true)}
            ref={ref}
          />

          <div className={cn('absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
          focused && 'visible opacity-100 top-12')}>
            <Link  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10" href={'/product/1'}>
              <img className="rounded-sm h-8 w-8" src="https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif" alt="Пицца 1" width={32} height={32}/>
              <div>
                Пицца 1
              </div>
            </Link>
          </div>
        </div>
    </>
  );
};

export default SearchInputField;