import { createClient } from "@supabase/supabase-js";
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchBlogs(
  range_start: number,
  range_end: number,
  title_filter?: string,
  topic_filter?: string,
  tags_filter?: string[]
) {
  const query = supabase
    .from("BLOG_POSTS")
    .select("*")
    .order("created_at", { ascending: false })
    .range(range_start, range_end);
  // Apply filters if they exist
  if (title_filter) {
    query.ilike("title", `%${title_filter}%`); // Case-insensitive match
  }

  if (topic_filter) {
    query.ilike("topic", `%${topic_filter}%`); // Case-insensitive match
  }

  if (tags_filter) {
    // Assuming tags are stored as an array in your database
    query.contains("tags", tags_filter);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }

  return data;
}

export async function fetchBlogsCount(
  title_filter?: string,
  topic_filter?: string,
  tags_filter?: string[]
) {
  const query = supabase
    .from("BLOG_POSTS")
    .select("*", { count: "exact", head: true });

  if (title_filter) {
    query.ilike("title", `%${title_filter}%`); // Case-insensitive match
  }

  if (topic_filter) {
    query.ilike("topic", `%${topic_filter}%`); // Case-insensitive match
  }

  if (tags_filter) {
    query.contains("tags", tags_filter);
  }

  const { count, error } = await query;

  if (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }

  return count;
}

export async function fetchPostMetadata(id: number) {
  const { data, error } = await supabase
    .from("BLOG_POSTS")
    .select("*")
    .eq("id", id);
  if (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }

  return data[0];
}

export async function fetchPost(id: string) {
  const { data, error } = await supabase
    .from("POSTS")
    .select(`*, BLOG_POSTS (*)`)
    .eq("id", id);
  if (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }

  return data[0];
}

export async function fetchTopics(
  title_filter?: string,
  topic_filter?: string,
  tags_filter?: string[]
) {
  const query = supabase.from("BLOG_POSTS").select("topic");
  if (title_filter) {
    query.ilike("title", `%${title_filter}%`); // Case-insensitive match
  }

  if (topic_filter) {
    query.ilike("topic", `%${topic_filter}%`); // Case-insensitive match
  }

  if (tags_filter) {
    // Assuming tags are stored as an array in your database
    query.contains("tags", tags_filter);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }

  return data;
}

export async function fetchPostTags() {
  const { data, error } = await supabase.from("BLOG_POSTS").select("tags");
  if (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }

  return data;
}

export async function fetchBlogCount(
  title_filter?: string,
  topic_filter?: string,
  tags_filter?: string[]
) {
  const query = supabase.from("BLOG_POSTS").select("id");

  if (title_filter) {
    query.ilike("title", `%${title_filter}%`); // Case-insensitive match
  }

  if (topic_filter) {
    query.ilike("topic", `%${topic_filter}%`); // Case-insensitive match
  }

  if (tags_filter) {
    query.contains("tags", tags_filter);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }

  return data?.length;
}
