"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function JobsPage() {
  const tips = [
    { title: "구인 공고 작성 요령", desc: "직무 내용, 근무지, 근무시간, 급여 및 우대사항을 명확히 기재하세요." },
    { title: "구직자 이력서 팁", desc: "경력 중심으로 간결하게 작성하고 자격증·교육 이력을 포함하세요." },
    { title: "면접 준비 체크리스트", desc: "근무 가능 시간, 교통 편의성, 업무 범위를 명확히 확인하세요." },
    { title: "근로계약 시 유의사항", desc: "임금, 근무시간, 휴가, 4대 보험 적용 여부 등을 사전 확인하세요." },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">커뮤니티 — 구인구직</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">요양보호사 구인구직 안내 (준비 중)</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">요양보호사·사회복지사·기관 구인구직 정보를 나눌 수 있는 공간으로 계획 중입니다. 현재는 안내형 페이지입니다.</p>

          <div className="mt-4 flex gap-3">
            <Link href="/caregiver-info" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">요양보호사 안내</Link>
            <Link href="/social-worker-info" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">사회복지사 안내</Link>
          </div>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">구인구직 이용 안내</h2>
          <p className="mt-3">안전한 구인구직 활동을 위해 개인정보 노출에 유의하시고, 사기성 채용 공고에 주의하세요. 실제 공고 게시 기능은 준비 중입니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취업 관련 안내 카드</h2>
          <div className="mt-4 grid gap-3">
            {tips.map((t) => (
              <div key={t.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{t.desc}</p>
              </div>
            ))}
          </div>
        </article>

        <MiddleAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취업 준비 팁</h2>
          <p className="mt-3">지원 전 준비해야 할 서류와 면접 팁, 계약 시 유의사항을 초보자도 이해하기 쉽게 안내합니다.</p>
        </article>

        <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/caregiver-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">요양보호사 안내</Link>
            <Link href="/social-worker-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">사회복지사 안내</Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">지원금·감면 안내</Link>
            <Link href="/visit-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">방문요양 안내</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
