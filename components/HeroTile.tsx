type HeroTileProps = {
  totalCourses: number;
};

export default function HeroTile({
  totalCourses,
}: HeroTileProps) {
  return (
    <article className="lg:col-span-2 rounded-3xl border border-zinc-800 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 p-8">
      <h1 className="text-5xl font-bold text-white">
        Welcome Back, Arjun
      </h1>

      <p className="mt-4 text-orange-400 text-lg">
        🔥 7 Day Learning Streak
      </p>

      <p className="mt-2 text-zinc-400">
        {totalCourses} Active Courses
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-zinc-900 rounded-2xl p-5">
          <h3 className="text-zinc-400">Courses</h3>
          <p className="text-3xl font-bold">
            {totalCourses}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <h3 className="text-zinc-400">Completed</h3>
          <p className="text-3xl font-bold">1</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <h3 className="text-zinc-400">Streak</h3>
          <p className="text-3xl font-bold">7🔥</p>
        </div>
      </div>
    </article>
  );
}