interface PrimaryHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
}

export default function PrimaryHeading({
  children,
  as = "h2",
  className = "",
}: PrimaryHeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={`
        font-semibold
        tracking-tight
        drop-shadow
        leading-snug

        bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
        bg-clip-text text-transparent

        ${
          as === "h1"
            ? "text-4xl sm:text-4xl md:text-5xl lg:text-6xl"
            : "text-2xl sm:text-3xl md:text-4xl"
        }

        ${className}
      `}
    >
      {children}
    </Tag>
  );
}
