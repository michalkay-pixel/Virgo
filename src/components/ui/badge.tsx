import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-body text-xs uppercase tracking-[0.1em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-copper/30 bg-copper/10 text-copper px-3 py-1",
        secondary:
          "border border-taupe/30 bg-taupe/10 text-taupe px-3 py-1",
        trust:
          "border border-charcoal/20 bg-charcoal/5 text-charcoal px-3 py-1",
        outline:
          "border border-charcoal text-charcoal px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

