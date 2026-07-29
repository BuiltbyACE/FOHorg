import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'muted';
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary: 'bg-primary text-white',
  outline: 'border border-primary text-primary bg-transparent',
  muted: 'bg-gray-100 text-gray-600',
};

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium uppercase tracking-[0.05em]',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
