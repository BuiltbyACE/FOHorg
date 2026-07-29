import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-primary text-white shadow-md hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5',
  secondary:
    'bg-navy text-white shadow-md hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5',
  outline:
    'border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white',
  ghost:
    'bg-transparent text-navy hover:bg-gray-100',
};

const sizeStyles: Record<string, string> = {
  sm: 'h-10 px-4 text-[13px]',
  md: 'h-[46px] px-6 text-[14px]',
  lg: 'h-[52px] px-8 text-[16px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.03em] transition-all duration-[250ms]',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
