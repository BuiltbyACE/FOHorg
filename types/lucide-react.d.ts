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
  export const Target: Icon;
  export const Eye: Icon;
  export const Users: Icon;
  export const GraduationCap: Icon;
  export const Shield: Icon;
  export const HandHeart: Icon;
  export const BookOpen: Icon;
  export const Building2: Icon;
  export const Sparkles: Icon;
  export const BarChart3: Icon;
  export const Award: Icon;
  export const Trees: Icon;
  export const Home: Icon;
  export const Stethoscope: Icon;
  export const Gift: Icon;
  export const Smartphone: Icon;
  export const Calendar: Icon;
  export const HeartHandshake: Icon;
  export const TrendingUp: Icon;
  export const Search: Icon;
  export const ShieldCheck: Icon;
  export const PieChart: Icon;
  export const FileText: Icon;
  export const ChevronRight: Icon;
  export const CheckCircle: Icon;
  export const ChevronLeft: Icon;
  export const HeartPulse: Icon;
}
