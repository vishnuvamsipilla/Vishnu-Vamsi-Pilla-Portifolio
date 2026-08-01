"use client";

export default function ScrollButton({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={className}
      onClick={() =>
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      {children}
    </button>
  );
}
