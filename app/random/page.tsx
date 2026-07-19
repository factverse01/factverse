import FactCard from "@/components/facts/FactCard";
import Navbar from "@/components/layout/Navbar";
import { getRandomFact } from "@/services/facts";

export default async function RandomPage() {
  const fact = await getRandomFact();

  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen py-12">

        <div className="max-w-5xl mx-auto">

          <FactCard fact={fact} />

        </div>

      </main>
    </>
  );
}