import { Dispatch, SetStateAction } from "react";
export interface IFilters {
  input_filter: string;
  topic_filter: string;
  tags_filter: string[];
}

export interface IFilterContext {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

export interface IPostContentMetadataBlogPosts {
  created_at: string;
  title: string;
}

export interface IPostContentMetadata {
  BLOG_POSTS: IPostContentMetadataBlogPosts;
  preface: string;
  post_content: string;
}

export interface IPostMetadata {
  title: string;
  IMAGE_URL: string;
  id: number;
  tags: string[];
  created_at: string;
  topic: string;
}

export interface ITopics {
  topic: string;
}
