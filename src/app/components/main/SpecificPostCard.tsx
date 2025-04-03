"use client";
import React, { useEffect, useState } from "react";
import PostCard from "@/src/app/components/PostCard";
import { fetchPostMetadata } from "@/src/app/api/dbqueries";
import Link from "next/link";

interface ISpecificPostCardProps {
  linkclassName?: string;
  className?: string;
  id: number;
}

interface PostMetadata {
  title: string;
  topic: string;
  tags: string[];
  IMAGE_URL: string;
}

const SpecificPostCard = ({
  linkclassName,
  className,
  id,
}: ISpecificPostCardProps) => {
  const [postData, setPostData] = useState<PostMetadata | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const getPostMetadata = async () => {
      setLoading(true); // Set loading to true when starting the fetch

      try {
        const postMetadata = await fetchPostMetadata(id);
        setPostData(postMetadata);
      } catch (err: unknown) {
        setError(err); // Handle any errors
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    getPostMetadata();
  }, [id]);

  return (
    <Link href={`/posts/${id}`} className={linkclassName}>
      <PostCard
        title={postData?.title} // Temporarily ignore the type error
        topic={postData?.topic}
        className={className}
        tags={postData?.tags}
        image_link={postData?.IMAGE_URL}
        loading={loading}
      />
    </Link>
  );
};

export default SpecificPostCard;
