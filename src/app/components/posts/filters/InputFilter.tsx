import { Input } from "@/components/ui/input";
import { FilterContext } from "@/src/app/components/posts/PostArea";
import { useContext } from "react";
import { IFilterContext } from "@/src/app/types/interface";

const InputFilter = () => {
  const { filters, setFilters }: IFilterContext = useContext(FilterContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      input_filter: value,
    }));
  };

  return (
    <>
      <Input
        className="lg:w-3/6 border-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Posts..."
        value={filters?.input_filter || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default InputFilter;
