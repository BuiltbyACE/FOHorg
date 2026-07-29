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
  export const Phone: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Clock: Icon;
  export const Globe: Icon;
  export const SendHorizontal: Icon;
  export const ArrowRight: Icon;
  export const Check: Icon;
  export const Plus: Icon;
  export const User: Icon;
  export const MessageSquare: Icon;
  export const Handshake: Icon;
  export const UserPlus: Icon;
  export const Mic: Icon;
}
