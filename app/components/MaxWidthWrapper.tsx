import React from "react";
import { cn } from "@/lib/utils";

interface MaxWidthProps {
  className: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthProps) => {
  return (
    <div className={cn("px-7 md:px-16 w-full my-12 max-w-screen", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
