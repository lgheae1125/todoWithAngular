import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva("bg-black text-white rounded-full", {
  variants: {
    size: {
      sm: "text-[12px] px-1 py-0.5",
      md: "text-[16px] px-2.5 py-1.5",
      lg: "text-[20px] px-4 py-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

function Button({ size, children }: ButtonProps) {
  return <button className={buttonVariants({ size })}>{children}</button>;
}

export default Button;
