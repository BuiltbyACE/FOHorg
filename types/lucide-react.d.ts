declare module "lucide-react" {
  import * as React from "react";

  interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  type LucideIcon = React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;

  export const AlertCircle: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Award: LucideIcon;
  export const BarChart3: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Building2: LucideIcon;
  export const Camera: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCheck: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const CircleCheckBig: LucideIcon;
  export const ClipboardList: LucideIcon;
  export const Clock: LucideIcon;
  export const Compass: LucideIcon;
  export const Droplets: LucideIcon;
  export const Eye: LucideIcon;
  export const FileText: LucideIcon;
  export const Gift: LucideIcon;
  export const Globe: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const HandHeart: LucideIcon;
  export const Handshake: LucideIcon;
  export const Heart: LucideIcon;
  export const HeartHandshake: LucideIcon;
  export const HeartPulse: LucideIcon;
  export const Home: LucideIcon;
  export const Info: LucideIcon;
  export const Leaf: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Menu: LucideIcon;
  export const Mic: LucideIcon;
  export const Pause: LucideIcon;
  export const Phone: LucideIcon;
  export const PieChart: LucideIcon;
  export const Play: LucideIcon;
  export const Plus: LucideIcon;
  export const Quote: LucideIcon;
  export const Search: LucideIcon;
  export const Send: LucideIcon;
  export const SendHorizontal: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Star: LucideIcon;
  export const Stethoscope: LucideIcon;
  export const Target: LucideIcon;
  export const TreePine: LucideIcon;
  export const Trees: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const UserCheck: LucideIcon;
  export const UserPlus: LucideIcon;
  export const Users: LucideIcon;
  export const Volume2: LucideIcon;
  export const VolumeX: LucideIcon;
  export const X: LucideIcon;
  export const Zap: LucideIcon;
  export const UsersRound: LucideIcon;
}
