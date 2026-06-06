export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="animate-pulse space-y-6">
        <div className="h-40 bg-zinc-900 rounded-3xl" />
        <div className="grid grid-cols-3 gap-6">
          <div className="h-56 bg-zinc-900 rounded-3xl" />
          <div className="h-56 bg-zinc-900 rounded-3xl" />
          <div className="h-56 bg-zinc-900 rounded-3xl" />
        </div>
      </div>
    </main>
  );
}