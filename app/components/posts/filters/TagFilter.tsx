import TagFilterComboBox from "@/app/components/posts/filters/TagFilterComboBox";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../PostArea";
import { fetchPostTags } from "@/app/api/dbqueries";

interface ITag {
  tags: string[];
}

interface IUniqueTags {
  value: string;
}

const TagFilter = () => {
  const { setFilters } = useContext(FilterContext) || {};
  const [selected, setSelected] = useState([]);
  const [tags, setTags] = useState<IUniqueTags[]>([{ value: "" }]);

  useEffect(() => {
    const getTags = async () => {
      try {
        const tags = await fetchPostTags();
        const uniqueTags = new Set<string>();

        if (tags && tags.length > 0) {
          tags.forEach((tagsArray: ITag) => {
            tagsArray.tags.forEach((tag) => uniqueTags.add(tag)); // Add each tag to the Set
          });

          const tagsArray: IUniqueTags[] = Array.from(uniqueTags).map(
            (tag) => ({
              value: tag, // Use the tag as the value
            })
          );

          // Corrected closing parenthesis
          setTags(tagsArray);
          // setFilters((prevFilters) => ({ ...prevFilters, tags: tagsArray }));
        }
      } catch (error) {
        console.error("Error fetching tags:", error); // Handle any potential errors
      }
    };

    getTags(); // Call the async function
  }, []);

  useEffect(() => {
    const selected_tags: string[] = [];
    selected.forEach((element: IUniqueTags) =>
      selected_tags.push(element.value)
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      tags_filter: selected_tags,
    }));
  }, [selected, setFilters]); // Added dependencies to useEffect

  return (
    <>
      <TagFilterComboBox
        placeholder="Select Tags..."
        // @ts-expect-error outside order component
        options={tags}
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};

export default TagFilter;
