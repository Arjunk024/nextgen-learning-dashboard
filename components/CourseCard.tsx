"use client";

import { motion } from "framer-motion";
import {
  Code,
  Laptop,
  Sparkles,
  Database,
} from "lucide-react";

type CourseCardProps = {
  title: string;
  progress: number;
  iconName: string;
};

const icons = {
  Code,
  Laptop,
  Sparkles,
  Database,
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {
  const Icon =
    icons[iconName as keyof typeof icons] || Code;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
     whileHover={{
  scale: 1.03,
  y: -8,
}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      h-[280px]
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        hover:border-purple-500/50
        hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
      "
    >
      <Icon
        size={32}
        className="mb-4 text-purple-400"
      />

      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <div className="mt-6">
        <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
           transition={{
  duration: 1.2,
  ease: "easeOut",
}}
          />
        </div>

        <p className="mt-3 text-zinc-400">
          {progress}% Complete
        </p>
      </div>
    </motion.article>
  );
}