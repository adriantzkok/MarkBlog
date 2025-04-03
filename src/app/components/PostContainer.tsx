"use client";
import React, { useState, useEffect } from "react";
import PostCard from "@/src/app/components/PostCard";
import { ChevronsRight } from "lucide-react";
import { fetchBlogs, fetchBlogCount } from "../api/dbqueries";
import Link from "next/link";

interface IPostContainerProps {
  title_filter?: string;
  topic_filter?: string;
  tags_filter?: string[];
}

interface IPostMetadata {
  title: string;
  IMAGE_URL: string;
  id: number;
  tags: string[];
  created_at: string;
  topic: string;
}

const PostContainer = ({
  title_filter,
  topic_filter,
  tags_filter,
}: IPostContainerProps) => {
  const [posts, setPosts] = useState<IPostMetadata[] | []>([]);
  const [error, setError] = useState<null | unknown>(null);
  const [pagination, setPagination] = useState<{ start: number; end: number }>({
    start: 0,
    end: 5,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [loadDisabled, setLoadDisabled] = useState<boolean>(false);
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const fetchedBlogCount = await fetchBlogCount(
        title_filter,
        topic_filter,
        tags_filter
      ); // Get total count first

      if (fetchedBlogCount) {
        const fetchedPosts = await fetchBlogs(
          pagination.start,
          pagination.end,
          title_filter,
          topic_filter,
          tags_filter
        );

        if (fetchedPosts !== posts) {
          setPosts((prevPosts) => [...prevPosts, ...(fetchedPosts || [])]);
        }

        // Update pagination
        setPagination((prevPagination) => ({
          start: prevPagination.end + 1,
          end: prevPagination.end + 5,
        }));

        // Check if we have reached the end of the available posts
        if (pagination.end >= fetchedBlogCount) {
          setLoadDisabled(true); // Disable loading if no more posts are available
        }
      }
    } catch (err: unknown) {
      setError(err);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-full">
      <div className="flex flex-row gap-5 overflow-x-auto p-3 max-w-full">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <PostCard
                title={post.title}
                tags={post.tags}
                topic={post.topic}
                image_link={post.IMAGE_URL}
                loading={loading}
              />
            </Link>
          ))
        ) : (
          <div>No posts available</div>
        )}
        {loading ? (
          <div>Loading...</div>
        ) : (
          !loadDisabled && (
            <div className="flex flex-col justify-center flex-shrink-0">
              <ChevronsRight color="#99a1af" onClick={fetchPosts} />
              <p
                className="text-xs text-gray-400 cursor-pointer"
                onClick={fetchPosts}
              >
                More...
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PostContainer;
