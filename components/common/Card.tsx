import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-white p-6 shadow-sm',
        hover && 'transition-all duration-[250ms] hover:shadow-md hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </div>
  );
}
