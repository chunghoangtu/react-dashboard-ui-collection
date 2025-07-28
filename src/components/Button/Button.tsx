import clsx from "clsx";

import { variants } from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
}

export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const buttonClass = clsx(variants[variant], className)

  return (
    <button className={buttonClass} disabled={variant === 'disabled'} {...props}>
      {children}
    </button>
  );
}
