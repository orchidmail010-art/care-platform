"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function TemplatesResourcePage() {
  const faqs = [
    {
      q: "실무 템플릿은 어떤 상황에서 유용한가요?",
      a: "상담, 사례회의, 보고서 작성 등 반복되는 업무에서 일관된 기록을 유지하고 시간 절약에 도움이 됩니다.",
    },
    {
      q: "상담 템플릿 작성 시 고려할 점은 무엇인가요?",
      a: "대상자의 개인정보 보호, 목표 중심 기록, 추적 가능한 개입 기록을 우선으로 설계하세요.",
    },
    {
      q: "사례회의 템플릿은 어떻게 구성하면 좋나요?",
      a: "사례 배경, 목표, 개입 계획, 담당자, 일정, 기대 결과 등을 명확히 정리하면 효과적입니다.",
    },
    {
      q: "템플릿은 기관별로 수정해도 되나요?",
      a: "네. 기관 운영 방식과 법적 요구에 맞춰 템플릿을 적절히 수정하여 사용하세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">자료실 — Templates</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">실무 템플릿 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">상담·사례관리·회의 등에서 활용할 수 있는 템플릿 설명과 작성 팁을 제공합니다. 이 페이지는 안내용이며, 기관 규정에 맞춰 사용하세요.</p>

          <div className="mt-4 flex gap-3">
            <Link href="/resources/forms" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">실무 서식 보기</Link>
            <Link href="/caregiver-info" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">요양보호사 안내</Link>
          </div>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">1. 실무 템플릿 개요</h2>
          <p className="mt-3">템플릿의 목적과 기본 구성 요소, 사용 시 유의사항을 쉽게 설명합니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">2. 상담 템플릿 안내</h2>
          <p className="mt-3">상담 기록을 효율적으로 남기는 템플릿 구성과 예시를 안내합니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">3. 사례회의 템플릿</h2>
          <p className="mt-3">사례회의에서 사용할 수 있는 템플릿 항목과 진행 팁을 제공합니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">4. 어르신 상담 템플릿</h2>
          <p className="mt-3">어르신 대상 상담 시 배려해야 할 표현과 기록 팁을 포함한 템플릿 안내입니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">5. 사회복지사 업무 템플릿</h2>
          <p className="mt-3">보고서, 점검표 등 사회복지사 업무에 유용한 템플릿 활용법을 설명합니다.</p>
        </article>

        <MiddleAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
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
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/resources/forms" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">실무 서식</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">상담일지·방문기록지 등 서식 안내입니다.</p>
            </Link>
            <Link href="/caregiver-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">요양보호사 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">제공자 관련 정보를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금·감면 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면 대상과 절차를 확인하세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">등급·급여·한도 등 정보를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
