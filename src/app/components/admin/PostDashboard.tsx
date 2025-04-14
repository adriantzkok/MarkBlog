"use client";
import PostForm from "./PostForm";
import PostPreview from "./PostPreview";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostFormObject, TPostFormObject } from "@/lib/types/admin";
import { useEffect, useState } from "react";
import { IPostCard } from "@/lib/types/interface";

const PostDashboard = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<TPostFormObject>({ resolver: zodResolver(PostFormObject) });

  const [previewPostCardValues, setPreviewPostCardValues] = useState({
    title: "",
    topic: "",
    tags: [""],
    image_link: "",
    loading: false,
  });

  const [previewPostValues, setPreviewPostValues] = useState({
    post_content: "",
    preface: "",
  });

  const onSubmit = async (data: TPostFormObject) => {
    console.log(data);
    // Handle form submission logic here
  };
  const onError = async (errors: any) => {
    console.log(errors);
    // Handle form error logic here
  };

  useEffect(() => {
    watch((data) =>
      setPreviewPostCardValues({
        title: data.title,
        topic: data.topic,
        tags: data.tags || [""],
        image_link: data.IMAGE_URL,
        loading: false,
      })
    );
  }, [watch]);
  useEffect(() => {
    watch((data) =>
      setPreviewPostValues({
        post_content: data.post_content,
        preface: data.preface,
      })
    );
  }, [watch]);

  return (
    <div className="flex flex-row items-center justify-center min-h-screen w-full">
      <PostForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        onError={onError}
        trigger={trigger}
      />
      <PostPreview previewData={previewPostCardValues} />
    </div>
  );
};

export default PostDashboard;
