"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function QuestionsPage() {
  const faqs = [
    { q: "장기요양 등급은 어떻게 확인하나요?", a: "등급 판정과 관련된 일반 안내입니다. 지역 관할 복지센터에서 최신 정보를 확인하세요." },
    { q: "가족요양은 어떤 경우에 신청하나요?", a: "가족 돌봄이 필요한 경우 가족요양 제도에 대한 기본 안내입니다. 기관 상담을 권장합니다." },
    { q: "방문요양 신청 절차가 궁금해요.", a: "수급자격 판정 후 관할 기관을 통해 신청 절차가 진행됩니다. 세부 절차는 기관에 따라 다를 수 있습니다." },
    { q: "서비스 이용 중 문제가 생기면 어디로 문의하나요?", a: "우선 제공기관과 상담하고, 해결되지 않으면 관할 복지센터에 문의하세요." },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">커뮤니티 — 질문</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">장기요양 질문게시판 (준비 중)</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">장기요양·가족요양·방문요양 관련 질문을 남길 수 있는 공간 안내입니다. 현재는 게시판 기능 준비 중이며, 안내형 페이지로 제공됩니다.</p>

          <div className="mt-4 flex gap-3">
            <Link href="/long-term-care" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">장기요양 안내</Link>
            <Link href="/visit-care-guide" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">방문요양 안내</Link>
          </div>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">게시판 이용 안내</h2>
          <p className="mt-3">이 게시판은 질문을 나누기 위한 공간으로 계획 중입니다. 현재는 기능 준비 단계이며, 문의 시에는 관련 기관에 문의하시기 바랍니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">예시: 자주 묻는 질문</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">등급 판정에 필요한 서류</h3>
              <p className="mt-2 text-sm text-slate-700">의료 소견서, 가족관계증명서 등 기본 서류 안내.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">방문요양 서비스 시간 변경</h3>
              <p className="mt-2 text-sm text-slate-700">변경 요청 시 제공기관과 사전 협의가 필요합니다.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">감면 신청 문의</h3>
              <p className="mt-2 text-sm text-slate-700">지자체별 기준이 다르니 관할 기관 확인을 권장합니다.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">서비스 불만 접수 방법</h3>
              <p className="mt-2 text-sm text-slate-700">먼저 제공기관에 문의 후, 필요 시 관할 기관에 신고하세요.</p>
            </div>
          </div>
        </article>

        <MiddleAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문 예시</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900">{f.q}<span className="text-slate-500">+</span></summary>
                <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-700">{f.a}</div>
              </details>
            ))}
          </div>
        </article>

        <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/long-term-care" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">장기요양 안내</Link>
            <Link href="/family-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">가족요양 안내</Link>
            <Link href="/visit-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">방문요양 안내</Link>
            <Link href="/caregiver-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">요양보호사 안내</Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">지원금·감면 안내</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
