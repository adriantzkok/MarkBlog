import React from "react";
import TopicFilter from "./filters/TopicFilter";
import InputFilter from "./filters/InputFilter";
import TagFilter from "./filters/TagFilter";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
const FiltersSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex flex-row items-center gap-1 lg:hidden">
          <Menu size={18} />
          <p>Filters</p>
        </div>
      </SheetTrigger>
      <SheetContent className="mt-24" side={"top"}>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="p-4 flex flex-col gap-y-3">
          <InputFilter />
          <TopicFilter />
          <TagFilter />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FiltersSheet;
