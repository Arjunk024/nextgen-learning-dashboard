import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-zinc-950 border-r border-zinc-800 p-6">
      <h2 className="text-2xl font-bold text-white mb-10">
        LearnX
      </h2>

      <nav className="space-y-5 text-zinc-300">
        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <Home size={20} />
          Home
        </div>

        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <BookOpen size={20} />
          Courses
        </div>

        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <BarChart3 size={20} />
          Analytics
        </div>

        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <Settings size={20} />
          Settings
        </div>
      </nav>
    </aside>
  );
}