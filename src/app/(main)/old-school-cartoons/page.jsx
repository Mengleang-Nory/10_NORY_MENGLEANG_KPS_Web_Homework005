import React from "react";

import ContainerComponent from "../_components/ContainerComponent";
import NameComponent from "../_components/NameComponent";
import FilterComponent from "../_components/FilterComponent";
import {
  getAllCartoon,
  getAllCartoonGenre,
  getCartoonGenreById,
} from "@/service/book.service";
import CardCartoonComponent from "./_component.jsx/CardCartoonComponent";

const OldSchoolCartoonsPage = async ({ searchParams }) => {
  const path = await searchParams;
  let pathName = "Old School Cartoons";
  const OldSchoolCartoonsGenre = await getAllCartoonGenre();
  const cartoons = await getAllCartoon();

  if (path.genre != undefined) {
    const cartoonGenreById = await getCartoonGenreById(path.genre);
    pathName = cartoonGenreById.payload.cartoon_genre;
  }

  // console.log(path);
  return (
    <ContainerComponent>
      <section className="flex items-end justify-between absolute top-0 left-[40px] right-[40px] h-[100px] rounded-t-4xl border-b-1 border-[#087E8B] pb-2 ">
        <NameComponent pathName={pathName} />
        <FilterComponent
          Category={OldSchoolCartoonsGenre}
          CategoryName={"cartoon_genre"}
        />
      </section>
      <section className="w-[1280px] h-[600px] overflow-auto mt-[100px] flex flex-wrap items-center justify-start gap-[80px]">
        <CardCartoonComponent cartoons={cartoons} />
      </section>
    </ContainerComponent>
  );
};

export default OldSchoolCartoonsPage;
