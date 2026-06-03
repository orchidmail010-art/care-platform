"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function SalaryCalculatorInfoPage() {
  const faqs = [
    {
      q: "사회복지사/요양 관련 급여는 어떻게 계산하나요?",
      a: "급여는 기본급, 수당, 근무 형태(정규/비정규), 지역별 차이 등 여러 요소로 구성됩니다. 이 페이지는 안내용입니다.",
    },
    {
      q: "계약직과 정규직 급여 차이는 어느 정도인가요?",
      a: "기관과 직무에 따라 다르지만 일반적으로 정규직이 복리후생과 안정성 면에서 유리합니다.",
    },
    {
      q: "추가 수당은 어떻게 적용되나요?",
      a: "야간근무, 휴일근무, 직책수당 등은 기관 규정에 따라 추가 지급됩니다. 근로계약서를 확인하세요.",
    },
    {
      q: "정확한 실수령액은 어디서 확인하나요?",
      a: "세금, 4대보험 공제 등 요소에 따라 달라집니다. 급여명세서와 기관 인사팀에서 최종 확인이 가능합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">계산기 안내</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">급여 계산 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">직종별 급여 구성과 계산 가이드를 제공합니다. 실제 계산기는 추후 제공될 예정입니다.</p>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">급여 구성 요소</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">기본급, 수당, 세금 및 보험 공제 등 실수령액을 구성하는 주요 요소를 안내합니다.</p>
        </article>

        <MiddleAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900">
                  {faq.q}
                  <span className="text-slate-500">+</span>
                </summary>
                <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-700">{faq.a}</div>
              </details>
            ))}
          </div>
        </article>

        <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/caregiver-info/salary" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">요양보호사 급여</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 급여와 수당 정보를 확인하세요.</p>
            </Link>
            <Link href="/social-worker-info/salary" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">사회복지사 급여</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 급여 수준과 사례를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">복지 관련 지원 혜택을 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여 관련 정보를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
