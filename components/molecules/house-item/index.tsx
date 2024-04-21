import { useRouter } from "next/router";

import type { IRoom } from "./interface";
import styles from "./house-item.module.css";

export default function HouseItem({
  afterDiscount,
  basePrice,
  roomName,
  totalDiscountValue,
  id,
}: IRoom) {
  const { push } = useRouter();

  function handleClick() {
    push(`/room/${id}`);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      className={styles["house-item"]}
      data-selector="house-item"
    >
      <div className={styles["house-item--picture"]}>
        <img src="/house-template.jpg" alt="house-templates" />
      </div>
      <div className={styles["house-item--title"]}>{roomName}</div>
      <div className={styles["house-item__footer"]}>
        <div data-selector="price">
          هر شب از <span>{afterDiscount.toLocaleString()}</span> تومان
        </div>
        {totalDiscountValue > 0 && (
          <div data-selector="discount">
            <div data-selector="diff">{basePrice.toLocaleString()}</div>
            <div>% {totalDiscountValue}</div>
          </div>
        )}
      </div>
    </div>
  );
}
