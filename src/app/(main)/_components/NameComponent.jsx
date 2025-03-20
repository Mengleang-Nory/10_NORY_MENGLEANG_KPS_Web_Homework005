"use client";
import { useSearchParams } from "next/navigation";

const NameComponent = ({ pathName }) => {
  // const searchParams = useSearchParams();

  // const query = searchParams.get("query");
  // if (query != null) {
  //   pathName = query;
  // }

  return (
    <span className="text-[#087E8B] text-[15px] bg-[#f5f7f8] py-[15px] px-[30px] font-bold rounded-2xl">
      {pathName}
    </span>
  );
};

export default NameComponent;
