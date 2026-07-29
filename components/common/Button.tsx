import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-gradient-to-r from-[#E91E63] to-[#D81B60] text-white shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-[#081B63] text-white shadow-lg shadow-navy-900/20 hover:bg-[#102A8C] hover:shadow-xl hover:shadow-navy-900/30 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border-2 border-[#081B63] text-[#081B63] bg-transparent hover:bg-[#081B63] hover:text-white hover:-translate-y-0.5 active:translate-y-0',
  'outline-white':
    'border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-[#081B63] hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'bg-transparent text-[#081B63] hover:bg-pink-50 hover:text-[#E91E63]',
};

const sizeStyles: Record<string, string> = {
  sm: 'h-10 px-5 text-[13px]',
  md: 'h-[48px] px-7 text-[14px]',
  lg: 'h-[56px] px-9 text-[15px]',
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
    'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-[0.05em] transition-all duration-300 cursor-pointer select-none',
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
