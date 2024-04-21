import { useRouter } from "next/router";
import { useEffect } from "react";
import useMutation from "utils/hooks/useMutation";
import HouseItem from "components/molecules/house-item";

import { API } from "utils/statics/API";
import styles from "./house-list.module.css";

export default function HouseList() {
  const { query, asPath } = useRouter();
  const { callApi: getRooms, data, isLoading, error } = useMutation();

  useEffect(() => {
    if (asPath === "/" && !query.id) {
      getRooms(API.getRooms, { cityName: "Tehran" });
    } else if (query.id) {
      getRooms(API.getRooms, { cityName: query.id as string });
    }
  }, [asPath, query]);

  return (
    <div className={styles["house-list"]}>
      <div className={styles["house-list--title"]}>
        اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی در {query?.id || "تهران"}
      </div>
      {isLoading && <div>در حال دریافت لیست اتاق های مورد نظر ...</div>}
      {error?.message && <div>{error.message}</div>}
      {data && (
        <div className={styles["house-list--wrapper"]}>
          {data?.rooms.map((item) => (
            <HouseItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
