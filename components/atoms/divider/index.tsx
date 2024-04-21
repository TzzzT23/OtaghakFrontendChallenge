import type { DividerProps } from "./interface";

export default function Divider({ direction = "vertical" }: DividerProps) {
  return (
    <div
      style={
        direction === "vertical"
          ? {
              borderInlineEnd: "1px solid #E1E1EE",
              marginInline: "0.5rem",
              height: "1.5rem",
            }
          : { borderBlockEnd: "1px solid #E1E1EE" }
      }
    />
  );
}
