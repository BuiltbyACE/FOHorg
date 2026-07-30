import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/constants/site';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
}

export default function Logo({ className, height = 65, width = 180, priority = true }: LogoProps) {
  return (
    <Link href="/" className={`flex-shrink-0 block ${className || ''}`} aria-label="Go to homepage">
      <Image
        src={siteConfig.logoPath}
        alt={siteConfig.name}
        width={0}
        height={height}
        className="object-contain"
        style={{ height: `${height}px`, width: 'auto' }}
        priority={priority}
      />
    </Link>
  );
}
