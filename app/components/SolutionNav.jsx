"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SolutionNav({ prev, next }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-20 flex items-center justify-between"
    >
      {/* PREVIOUS BUTTON */}
      {prev ? (
        <Link
          href={prev.href}
          className="px-6 py-3 rounded-xl font-semibold
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          text-black shadow-md hover:opacity-90 transition"
        >
          ← {prev.label}
        </Link>
      ) : (
        <span />
      )}

      {/* NEXT BUTTON */}
      {next ? (
        <Link
          href={next.href}
          className="px-6 py-3 rounded-xl font-semibold
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          text-black shadow-md hover:opacity-90 transition"
        >
          {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </motion.div>
  );
}
