"use client";
import TopicFilter from "./filters/TopicFilter";
import InputFilter from "./filters/InputFilter";
import TagFilter from "./filters/TagFilter";

const FilterPostContainer = () => {
  return (
    <div className="flex flex-row items-center w-full bg-gray-100 rounded-lg max-w-2/3">
      <InputFilter />
      <TopicFilter />
      <TagFilter />
    </div>
  );
};

export default FilterPostContainer;
