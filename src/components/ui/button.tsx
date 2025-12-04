import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-sm uppercase tracking-[0.15em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-2 border-copper bg-copper text-cream hover:bg-transparent hover:text-copper",
        outline:
          "border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-cream",
        ghost:
          "text-charcoal hover:bg-charcoal/10",
        link:
          "text-copper underline-offset-4 hover:underline tracking-normal normal-case",
        secondary:
          "border-2 border-taupe bg-taupe text-cream hover:bg-transparent hover:text-taupe",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2",
        lg: "h-14 px-10 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

