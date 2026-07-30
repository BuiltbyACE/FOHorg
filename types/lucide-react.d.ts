declare module 'lucide-react' {
  import { FC, SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  type Icon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

  export type LucideIcon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

  export const AlertCircle: Icon;
  export const ArrowRight: Icon;
  export const ArrowUpRight: Icon;
  export const Award: Icon;
  export const BarChart3: Icon;
  export const BookOpen: Icon;
  export const Building2: Icon;
  export const Check: Icon;
  export const CheckCheck: Icon;
  export const CheckCircle: Icon;
  export const CheckCircle2: Icon;
  export const ChevronDown: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const CircleCheckBig: Icon;
  export const ClipboardList: Icon;
  export const Clock: Icon;
  export const Compass: Icon;
  export const Download: Icon;
  export const Droplets: Icon;
  export const Eye: Icon;
  export const FileText: Icon;
  export const Gift: Icon;
  export const Globe: Icon;
  export const GraduationCap: Icon;
  export const HandHeart: Icon;
  export const Handshake: Icon;
  export const Heart: Icon;
  export const HeartHandshake: Icon;
  export const HeartPulse: Icon;
  export const Home: Icon;
  export const Info: Icon;
  export const Landmark: Icon;
  export const Leaf: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Maximize2: Icon;
  export const Megaphone: Icon;
  export const Menu: Icon;
  export const MessageCircle: Icon;
  export const Mic: Icon;
  export const Pause: Icon;
  export const Phone: Icon;
  export const PieChart: Icon;
  export const Play: Icon;
  export const Plus: Icon;
  export const Quote: Icon;
  export const Search: Icon;
  export const Send: Icon;
  export const SendHorizontal: Icon;
  export const Shield: Icon;
  export const ShieldCheck: Icon;
  export const Smartphone: Icon;
  export const Sparkles: Icon;
  export const Star: Icon;
  export const Stethoscope: Icon;
  export const Target: Icon;
  export const TrendingUp: Icon;
  export const Trees: Icon;
  export const UserCheck: Icon;
  export const UserPlus: Icon;
  export const Users: Icon;
  export const Volume2: Icon;
  export const VolumeX: Icon;
  export const X: Icon;
  export const Zap: Icon;
}
