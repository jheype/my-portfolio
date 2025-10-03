import clsx from "clsx";

export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-brand-300 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800",
        "dark:bg-brand-900/40 dark:text-brand-200 dark:border-brand-800",
        className
      )}
    >
      {children}
    </span>
  );
}
