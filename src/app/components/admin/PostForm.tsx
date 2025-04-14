"use client";
import { TPostFormObject } from "@/lib/types/admin";

import {
  UseFormRegister,
  FieldErrors,
  SubmitHandler,
  SubmitErrorHandler,
  UseFormGetValues,
  UseFormTrigger,
} from "react-hook-form";

interface PostFormProps {
  register: UseFormRegister<TPostFormObject>;
  handleSubmit: (
    onValid: SubmitHandler<TPostFormObject>,
    onInvalid?: SubmitErrorHandler<TPostFormObject> | undefined
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<TPostFormObject>;
  onSubmit: SubmitHandler<TPostFormObject>;
  onError: SubmitErrorHandler<TPostFormObject>;
  trigger: UseFormTrigger<TPostFormObject>;
}

const PostForm = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  onError,
  trigger,
}: PostFormProps) => {
  const arrayParser = (value: string) => {
    if (value === "") {
      return [];
    }
    const parsedArray = value.split(",").map((item) => item.trim());
    return parsedArray;
  };

  return (
    <form
      className="space-y-6 bg-white p-6 rounded-lg shadow-md w-1/2"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="title" className="text-gray-700 font-medium">
          Title
        </label>
        <input
          {...register("title", { required: true, maxLength: 20 })}
          id="title"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
          placeholder="Enter the title"
          defaultValue=""
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="topic" className="text-gray-700 font-medium">
          Topic
        </label>
        <input
          {...register("topic", { required: true, maxLength: 20 })}
          id="topic"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
          placeholder="Enter the topic"
          defaultValue=""
        />
        {errors.topic && (
          <p className="text-red-500 text-sm">{errors.topic.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="tags" className="text-gray-700 font-medium">
          Tags
        </label>

        <input
          {...register("tags", {
            required: true,
            setValueAs: (value) => arrayParser(value),
          })}
          placeholder="tag1, tag2, tag3"
          defaultValue=""
          id="tags"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
        />
        {errors.tags && (
          <p className="text-red-500 text-sm">{errors.tags.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="IMAGE_URL" className="text-gray-700 font-medium">
          Image URL
        </label>
        <input
          {...register("IMAGE_URL", { required: true })}
          id="IMAGE_URL"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
          placeholder="Enter the image URL"
          defaultValue=""
        />
        {errors.IMAGE_URL && (
          <p className="text-red-500 text-sm">{errors.IMAGE_URL.message}</p>
        )}
        <button
          type="button"
          onClick={() => {
            trigger("IMAGE_URL");
          }}
        ></button>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="preface" className="text-gray-700 font-medium">
          Preface
        </label>
        <textarea
          {...register("preface")}
          id="preface"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
          placeholder="Enter the preface"
          defaultValue=""
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="post_content" className="text-gray-700 font-medium">
          Post Content
        </label>
        <textarea
          {...register("post_content", { required: true })}
          id="post_content"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
          placeholder="Enter the post content"
          defaultValue=""
          rows={10}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
