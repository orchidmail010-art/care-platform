"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function ReviewsPage() {
  const examples = [
    "가족요양 서비스 경험 공유",
    "방문요양 제공자 태도와 전문성 후기",
    "요양기관 입·퇴소 경험",
    "요양보호사 근무 환경 후기",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">커뮤니티 — 후기</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">요양 서비스 후기게시판 (준비 중)</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">가족요양·방문요양·요양보호사 관련 후기 공유 공간 안내입니다. 현재는 준비 중이며, 안내형 페이지로 제공됩니다.</p>

          <div className="mt-4 flex gap-3">
            <Link href="/family-care-guide" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">가족요양 안내</Link>
            <Link href="/caregiver-info" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">요양보호사 안내</Link>
          </div>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">후기 예시 주제</h2>
          <div className="mt-4 grid gap-3">
            {examples.map((ex) => (
              <div key={ex} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{ex}</h3>
                <p className="mt-2 text-sm text-slate-700">후기 작성 시에는 개인정보와 특정 인물 비방을 피하고 사실 중심으로 작성해주세요.</p>
              </div>
            ))}
          </div>
        </article>

        <MiddleAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">게시판 준비 안내</h2>
          <p className="mt-3">게시판은 준비 단계입니다. 실제 게시 및 저장 기능은 제공하지 않으며, 안내와 예시 중심으로 구성되어 있습니다.</p>
        </article>

        <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/visit-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">방문요양 안내</Link>
            <Link href="/family-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">가족요양 안내</Link>
            <Link href="/caregiver-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">요양보호사 안내</Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">지원금·감면 안내</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
