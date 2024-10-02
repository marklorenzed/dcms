import { type LucideIcon } from "lucide-react";
import { type IconType } from "react-icons";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon | IconType;
  color?: string;
  isChidren?: boolean;
  children?: NavItem[];
}
