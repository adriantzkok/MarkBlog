import { Input } from "@/components/ui/input";
import { FilterContext } from "../PostArea"; // Ensure the path is correct
import { useContext } from "react";
import { IFilterContext } from "@/app/types/interface";

const InputFilter = () => {
  const { filters, setFilters }: IFilterContext = useContext(FilterContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      input_filter: value, // Use input_filter instead of input
    }));
  };

  return (
    <>
      <Input
        className="w-3/6 border-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Posts..."
        value={filters?.input_filter || ""} // Access input_filter instead of input
        onChange={handleChange}
      />
    </>
  );
};

export default InputFilter;
