"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function WriteGuidePage() {
  const tips = [
    { t: "개인정보 주의", d: "실명, 주민등록번호, 연락처 등 민감정보는 공유하지 마세요." },
    { t: "허위·비방 금지", d: "타인에 대한 비방이나 허위사실 작성은 금지됩니다." },
    { t: "광고 및 스팸 금지", d: "상업적 광고나 스팸성 글은 허용되지 않습니다." },
    { t: "저장 기능 없음", d: "현재는 실제 글 저장 기능이 없으며, 작성 후 게시되지 않습니다." },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">커뮤니티 — 글쓰기 안내</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">글쓰기 전 확인사항</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">질문·후기·구인구직 글 작성 전 다음 항목을 확인하세요. 실제 저장 기능은 제공하지 않으니 안내용으로만 참고하세요.</p>

          <div className="mt-4 flex gap-3">
            <Link href="/community/questions" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">질문게시판 안내</Link>
            <Link href="/community/reviews" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">후기게시판 안내</Link>
          </div>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">개인정보 주의</h2>
          <p className="mt-3">개인정보는 공개 게시 시 오용될 수 있으니, 민감정보는 절대 공개하지 마세요.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">광고·스팸·비방 금지</h2>
          <p className="mt-3">상업적 광고, 반복적 스팸, 특정 개인·기관에 대한 비방성 글은 금지합니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">작성 전 확인 항목</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-slate-700">
            <li>개인정보 포함 여부 확인</li>
            <li>사실 기반으로 작성</li>
            <li>타인 비방·명예훼손 금지</li>
            <li>광고·상업성 문구 배제</li>
          </ul>
        </article>

        <MiddleAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">저장 및 게시 안내</h2>
          <p className="mt-3">현재 이 서비스는 게시글 저장 기능을 제공하지 않습니다. 실제 게시 기능은 준비 중이며, 이 페이지는 작성 가이드입니다.</p>
        </article>

        <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/long-term-care" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">장기요양 안내</Link>
            <Link href="/family-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">가족요양 안내</Link>
            <Link href="/visit-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">방문요양 안내</Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">지원금·감면 안내</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
