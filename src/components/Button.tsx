import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    'bg-gradient-to-r from-deep-purple to-electric text-white shadow-lg shadow-deep-purple/25 hover:shadow-xl hover:shadow-deep-purple/30 hover:-translate-y-0.5',
  secondary:
    'bg-white text-charcoal border border-charcoal/15 shadow-sm hover:border-deep-purple/40 hover:shadow-md hover:-translate-y-0.5',
  outline:
    'bg-transparent text-deep-purple border-2 border-deep-purple/30 hover:bg-deep-purple/5 hover:border-deep-purple',
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-purple focus-visible:ring-offset-2';

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
