import { createClient } from "@/utils/supabase/server";

async function signUpNewUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: "valid.email@supabase.io",
    password: "example-password",
    options: {
      emailRedirectTo: "https://example.com/welcome",
    },
  });

  if (error) {
    console.error("Error signing up:", error.message);
  } else {
    console.log("User signed up successfully:", data.user);
  }
}

async function signInWithEmail() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "valid.email@supabase.io",
    password: "example-password",
  });

  if (error) {
    console.error("Error signing in:", error.message);
  } else {
    console.log("User signed in successfully:", data.user);
  }
}
