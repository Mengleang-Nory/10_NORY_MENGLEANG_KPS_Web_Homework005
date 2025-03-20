"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

const FilterComponent = ({ Category, CategoryName }) => {
  const pathName = usePathname();

  const router = useRouter();

  const getPathName = (pathName) => {
    return pathName == "/book-categories" ? "query" : "genre";
  };

  const handleSelect = (itemId) => {
    router.push(`${pathName}?${getPathName(pathName)}=${itemId}`);
  };

  return (
    <>
      <section>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter by Category</SelectLabel>
              {Category?.payload?.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item[CategoryName]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
    </>
  );
};

export default FilterComponent;
