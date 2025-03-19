"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dispatch, SetStateAction } from "react";
import { IFilters } from "@/app/types/interface";

interface Itopics {
  topic: string;
}

interface IPostFilterComboBox {
  setFilters: Dispatch<SetStateAction<IFilters>>;
  topics: Itopics[];
}

export function PostFilterComboBox({
  setFilters,
  topics,
}: IPostFilterComboBox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  // Ensure alltopics is defined, either through props or const
  const alltopics = topics || []; // Use topics from props or an empty array

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="combobox"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-muted-foreground"
        >
          {value
            ? alltopics.find((atopic) => atopic.topic === value)?.topic
            : "Select Topics..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Topics..." className="h-9" />
          <CommandList>
            <CommandEmpty>No topics found.</CommandEmpty>
            <CommandGroup>
              {alltopics.map((atopic, index) => (
                <CommandItem
                  key={index}
                  value={atopic.topic}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      topic_filter: currentValue, // Use currentValue instead of value
                    }));
                    setOpen(false);
                  }}
                >
                  {atopic.topic}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === atopic.topic ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
