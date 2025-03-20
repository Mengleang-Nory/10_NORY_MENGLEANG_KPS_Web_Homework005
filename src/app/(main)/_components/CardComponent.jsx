import Link from "next/link";
import React from "react";

const CardComponent = ({ link, imageSrc, tage, discription }) => {
  return (
    <Link href={`/${link}`}>
      <div className="group relative block bg-black w-[350px] h-[500px] rounded-[30px] overflow-hidden">
        <img
          alt=""
          src={imageSrc}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />
        <div className=" inline-flex items-center gap-1 bg-[#f5f7f8] px-3 py-1 rounded-2xl relative z-50 top-4 left-4">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.9365 10.8509L5.9565 13.8709C7.1965 15.1109 9.20984 15.1109 10.4565 13.8709L13.3832 10.9442C14.6232 9.70424 14.6232 7.69091 13.3832 6.44424L10.3565 3.43091C9.72317 2.79758 8.84984 2.45758 7.9565 2.50424L4.62317 2.66424C3.28984 2.72424 2.22984 3.78424 2.16317 5.11091L2.00317 8.44424C1.96317 9.34424 2.30317 10.2176 2.9365 10.8509Z"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.48985 8.65096C7.41032 8.65096 8.15651 7.90477 8.15651 6.98429C8.15651 6.06382 7.41032 5.31763 6.48985 5.31763C5.56937 5.31763 4.82318 6.06382 4.82318 6.98429C4.82318 7.90477 5.56937 8.65096 6.48985 8.65096Z"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8.82318 11.9843L11.4898 9.31763"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-bold text-[#087E8B]">{tage}</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <h1 className=" text-white w-[100px] text-3xl font-bold mt-[150px]">
              {discription}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
