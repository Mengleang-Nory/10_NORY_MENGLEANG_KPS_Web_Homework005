"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const CardBookComponent = ({ books }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const search = searchParams.get("search");

  if (query != null) {
    books.payload = books.payload.filter((item) => item.book_cate_id == query);
  }

  if (search != null) {
    books.payload = books.payload.filter((item) =>
      item.book_title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      {books.payload.map((item) => (
        <div key={item.id} className="flex justify-center items-center mt-14">
          <div className="flex max-w-lg bg-white shadow-lg rounded-2xl p-[50px] relative">
            <img
              src={item.image}
              alt="Book Cover"
              className="w-[175px] object-cover rounded-lg absolute top-[-50px]"
            />

            <div className="p-5 w-2/3 h-[200px] relative right-[-175px]">
              <h2 className="text-lg font-bold text-gray-900">
                {item.book_title}
              </h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-6">
                {item.description}
              </p>
            </div>
            <Link
              href={`/read-full-article/${item.id}?type=book&name=book+categories&title=${item.book_title}`}
              className=" absolute bottom-[20px]"
            >
              <button className="mt-4 px-4 py-2 bg-[#BFD7EA] text-[#0B3954] text-sm font-semibold rounded-3xl hover:bg-[#087E8B] hover:text-white transition cursor-pointer">
                READ FULL ARTICLE
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBookComponent;
