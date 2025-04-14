"use client";
import React, { useState, createContext } from "react";
import FilterPostContainer from "@/src/app/components/posts/FilterPostContainer";
import LongPostContainer from "@/src/app/components/posts/LongPostContainer";
import { IFilters, IFilterContext } from "@/lib/types/interface";

// Create the FilterContext with the correct type
export const FilterContext = createContext<IFilterContext>({
  filters: { input_filter: "", topic_filter: "", tags_filter: [] },
  setFilters: () => {}, // Placeholder function
});

const PostArea = ({
  input_filter = "",
  topic_filter = "",
  tags_filter = [],
}: IFilters) => {
  const [filters, setFilters] = useState<IFilters>({
    input_filter: input_filter,
    topic_filter: topic_filter,
    tags_filter: tags_filter,
  });
  return (
    <>
      <div className="p-6 border-2 relative">
        <FilterContext.Provider value={{ filters, setFilters }}>
          <FilterPostContainer />
        </FilterContext.Provider>
      </div>
      {<LongPostContainer filters={filters} />}
    </>
  );
};

export default PostArea;
