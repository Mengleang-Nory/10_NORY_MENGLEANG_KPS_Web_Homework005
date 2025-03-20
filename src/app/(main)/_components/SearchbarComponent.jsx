"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchbarComponent = () => {
  const [value, setValue] = useState("");

  const pathName = usePathname();

  const rounter = useRouter();

  const handleSumit = (e) => {
    e.preventDefault();

    rounter.push(`${pathName}?search=${value}`);
  };

  return (
    <form onSubmit={handleSumit}>
      <search className="relative top-[40px] left-[454px] bg-white rounded-4xl w-[1400px]">
        <svg
          className="absolute top-[20px] left-[20px]"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9704 21.75C6.16797 21.75 1.44386 17.15 1.44386 11.5C1.44386 5.85 6.16797 1.25 11.9704 1.25C17.7728 1.25 22.497 5.85 22.497 11.5C22.497 17.15 17.7728 21.75 11.9704 21.75ZM11.9704 2.75C7.01009 2.75 2.98433 6.68 2.98433 11.5C2.98433 16.32 7.01009 20.25 11.9704 20.25C16.9307 20.25 20.9565 16.32 20.9565 11.5C20.9565 6.68 16.9307 2.75 11.9704 2.75Z"
            fill="#B9B9B9"
          />
          <path
            d="M22.7537 22.7499C22.5586 22.7499 22.3634 22.6799 22.2094 22.5299L20.1554 20.5299C19.8576 20.2399 19.8576 19.7599 20.1554 19.4699C20.4533 19.1799 20.9462 19.1799 21.244 19.4699L23.298 21.4699C23.5958 21.7599 23.5958 22.2399 23.298 22.5299C23.1439 22.6799 22.9488 22.7499 22.7537 22.7499Z"
            fill="#B9B9B9"
          />
        </svg>
        <input
          className="relative py-[20px] pl-[60px] w-[100%]"
          type="text"
          placeholder="Search any things you want to"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </search>
    </form>
  );
};

export default SearchbarComponent;
