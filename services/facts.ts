import { supabase } from "@/lib/supabase";

export async function getFirstFact() {
  const { data, error } = await supabase
    .from("facts")
    .select("*")
    .limit(1)
    .single();

  if (error) throw error;

  return data;
}

export async function getRandomFact() {
  const { data, error } = await supabase
    .from("facts")
    .select("*");

  if (error) throw error;

  const randomIndex = Math.floor(Math.random() * data.length);

  return data[randomIndex];
}

export async function getCategories() {
  const { data, error } = await supabase
    .from("facts")
    .select("category");

  if (error) throw error;

  const categories = [...new Set(data.map(item => item.category))];

  return categories.sort();
}

export async function getFactsByCategory(category: string) {
  const { data, error } = await supabase
    .from("facts")
    .select("*")
    .eq("category", category);

  if (error) throw error;

  return data;
}