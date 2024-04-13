import ComingSoon from "@/components/common/coming-soon";
import { Header } from "@/components/header";
import { ModeToggle } from "@/components/theme/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      {/* <ModeToggle /> */}
      <ComingSoon />
    </main>
  );
}
