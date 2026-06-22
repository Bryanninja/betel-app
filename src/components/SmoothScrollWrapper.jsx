"use client";
import dynamic from "next/dynamic";

const SmoothScroll = dynamic(
  () => import("./landing/SmoothScroll"),
  { ssr: false }
);

export default function SmoothScrollWrapper({ children }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
