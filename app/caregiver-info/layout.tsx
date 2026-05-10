import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "요양보호사 정보 | 자격증 취득 조건과 취업 가이드",
  description:
    "요양보호사 자격증 취득 조건, 교육시간, 교육기관, 취업 분야, 월급 현실, 가족요양과의 관계를 한눈에 확인하세요.",
};

export default function CaregiverInfoLayout({ children }: { children: ReactNode }) {
  return children;
}
