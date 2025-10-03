"use client";
import DarkVeil from "./DarkVeil";

export default function Background() {

  return (
    <div
      className="
        fixed inset-0 z-0
        bg-gradient-to-b
        from-brand-50 via-white to-white
        dark:from-[#0b0618] dark:via-[#0a0714] dark:to-[#090614]
      "
    >
      <DarkVeil />
    </div>
  );
}
