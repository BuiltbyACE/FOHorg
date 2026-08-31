import type { NavItem } from '@/types/navigation';
import { programCategories } from '@/constants/programs';

const programsDropdown = programCategories.map((category) => ({
  title: category.title,
  items: category.programs.map((program) => ({
    label: program.title,
    href: `/programs/${program.slug}`,
    children: program.children?.map((child) => ({
      label: child.title,
      href: `/programs/${program.slug}#${child.id}`,
    })),
  })),
}));

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      {
        title: 'About',
        items: [
          { label: 'About Us', href: '/about' },
          { label: 'Our Approach', href: '/about#approach' },
          { label: 'Our Values', href: '/about#values' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
  { label: 'Programs', href: '/programs', dropdown: programsDropdown },
  {
    label: 'Partnership',
    href: '/partnerships',
    dropdown: [
      {
        title: 'Partnership',
        items: [
          { label: 'Our Partners', href: '/partnerships' },
          { label: 'Sponsorship', href: '/sponsorship' },
          { label: 'Donation', href: '/donations' },
        ],
      },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Achievements', href: '/achievements' },
];
