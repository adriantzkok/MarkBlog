import React from "react";
import PostCard from "../PostCard";
import { IPostCard } from "@/lib/types/interface";
import Markdown from "react-markdown";

const PostPreview = ({ previewPostCardData, previewPostData }) => {
  return (
    <div>
      <PostCard
        topic={previewPostCardData.topic}
        title={previewPostCardData.title}
        tags={previewPostCardData.tags}
        image_link={previewPostCardData.image_link}
        loading={false}
      />
      <Markdown>{previewPostData.post_content}</Markdown>
    </div>
  );
};

export default PostPreview;
