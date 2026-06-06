import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>Database Error</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <HeroTile totalCourses={courses?.length || 0} />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              iconName={course.icon_name}
            />
          ))}

          <ActivityTile />

          <footer className="col-span-full mt-10 text-center text-zinc-500">
            Built with Next.js • Supabase • Framer Motion
          </footer>
        </div>
      </section>
    </main>
  );
}