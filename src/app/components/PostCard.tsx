import React from "react";
import ImageFillWrapper from "@/src/app/components/ImageFillWrapper";
import { cn } from "@/lib/utils";
import LoadingPostCard from "@/src/app/components/loaders/LoadingPostCard";
interface IPostCard {
  topic?: string; // Make topic optional
  title?: string; // Make title optional
  tags?: string[]; // Make tags optional
  image_link?: string; // Make image_link optional
  loading: boolean; // Loading state is required
  className?: string; // Optional className
}

const PostCard = ({
  topic,
  title,
  tags,
  image_link,
  className,
  loading,
}: IPostCard) => {
  let displayTitle = title; // Use a new variable to store the modified title
  if (title && title.length > 42) {
    displayTitle = title.slice(0, 40) + "..."; // Use slice for string manipulation
  }
  return loading ? (
    <LoadingPostCard className={className} />
  ) : (
    <div
      className={cn(
        "flex-shrink-0 h-96 w-80 md:h-[26rem] lg:min-w-[27rem] border-2 relative",
        className // Ensure className is included
      )}
    >
      <div className="h-3/5 w-full relative">
        <ImageFillWrapper image_link={image_link}></ImageFillWrapper>
      </div>
      <div className="px-6 pt-3.5 flex flex-col gap-y-2.5">
        <div className="flex flex-col gap-y-0.5">
          <h2 className="text-s font-light italic">{topic}</h2>
          <h1 className="sm:text-l text-2xl font-medium ">{displayTitle}</h1>
        </div>
        <div className=" absolute bottom-5">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs me-2 rounded-xs bg-gray-200 px-3 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
