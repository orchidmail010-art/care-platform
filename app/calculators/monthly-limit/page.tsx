"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function MonthlyLimitInfoPage() {
  const faqs = [
    {
      q: "월 한도액은 어떻게 정해지나요?",
      a: "등급별로 월 한도액이 정해지며, 서비스 종류와 지자체 기준에 따라 달라질 수 있습니다. 자세한 한도는 관련 안내를 확인하세요.",
    },
    {
      q: "한도를 초과하면 어떻게 되나요?",
      a: "한도를 초과한 이용은 본인 부담이 발생하거나 서비스 이용 제약이 있을 수 있습니다. 사전에 기관과 상담하세요.",
    },
    {
      q: "인지지원등급의 한도는 어떻게 다른가요?",
      a: "인지지원등급은 별도의 한도 기준이 적용되므로 장기요양 등급 안내 페이지에서 세부사항을 확인하세요.",
    },
    {
      q: "정확한 한도는 어디서 확인하나요?",
      a: "공식 정보는 지자체 또는 담당 기관에서 확인해야 합니다. 이 페이지는 안내용입니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">계산기 안내</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">월 한도액 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">등급별 월 한도액과 산정 기준에 대한 안내입니다. 실제 한도 확인은 담당 기관에서 권장합니다.</p>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">월 한도액 기본 안내</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">월 한도액은 등급별 급여 기준에 따라 산정됩니다. 복합 서비스 이용자나 감면 대상자는 별도 기준이 적용될 수 있습니다.</p>
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
            <Link href="/visit-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">월 한도액을 기준으로 이용 계획을 세워보세요.</p>
            </Link>
            <Link href="/visit-care-guide/monthly-limit" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">월 한도 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양의 월별 한도 기준을 확인하세요.</p>
            </Link>
            <Link href="/long-term-care/grade" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">장기요양 등급</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">등급별 한도와 서비스 차이를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면 대상과 지원 혜택을 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
