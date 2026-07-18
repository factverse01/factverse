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