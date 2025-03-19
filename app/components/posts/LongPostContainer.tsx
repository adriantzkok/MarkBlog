import PostCard from "../PostCard";
import Link from "next/link";
import { ChevronsDown } from "lucide-react";
import { IPostMetadata } from "@/app/types/interface";

interface ILongPostContainer {
  posts: IPostMetadata[];
  loadStatus: boolean;
  postExceeded: boolean;
  fetchPosts: () => Promise<void>;
}

const LongPostContainer = ({
  posts,
  fetchPosts,
  loadStatus,
  postExceeded,
}: ILongPostContainer) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
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
                loading={loadStatus}
              />
            </Link>
          ))}
          {!postExceeded && (
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
