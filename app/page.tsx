import { supabase } from "../lib/supabase";

export default async function Home() {
  console.log(supabase);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        FactVerse
      </h1>

      <p>Supabase is connected!</p>
    </main>
  );
}