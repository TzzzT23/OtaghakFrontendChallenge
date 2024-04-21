type IconIdType =
  | "user"
  | "phone-call"
  | "support"
  | "download"
  | "guest-house";

export interface IconProps {
  id: IconIdType;
  width?: number;
  height?: number;
  className?: string;
}
