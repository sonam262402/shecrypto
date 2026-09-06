interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white border border-charcoal/8 p-6 md:p-8 shadow-sm ${
        hover
          ? 'transition-all duration-300 hover:shadow-lg hover:shadow-deep-purple/8 hover:-translate-y-1 hover:border-deep-purple/20'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
