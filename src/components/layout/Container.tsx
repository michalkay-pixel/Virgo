import { cn } from "@/lib/utils";
import { JSX } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Component>
  );
}

