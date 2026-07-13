"use client";

import { useState } from "react";
import { classes, classCategories, type ClassCategory } from "@/data/classes";
import ClassCard from "@/components/ClassCard";
import { cn } from "@/lib/utils";

export default function ClassList() {
  const [active, setActive] = useState<ClassCategory | "전체">("전체");

  const filtered =
    active === "전체" ? classes : classes.filter((c) => c.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {(["전체", ...classCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-text bg-text text-white"
                : "border-accent text-text-light hover:border-text hover:text-text"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <ClassCard key={item.id} item={item} delay={(i % 3) * 0.08} />
        ))}
      </div>
    </div>
  );
}
