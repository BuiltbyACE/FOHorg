import { cn } from '@/lib/utils';
import Heading from './Heading';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, className, align = 'center' }: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <Heading as="h2" className="mb-4">
        {title}
      </Heading>
      {subtitle && (
        <p className="text-gray-500 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
