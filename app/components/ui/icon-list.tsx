import clsx from "clsx";

export interface IconListProps {
  items: string[];
  className?: string;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={clsx("h-4 w-4 text-accent-purple", className)}
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-8.1 8.2a1 1 0 0 1-1.425.01L3.29 11.12a1 1 0 1 1 1.42-1.4l3.18 3.225 7.39-7.48a1 1 0 0 1 1.424-.175Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function IconList({ items, className }: IconListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={clsx("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-text-secondary">
          <span className="mt-0.5 shrink-0">
            <CheckIcon />
          </span>
          <span className="text-sm leading-relaxed sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

