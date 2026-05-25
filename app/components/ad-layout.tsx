import type { ReactNode } from "react";
import TopAd from "./ads/top-ad";
import MiddleAd from "./ads/middle-ad";
import BottomAd from "./ads/bottom-ad";

type AdLayoutProps = {
  header: ReactNode;
  children: ReactNode;
};

export default function AdLayout({ header, children }: AdLayoutProps) {
  return (
    <>
      {header}
      <TopAd />
      {children}
    </>
  );
}

export { MiddleAd, BottomAd };
