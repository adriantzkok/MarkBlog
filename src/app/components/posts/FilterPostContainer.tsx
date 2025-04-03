"use client";
import InputFilter from "@/src/app/components/posts/filters/InputFilter";
import TagFilter from "@/src/app/components/posts/filters/TagFilter";
import TopicFilter from "@/src/app/components/posts/filters/TopicFilter";
import FiltersSheet from "@/src/app/components/posts/FiltersSheet";
import { useTranslations } from "next-intl";

const FilterPostContainer = () => {
  const t = useTranslations("PostsPage");

  return (
    <div className="flex flex-row justify-between items-center">
      <h1>{t("allPosts")}</h1>
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
