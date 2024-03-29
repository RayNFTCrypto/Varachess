import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Page({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: string };
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
}
