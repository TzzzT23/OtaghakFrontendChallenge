import type { IconProps } from "./interface";

export default function Icon({
  id,
  width = 24,
  height = 24,
  className = undefined,
}: IconProps) {
  return (
    <svg
      style={{ outline: "none" }}
      width={width}
      height={height}
      className={className}
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}
