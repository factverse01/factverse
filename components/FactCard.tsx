export default function FactCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-lg">

      <img
        src="https://picsum.photos/600/600"
        alt="Fact"
        className="w-full"
      />

      <div className="p-6">

        <p className="text-sm uppercase text-blue-600 font-semibold">
          Did You Know?
        </p>

        <h2 className="text-2xl font-bold mt-2">
          Bananas are berries,
          but strawberries aren't.
        </h2>

        <div className="flex justify-between mt-6">

          <button>❤️ Like</button>

          <button>🔄 Random</button>

          <button>📤 Share</button>

        </div>

      </div>

    </div>
  );
}