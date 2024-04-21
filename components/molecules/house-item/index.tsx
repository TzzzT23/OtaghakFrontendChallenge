import styles from "./house-item.module.css";

interface HouseItemProps {
  price: number;
  discount?: number;
  discountPercent?: number;
}

export default function HouseItem({
  price,
  discount = undefined,
  discountPercent = undefined,
}: HouseItemProps) {
  return (
    <div className={styles["house-item"]} data-selector="house-item">
      <div className={styles["house-item--picture"]}>
        <img src="/house-template.jpg" alt="house-templates" />
      </div>
      <div className={styles["house-item--title"]}>
        نوشته برای تست تایتل هر کارت که باید با دیتای اصلی جایگزین شود
      </div>
      <div className={styles["house-item__footer"]}>
        <div data-selector="price">
          هر شب از <span>{price.toLocaleString()}</span> تومان
        </div>
        {discount && (
          <div data-selector="discount">
            <div data-selector="diff">{discount.toLocaleString()}</div>
            <div>% {discountPercent}</div>
          </div>
        )}
      </div>
    </div>
  );
}
