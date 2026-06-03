"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function CopaymentCalculatorInfoPage() {
  const faqs = [
    {
      q: "본인부담금 계산은 어떻게 하나요?",
      a: "본인부담금은 서비스 종류와 등급, 감면 여부에 따라 달라집니다. 자세한 계산 방법은 각 서비스 안내 페이지와 상담을 통해 확인하세요.",
    },
    {
      q: "감면 대상자는 본인부담금을 줄일 수 있나요?",
      a: "예. 기초수급자, 차상위 계층 등은 본인부담금 감면 대상에 해당할 수 있습니다. 자세한 요건은 지자체와 복지기관에 문의하세요.",
    },
    {
      q: "복수 서비스를 이용하면 본인부담금이 어떻게 적용되나요?",
      a: "서비스별로 본인부담금 산정 방식이 다를 수 있습니다. 중복 적용 여부와 계산 방식은 담당 기관에 문의해 확인하세요.",
    },
    {
      q: "정확한 금액은 어디서 확인할 수 있나요?",
      a: "공식 확인은 서비스 제공 기관 또는 관련 상담 창구에서 가능합니다. 이 페이지는 안내용이며, 실제 금액은 기관 확인을 권장합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">계산기 안내</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">본인부담금 계산 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">본인부담금 계산기의 안내 페이지입니다. 실제 계산기는 준비 중이며, 여기서는 계산 방식과 확인 방법을 안내합니다.</p>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">본인부담금 기본 안내</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">본인부담금은 서비스 단가와 이용 시간, 이용자의 감면 여부에 따라 달라집니다. 계산기 출시 전까지는 아래 정보를 참고하세요.</p>
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
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 본인부담금 계산기를 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여 계산 안내 페이지로 이동합니다.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면과 지원 정보를 확인하세요.</p>
            </Link>
            <Link href="/caregiver-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">요양보호사 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">서비스 제공자 관련 정보를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
