import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-tight cursor-pointer">
            FactVerse
          </h1>
        </Link>

        <nav className="flex items-center gap-4">

          <Link href="/random">
            <button className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition">
              🎲 Random
            </button>
          </Link>

          <Link href="/category">
            <button className="px-5 py-2 rounded-xl border hover:bg-gray-100 transition">
              📂 Categories
            </button>
          </Link>

          <Link href="/instagram">
            <button className="px-5 py-2 rounded-xl border hover:bg-gray-100 transition">
              📸 Instagram
            </button>
          </Link>

        </nav>
      </div>
    </header>
  );
}