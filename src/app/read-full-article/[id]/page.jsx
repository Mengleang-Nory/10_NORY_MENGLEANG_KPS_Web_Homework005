import React from "react";
import { DetailComponent } from "../_components/DetailComponent";
import { getBookById, getCartoonById } from "@/service/book.service";
import Link from "next/link";

const DetailPage = async ({ params, searchParams }) => {
  const { id } = params;
  const { type, name, title } = searchParams;

  let data;

  let image;
  let titleDetail;
  let authorName;
  let viewDetail;
  let publishedYear;
  let description;

  if (type == "book") {
    data = await getBookById(id);
    image = data.payload.image;
    titleDetail = data.payload.book_title;
    authorName = data.payload.book_author;
    viewDetail = "";
    publishedYear = "";
    description = data.payload.description;
  }

  if (type == "cartoon") {
    data = await getCartoonById(id);
    image = data.payload.image;
    titleDetail = data.payload.ct_title;
    authorName = data.payload.ct_creator;
    viewDetail = data.payload.view_count;
    publishedYear = data.payload.published_year;
    description = data.payload.ct_description;
  }

  return (
    <section>
      <section className="flex items-center relative top-[100px] left-[80px] w-[1000px]">
        <Link
          href="/"
          className="group flex flex-row justify-start items-center gap-x-5 px-5 py-7 rounded-2xl w-auto h-[28px] hover:bg-gray-100 transition-colors duration-200"
        >
          <img
            className="w-[24px] h-[24px] group-hover:hidden"
            src="/homeLogo.svg"
            alt="Home"
          />
          <img
            className="w-[24px] h-[24px] hidden group-hover:block"
            src="/linkLogo.svg"
            alt="Home Hover"
          />
          <h5 className="w-auto">Home</h5>
        </Link>

        <img
          className="w-[24px] h-[24px]"
          src="/arrowRight.svg"
          alt="arrow icon"
        />
        <Link
          href={type == "book" ? "/book-categories" : "/old-school-cartoons"}
          className="group flex flex-row justify-start items-center gap-x-5 px-5 py-7 rounded-2xl w-auto h-[28px] hover:bg-gray-100 transition-colors duration-200"
        >
          <img
            className="w-[24px] h-[24px] group-hover:hidden"
            src="/bookLogo.svg"
            alt="Home"
          />
          <img
            className="w-[24px] h-[24px] hidden group-hover:block"
            src="/linkLogo.svg"
            alt="Home Hover"
          />
          <h5 className="w-auto">
            {type == "book" ? "Book Categories" : "Old School cartoons"}
          </h5>
        </Link>
        <img
          className="w-[24px] h-[24px]"
          src="/arrowRight.svg"
          alt="arrow icon"
        />
        <div
          href="/all-book"
          className={`flex flex-row justify-start items-center gap-x-5 px-5 py-7 rounded-2xl w-auto h-[28px]`}
        >
          <img
            className="w-[24px] h-[24px]"
            src="/readBookLogo.svg"
            alt="book categories"
          />
          <h5 className="text-[#C81D25] w-auto">{titleDetail}</h5>
        </div>
      </section>
      <DetailComponent
        image={image}
        titleDetail={titleDetail}
        authorName={authorName}
        viewDetail={viewDetail}
        publishedYear={publishedYear}
        description={description}
      />
    </section>
  );
};

export default DetailPage;
