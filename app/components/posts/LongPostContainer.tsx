"use client";
import PostCard from "../PostCard";
import Link from "next/link";
import { ChevronsDown } from "lucide-react";
import { IPostMetadata } from "@/app/types/interface";
import { fetchBlogsCount, fetchBlogs } from "@/app/api/dbqueries";
import React, { useState, useEffect } from "react";
import { IFilters } from "@/app/types/interface";

const LongPostContainer: React.FC<{ filters: IFilters }> = ({ filters }) => {
  const [posts, setPosts] = useState<IPostMetadata[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPostMetadata[]>([]);
  const [pagination, setPagination] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: 10,
  });
  const [postsLoadExceeded, setPostsLoadExceeded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
        end: prevPagination.end + 9,
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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4">
      {posts.length > 0 ? (
        <>
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id?.toString()}`}
              className="relative"
            >
              <PostCard
                title={post.title}
                tags={post.tags}
                topic={post.topic}
                image_link={post.IMAGE_URL}
                className="w-full"
                loading={loading}
              />
            </Link>
          ))}
          {!postsLoadExceeded && (
            <div className="flex flex-col justify-center flex-shrink-0 items-center sm:mt-14">
              <ChevronsDown
                color="#99a1af"
                onClick={fetchPosts} // Ensure function is called
              />
              <p
                className="text-xs text-gray-400 cursor-pointer"
                onClick={fetchPosts} // Ensure function is called
              >
                More Posts...
              </p>
            </div>
          )}
        </>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default LongPostContainer;
