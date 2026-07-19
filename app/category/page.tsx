import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { getCategories } from "@/services/facts";

export default async function CategoryPage() {
  const categories = await getCategories();

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto py-12">

        <h1 className="text-4xl font-bold mb-8">
          Categories
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${encodeURIComponent(category)}`}
              className="border rounded-xl p-6 hover:bg-gray-100 text-center font-semibold"
            >
              {category}
            </Link>
          ))}

        </div>

      </main>
    </>
  );
}