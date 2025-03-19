import React from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ImageFillWrapper from "@/app/components/ImageFillWrapper";
import PostArea from "@/app/components/posts/PostArea";

const page = () => {
  return (
    <MaxWidthWrapper className="">
      <div className="flex flex-col space-y-8 w-full">
        <div className="relative w-full h-72">
          <ImageFillWrapper image_link="https://yemolfbfuywasvhymyos.supabase.co/storage/v1/object/public/Blog//bg-min.jpeg"></ImageFillWrapper>
        </div>
        <PostArea input_filter="" topic_filter="" tags_filter={[]} />
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
