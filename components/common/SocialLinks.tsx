'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/constants/social';

const platforms = [
  {
    name: 'Facebook',
    href: socialLinks.facebook,
    logo: '/logo/Facebook-Logo-500x281.png',
  },
  {
    name: 'Twitter',
    href: socialLinks.twitter,
    logo: '/logo/Twitter-Logо-500x281.png',
  },
  {
    name: 'Instagram',
    href: socialLinks.instagram,
    logo: '/logo/Instagram-Logo-500x281.png',
  },
  {
    name: 'LinkedIn',
    href: socialLinks.linkedin,
    logo: null,
    svg: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    color: '#0A66C2',
  },
  {
    name: 'YouTube',
    href: socialLinks.youtube,
    logo: null,
    svg: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    color: '#FF0000',
  },
];

interface SocialLinksProps {
  /** 'dark' = used on navy/dark bg; 'light' = used on white/light bg */
  variant?: 'dark' | 'light';
  className?: string;
}

export default function SocialLinks({ variant = 'dark', className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          aria-label={`Follow Fountain of Hope on ${p.name}`}
          className={cn(
            'flex items-center justify-center rounded-full w-10 h-10 transition-all duration-300 hover:scale-105',
            variant === 'dark'
              ? 'bg-white/10 hover:bg-white/20'
              : 'bg-[#E91E63]/10 hover:bg-[#E91E63]',
          )}
        >
          {p.logo ? (
            <div className="relative w-5 h-5">
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain"
                sizes="20px"
              />
            </div>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill={variant === 'dark' ? 'white' : p.color}
              aria-hidden="true"
              className={variant === 'light' ? 'group-hover:fill-white transition-colors' : ''}
            >
              <path d={p.svg} />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}
