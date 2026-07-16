import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-5">

        <h1 className="text-3xl font-bold text-blue-600">
          FactVerse
        </h1>

        <div className="flex gap-3">

          <Link
  href="/random"
  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
>
  🎲 Random
</Link>

<Link
  href="/category"
  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
>
  📂 Categories
</Link>

<Link
  href="/instagram"
  className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition"
>
  📸 Instagram
</Link>

        </div>

      </div>
    </nav>
  );
}