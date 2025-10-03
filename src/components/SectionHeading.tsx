import clsx from "clsx";

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={clsx("mb-10", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-2 text-neutral-800 dark:text-neutral-200 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
