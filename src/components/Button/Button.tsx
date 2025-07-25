interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded text-white';
  const variants = {
    primary: `${base} bg-blue-600 hover:bg-blue-700`,
    secondary: `${base} bg-gray-600 hover:bg-gray-700`,
  };

  return (
    <button {...props} className={variants[variant]}>
      {children}
    </button>
  );
}
