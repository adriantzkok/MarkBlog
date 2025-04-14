"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function OTPEmailLogin(formData: FormData) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get("email") as string,
    options: {
      shouldCreateUser: false,
    },
  });
  if (error) {
    redirect("/error");
  }
}
