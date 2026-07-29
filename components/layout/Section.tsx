import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

const bgStyles: Record<string, string> = {
  white: 'bg-white',
  light: 'bg-gray-50',
  dark: 'bg-navy',
};

export default function Section({ children, className, id, background = 'white' }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', bgStyles[background], className)}>
      <Container>{children}</Container>
    </section>
  );
}
