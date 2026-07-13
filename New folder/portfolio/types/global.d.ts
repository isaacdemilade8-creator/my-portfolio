declare module 'lucide-react' {
  import { ComponentType, SVGAttributes } from 'react';
  
  export interface LucideProps extends SVGAttributes<SVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
    color?: string;
    strokeWidth?: number | string;
  }
  
  export type LucideIcon = ComponentType<LucideProps>;

  export const Github: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Mail: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const Download: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const MapPin: LucideIcon;
  export const Calendar: LucideIcon;
  export const Code2: LucideIcon;
  export const Zap: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Trophy: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Star: LucideIcon;
  export const Quote: LucideIcon;
  export const Send: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Loader: LucideIcon;
  export const Heart: LucideIcon;
  export const ArrowUp: LucideIcon;
}
