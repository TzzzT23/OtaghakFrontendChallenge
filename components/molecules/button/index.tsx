import Icon from "components/atoms/icon";

import type { ButtonProps } from "./interface";
import styles from "./button.module.css";

export default function Button({
  children,
  icon = undefined,
  className = "",
  iconSize = 24,
  ...restProps
}: ButtonProps) {
  return (
    <div className={`${styles["button"]} ${className}`} {...restProps}>
      {icon && <Icon id={icon} width={iconSize} height={iconSize} />}
      <button>{children}</button>
    </div>
  );
}
