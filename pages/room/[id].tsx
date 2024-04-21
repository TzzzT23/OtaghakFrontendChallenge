import { useRouter } from "next/router";
import Header from "components/organisms/header";

export default function RoomPage() {
  const { query } = useRouter();

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginBlockStart: "3rem" }}>
        شناسه اتاق انتخاب شده: {query?.id}
      </div>
    </>
  );
}
