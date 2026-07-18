import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("facts")
    .select("*")
    .limit(1);

  if (error) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">Database Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  const fact = data?.[0];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl">
        <h1 className="text-4xl font-bold mb-6">
          FactVerse
        </h1>

        <h2 className="text-2xl font-semibold">
          {fact?.title}
        </h2>

        <p className="mt-4 text-lg">
          {fact?.fact}
        </p>

        <p className="mt-6 text-gray-500">
          Category: {fact?.category}
        </p>
      </div>
    </main>
  );
}