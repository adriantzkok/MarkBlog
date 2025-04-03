"use client";
import React, { useEffect, useState } from "react";
import { parseMarkdown } from "@/lib/utils";

interface ContentWrapperProps {
  markdown_content: string; // Define the prop type
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  markdown_content,
}) => {
  const [content, setContent] = useState<string>(""); // Specify the state type

  useEffect(() => {
    const fetchData = async () => {
      const clean = await parseMarkdown(markdown_content);
      // @ts-expect-error fix error letter
      setContent(clean.value);
    };

    fetchData(); // Call the inner async function
  }, [markdown_content]); // Include markdown_content in the dependency array

  return (
    <div
      className="prose w-full max-w-none px-10"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default ContentWrapper;
