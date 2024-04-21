import Header from "components/organisms/header";
import HouseList from "components/organisms/house-list";

import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles["home--background"]}>
        <img src="/hero-section-image.png" alt="houses-on-the-hills" />
        <span className={styles["home--background--overlay"]}>
          دریا کنار هنوز قشنگه ...
        </span>
      </div>
      <HouseList />
    </>
  );
}
