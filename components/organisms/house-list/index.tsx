import HouseItem from "components/molecules/house-item";

import styles from "./house-list.module.css";

export default function HouseList() {
  const mockData = [
    { price: 5900000, id: 1 },
    { price: 5900000, id: 2 },
    { price: 5900000, id: 3 },
    { price: 5900000, id: 4 },
    { price: 5900000, discountPercent: 20, discount: 1000000, id: 5 },
    { price: 5900000, discountPercent: 20, discount: 1000000, id: 6 },
    { price: 5900000, discountPercent: 20, discount: 1000000, id: 7 },
  ];

  return (
    <div className={styles["house-list"]}>
      <div className={styles["house-list--title"]}>
        اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی در تهران
      </div>
      <div className={styles["house-list--wrapper"]}>
        {mockData.map((item) => (
          <HouseItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
