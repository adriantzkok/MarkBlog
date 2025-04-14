import { z } from "zod";

export const PostFormObject = z
  .object({
    title: z.string().trim().max(20, "Title must be less than 20 characters"),
    topic: z.string().trim().max(20, "Topic must be less than 20 characters"),
    tags: z
      .array(z.string())
      .nonempty("Tags cannot be empty, please add at least one tag"),
    IMAGE_URL: z.string().url(),
    preface: z.string(),
    post_content: z.string(),
  })
  .required({
    title: true,
    topic: true,
    tags: true,
    IMAGE_URL: true,
    post_content: true,
  });

export type TPostFormObject = z.infer<typeof PostFormObject>;
