import { Fact } from "@/types/fact";

interface FactCardProps {
  fact: Fact;
}

export default function FactCard({ fact }: FactCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">

      <h2 className="text-3xl font-bold">
        <h2 className="text-4xl font-bold mb-2">
    {fact.title}
</h2>

<p className="text-gray-500 mb-6">
    Discover something new every click.
</p>
      </h2>

      <p className="mt-5 text-lg leading-8">
        {fact.fact}
      </p>

      <div className="flex justify-between mt-8 text-gray-500">

        <span>
          📂 {fact.category}
        </span>

        <span>
          📖 {fact.source}
        </span>

      </div>

    </div>
  );
}