import React from "react";
import SpecificPostCard from "@/app/components/main/SpecificPostCard";
const SelectedPosts = () => {
  return (
    <div className="flex flex-row md:grid md:grid-cols-3 gap-5 overflow-x-auto max-w-full">
      <SpecificPostCard
        linkclassName="col-span-2 md:h-full md:w-full"
        className="sm: w-[30rem] md:w-full"
        id={53}
      />
      <SpecificPostCard className="md:w-full md:h-full" id={36} />
    </div>
  );
};

export default SelectedPosts;
