"use client";

import Link from "next/link";

type Item = {
  slug: string;
  label: string;
};

export default function NextPrevNav({
  items,
  currentSlug,
  basePath,
}: {
  items: Item[];
  currentSlug: string;
  basePath: string;
}) {
  const index = items.findIndex(i => i.slug === currentSlug);

  const prev = index > 0 ? items[index - 1] : null;
  const next = index < items.length - 1 ? items[index + 1] : null;

  return (
    <div className="mt-24 flex justify-between border-t border-white/10 pt-10 text-sm">
      {prev ? (
        <Link
          href={`${basePath}/${prev.slug}`}
          className="text-white/70 hover:text-white transition"
        >
          ← {prev.label}
        </Link>
      ) : <span />}

      {next ? (
        <Link
          href={`${basePath}/${next.slug}`}
          className="text-white/70 hover:text-white transition"
        >
          {next.label} →
        </Link>
      ) : <span />}
    </div>
  );
}
