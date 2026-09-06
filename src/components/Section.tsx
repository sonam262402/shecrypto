import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export function Section({ id, children, className = '', alt = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${
        alt ? 'bg-lavender/50' : 'bg-white'
      } ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ label, title, description, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'max-w-3xl';

  return (
    <div className={`mb-14 md:mb-16 ${alignClass}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-deep-purple mb-3">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-charcoal/75 leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  );
}
