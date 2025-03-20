import React from "react";
import ContainerComponent from "../_components/ContainerComponent";
import NameComponent from "../_components/NameComponent";
import FilterComponent from "../_components/FilterComponent";
import {
  getAllBook,
  getAllBookCategory,
  getBookCategoryById,
} from "@/service/book.service";
import CardBookComponent from "./_components/CardBookComponent";

const BookCategoryPage = async ({ searchParams }) => {
  let pathName = "All Book";
  const path = await searchParams;

  const bookCategory = await getAllBookCategory();
  const books = await getAllBook();

  if (path.query != undefined) {
    const bookCategoryById = await getBookCategoryById(path.query);
    pathName = bookCategoryById.payload.book_cate_name;
  }

  return (
    <ContainerComponent>
      <section className="flex items-end justify-between absolute top-0 left-[40px] right-[40px] h-[100px] rounded-t-4xl border-b-1 border-[#087E8B] pb-2 ">
        <NameComponent pathName={pathName} />
        <FilterComponent
          Category={bookCategory}
          CategoryName="book_cate_name"
        />
      </section>
      <section className="w-[1280px] h-[600px] overflow-auto mt-[100px] flex flex-wrap items-center justify-start gap-[80px]">
        <CardBookComponent books={books} />
      </section>
    </ContainerComponent>
  );
};

export default BookCategoryPage;
