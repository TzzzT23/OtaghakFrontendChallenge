import Image from "next/image";
import Button from "components/molecules/button";
import Divider from "components/atoms/divider";

import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["header--logo"]}>
        <Image
          src={
            "https://cdn.otaghak.com/otg-images-new/Web/Icon/general/logotype-large.svg"
          }
          alt={"otaghak"}
          fill
        />
      </div>
      <div className={styles["header--links"]}>
        <Button data-selector="mobile-only" icon="phone-call" iconSize={20}>
          تماس با پشتیبانی
        </Button>
        <Button icon="guest-house">میزبان شوید</Button>
        <Divider />
        <Button icon="download">دانلود اپلیکیشن</Button>
        <Divider />
        <Button icon="support">پشتیبانی</Button>
        <Divider />
        <Button icon="user">ورود / ثبت نام</Button>
      </div>
    </div>
  );
}
