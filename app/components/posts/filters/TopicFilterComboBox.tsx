"use client"; // This directive should be at the very top of your file

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
import { useContext } from "react";
import { FilterContext } from "@/app/components/posts/PostArea";

interface Itopics {
  topic: string;
}

interface ITopicFilterComboBox {
  topics: Itopics[];
}

export function TopicFilterComboBox({ topics }: ITopicFilterComboBox) {
  const { setFilters } = useContext(FilterContext) || {};

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const alltopics = topics || [];
  console.log(value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="combobox"
          role="combobox"
          aria-expanded={open}
          className="lg:w-[200px] justify-between text-muted-foreground"
        >
          {value
            ? alltopics.find((atopic) => atopic.topic === value)?.topic
            : "Select Topics..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lg:w-[200px] p-0">
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
                    if (currentValue === value) {
                      setValue("");
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        topic_filter: "",
                      }));
                    } else {
                      setValue(currentValue);
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        topic_filter: currentValue,
                      }));
                    }
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
