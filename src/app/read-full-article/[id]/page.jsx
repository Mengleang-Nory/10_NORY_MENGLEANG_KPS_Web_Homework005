import React from "react";
import { DetailComponent } from "../_components/DetailComponent";
import { getBookById, getCartoonById } from "@/service/book.service";
import Link from "next/link";

const DetailPage = async ({ params, searchParams }) => {
  const { id } = params; // Get item.id from URL
  const { type, name, title } = searchParams; // Extract query params

  let data;

  let image;
  let titleDetail;
  let authorName;
  let viewDetail;
  let publishedYear;
  let description;

  const splitYear = (published_year) => {
    return published_year.split("-")[0];
  };

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
      <section>
        <Link href={"/"}>Home</Link>
        <Link
          href={type == "book" ? "/book-categories" : "/old-school-cartoons"}
        >
          {type == "book" ? "Book Categories" : "Old School cartoons"}
        </Link>
        <span>{title}</span>
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
