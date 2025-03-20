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
        <div key={item.id} className="flex justify-center items-center">
          <div className="flex max-w-lg bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src={item.image}
              alt="Book Cover"
              className="w-1/3 object-cover rounded-lg"
            />

            <div className="p-5 w-2/3">
              <h2 className="text-lg font-bold text-gray-900">
                {item.book_title}
              </h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-5">
                {item.description}
              </p>
              <Link
                href={`/read-full-article/${item.id}?type=book&name=book+categories&title=${item.book_title}`}
              >
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
                  READ FULL ARTICLE
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBookComponent;
