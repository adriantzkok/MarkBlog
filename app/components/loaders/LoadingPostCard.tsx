import React from "react";
import { cn } from "@/lib/utils"; // Ensure the import path is correct

interface LoadingPostCardProps {
  className?: string; // Make className optional
}

const LoadingPostCard: React.FC<LoadingPostCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 h-96 w-80 md:h-[26rem] md:min-w-[27rem] border-2 relative",
        className
      )}
    >
      <div className="h-3/5 w-full animate-pulse bg-gray-300 rounded"></div>
      <div className="px-6 pt-3.5 flex flex-col gap-y-2.5">
        <div className="flex flex-col gap-y-0.5">
          <div className="animate-pulse">
            <h2 className="text-s font-light italic bg-gray-300 rounded h-4 w-1/3"></h2>
            <h1 className="sm:text-l text-2xl font-medium bg-gray-300 rounded h-6 w-2/3"></h1>
          </div>
        </div>
        <div className="absolute bottom-5">
          <div className="animate-pulse">
            <span className="text-xs bg-gray-300 rounded-xs h-4 w-16 block"></span>
            <span className="text-xs bg-gray-300 rounded-xs h-4 w-16 block mt-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPostCard;
