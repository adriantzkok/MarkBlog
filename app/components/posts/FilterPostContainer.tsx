"use client";
import TopicFilter from "./filters/TopicFilter";
import InputFilter from "./filters/InputFilter";
import TagFilter from "./filters/TagFilter";
import FiltersSheet from "./FiltersSheet";

const FilterPostContainer = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1>All POSTS</h1>
      <div className="hidden lg:flex lg:flex-row lg:gap-x-6 items-center w-full bg-gray-100 rounded-lg max-w-2/3 p-4">
        <InputFilter />
        <TopicFilter />
        <TagFilter />
      </div>
      <div className="lg:hidden">
        <FiltersSheet />
      </div>
    </div>
  );
};

export default FilterPostContainer;
