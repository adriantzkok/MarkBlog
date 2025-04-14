import React from "react";
import PostCard from "../PostCard";
import { IPostCard } from "@/lib/types/interface";
import Markdown from "react-markdown";

const PostPreview = ({ previewData }: { previewData: IPostCard }) => {
  return (
    <div>
      <PostCard
        topic={previewData.topic}
        title={previewData.title}
        tags={previewData.tags}
        image_link={previewData.image_link}
        loading={false}
      />
      {/* <Markdown>{previewData.}</Markdown> */}
    </div>
  );
};

export default PostPreview;
