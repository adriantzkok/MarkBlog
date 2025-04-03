import React from "react";
import { cn } from "@/lib/utils";

interface ILeftRightLayout {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  childrenClassName: string;
}

export default function LeftRightLayout({
  title,
  subtitle,
  children,
  childrenClassName,
}: ILeftRightLayout) {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Title and Subtitle Section */}
      <div className="flex flex-col md:basis-1/5">
        <h1 className="font-semibold text-2xl text-center md:text-left">
          {title?.toUpperCase()}
        </h1>
        {subtitle && <p className="text-m">{subtitle}</p>}
      </div>

      {/* Children Section */}
      <div
        className={cn(
          "md:basis-4/5 mt-9 md:mt-0 w-full overflow-x-auto",
          childrenClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
