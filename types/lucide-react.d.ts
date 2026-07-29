declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  type Icon = FC<IconProps>;

  export const Menu: Icon;
  export const X: Icon;
  export const Heart: Icon;
  export const Target: Icon;
  export const Eye: Icon;
  export const Users: Icon;
  export const GraduationCap: Icon;
  export const Shield: Icon;
  export const Globe: Icon;
  export const HandHeart: Icon;
  export const BookOpen: Icon;
  export const Building2: Icon;
  export const ArrowRight: Icon;
  export const Sparkles: Icon;
  export const BarChart3: Icon;
  export const Award: Icon;
  export const Trees: Icon;
  export const Home: Icon;
  export const Stethoscope: Icon;
}
