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
}
