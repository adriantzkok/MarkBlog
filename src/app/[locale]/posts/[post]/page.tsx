import MaxWidthWrapper from "@/src/app/components/MaxWidthWrapper";
import ImageFillWrapper from "@/src/app/components/ImageFillWrapper";
import { fetchPost } from "@/src/app/api/dbqueries";
import ContentWrapper from "@/src/app/components/post/ContentWrapper";
import { IPostContentMetadata } from "@/lib/types/interface";

const page = async ({ params }: { params: Promise<{ post: string }> }) => {
  const { post: id } = await params;
  const post: IPostContentMetadata = await fetchPost(id);

  return (
    <MaxWidthWrapper className="px-4 py-8">
      <div className="flex flex-col space-y-12 w-full">
        <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-lg">
          <ImageFillWrapper image_link="https://yemolfbfuywasvhymyos.supabase.co/storage/v1/object/public/Blog//bg-min.jpeg" />
        </div>
        <div className="p-7 border-2 flex flex-col gap-y-7">
          <h2 className="text-gray-600 text-lg">
            {post && post.BLOG_POSTS.created_at.split("T")[0]}
          </h2>
          <h1 className="text-5xl font-bold text-gray-800">
            {post && post.BLOG_POSTS.title}
          </h1>
          <p className="text-base text-gray-700 leading-relaxed italic">
            {post && post.preface}
          </p>
        </div>
        <ContentWrapper
          markdown_content={post && post.post_content}
        ></ContentWrapper>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
