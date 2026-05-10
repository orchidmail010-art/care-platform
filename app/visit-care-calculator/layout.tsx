import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "방문요양 본인부담금 계산기 | 장기요양 예상 비용 계산",
  description:
    "장기요양 방문요양 본인부담금과 예상 급여를 계산해보세요. 등급별 한도액, 이용시간, 본인부담률 기준 자동 계산 지원.",
};

export default function VisitCareCalculatorLayout({ children }: { children: ReactNode }) {
  return children;
}
