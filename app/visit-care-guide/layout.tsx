import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "방문요양 안내 | 장기요양 이용 기준과 본인부담금 정보",
  description:
    "방문요양 제도, 장기요양 등급별 이용 기준, 이용시간별 수가, 본인부담금 계산 방법을 한눈에 확인하세요. 방문요양 계산기로 예상 비용도 확인할 수 있습니다.",
};

export default function VisitCareGuideLayout({ children }: { children: ReactNode }) {
  return children;
}
