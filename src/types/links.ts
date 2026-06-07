import { ComponentType, SVGProps } from "react";
import { IconType } from "react-icons";

export interface TLink {
  label: string;
  href: string;
  icon: IconType | ComponentType<SVGProps<SVGSVGElement>>;
}
