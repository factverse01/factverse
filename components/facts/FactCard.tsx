<div className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto text-center">

  <h2 className="text-4xl font-bold mb-6">
    {fact.title}
  </h2>

  <p className="text-2xl leading-relaxed mb-8">
    {fact.fact}
  </p>

  <div className="flex justify-center gap-8 text-gray-500 mb-8">
    <span>🏷 {fact.category}</span>
    <span>📚 {fact.source}</span>
  </div>

  <p className="text-gray-400 italic">
    ✨ One click. One new fact. Every time.
  </p>

</div>