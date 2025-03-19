"use client";
import React, { useState, useEffect, createContext } from "react";
import FilterPostContainer from "@/app/components/posts/FilterPostContainer";
import LongPostContainer from "@/app/components/posts/LongPostContainer";
import { fetchBlogsCount, fetchBlogs } from "@/app/api/dbqueries";
import { IFilters, IFilterContext, IPostMetadata } from "@/app/types/interface";

// Create the FilterContext with the correct type
export const FilterContext = createContext<IFilterContext>({
  filters: { input_filter: "", topic_filter: "", tags_filter: [] },
  setFilters: () => {}, // Placeholder function
});

const PostArea = ({
  input_filter = "",
  topic_filter = "",
  tags_filter = [],
}: IFilters) => {
  const [posts, setPosts] = useState<IPostMetadata[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPostMetadata[]>([]);
  const [pagination, setPagination] = useState<{ start: number; end: number }>({
    start: 0,
    end: 10,
  });
  const [postsLoadExceeded, setPostsLoadExceeded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [filters, setFilters] = useState<IFilters>({
    input_filter: input_filter,
    topic_filter: topic_filter,
    tags_filter: tags_filter,
  });
  const fetchPosts: () => Promise<void> = async () => {
    try {
      setLoading(true);
      const fetchedBlogCount = await fetchBlogsCount();
      if (fetchedBlogCount) {
        const fetchedPosts = await fetchBlogs(pagination.start, pagination.end);
        setPosts((prevPosts) => [...prevPosts, ...(fetchedPosts || [])]);
      }

      setPagination((prevPagination) => ({
        start: prevPagination.end + 1,
        end: prevPagination.end + 10,
      }));
      setPostsLoadExceeded(pagination.end > (fetchedBlogCount || 0));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let updatedFilteredPosts: IPostMetadata[] = posts;

    if (filters.input_filter) {
      updatedFilteredPosts = updatedFilteredPosts.filter((post) =>
        post.title.includes(filters.input_filter)
      );
    }

    if (filters.topic_filter) {
      updatedFilteredPosts = updatedFilteredPosts.filter((post) =>
        post.topic.includes(filters.topic_filter)
      );
    }

    if (filters.tags_filter && filters.tags_filter.length > 0) {
      updatedFilteredPosts = updatedFilteredPosts.filter((post) =>
        post.tags.some((tag) => filters.tags_filter.includes(tag))
      );
    }

    setFilteredPosts(updatedFilteredPosts);
  };

  // Fetch posts on initial mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts whenever the filters or original posts update
  useEffect(() => {
    filterPosts();
  }, [filters, posts]);

  return (
    <>
      <div className="p-6 border-2 relative">
        <div className="flex flex-row justify-between">
          <h1>All POSTS</h1>
          <FilterContext.Provider value={{ filters, setFilters }}>
            <FilterPostContainer />
          </FilterContext.Provider>
        </div>
      </div>
      {!loading && (
        <LongPostContainer
          posts={filteredPosts}
          fetchPosts={fetchPosts}
          loadStatus={loading}
          postExceeded={postsLoadExceeded}
        />
      )}
    </>
  );
};

export default PostArea;
