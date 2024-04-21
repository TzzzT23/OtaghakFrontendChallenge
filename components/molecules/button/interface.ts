import type { IconProps } from "components/atoms/icon/interface";
import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  icon?: IconProps["id"];
  className?: string;
  iconSize?: number;
}
