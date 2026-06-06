export default function ActivityTile() {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded bg-green-500/60"
          />
        ))}
      </div>
    </article>
  );
}