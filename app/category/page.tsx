import Navbar from "@/components/layout/Navbar";
import FactCard from "@/components/facts/FactCard";
import { getFirstFact } from "@/services/facts";

export default async function Home() {
  const fact = await getFirstFact();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 flex justify-center items-center">
        <FactCard fact={fact} />
      </main>
    </>
  );
}