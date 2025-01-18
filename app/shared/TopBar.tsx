import React from "react";
import { cn } from "@/lib/utils";
import Categories from "./Categories";
import { Container } from "./Container";
import SortPopup from "./SortPopup";
import { Category } from "@prisma/client";
import { categories } from "@/prisma/constants";

interface Props {
  categories: Category[];
  className?: string;
}

const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className={cn("flex items-center justify-between", className)}>
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
