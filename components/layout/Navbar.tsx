import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link href="/">
          <h1 className="text-3xl font-bold cursor-pointer">
            FactVerse
          </h1>
        </Link>

        <Link href="/random">
          <button className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition">
            🎲 Random Fact
          </button>
        </Link>

      </div>
    </header>
  );
}