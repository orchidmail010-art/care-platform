"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function FormsResourcePage() {
  const faqs = [
    {
      q: "실무 서식은 어떻게 활용하나요?",
      a: "상담일지, 방문기록지 등은 현장 업무 흐름에 맞춰 작성하는 것이 중요합니다. 기관 내 양식 기준을 확인하세요.",
    },
    {
      q: "상담일지 작성 시 주의할 점은 무엇인가요?",
      a: "개인정보 보호와 사실 기반의 기록을 우선으로 하며, 주관적 판단은 최소화하세요.",
    },
    {
      q: "방문기록지는 어떤 정보를 포함해야 하나요?",
      a: "서비스 제공 시간, 제공한 서비스 내용, 대상자 상태, 특이사항 및 서명 등을 포함하는 것이 일반적입니다.",
    },
    {
      q: "사례관리 기록은 어떻게 정리하나요?",
      a: "사례의 문제 정의, 목표 설정, 개입 계획과 결과를 일관되게 기록하여 추적이 가능하도록 하세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">자료실 — Forms</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">실무 서식 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">현장 실무에서 자주 사용하는 서식 안내와 작성 팁을 제공합니다. 이 페이지는 안내용이며, 기관별 양식 기준을 확인하세요.</p>

          <div className="mt-4 flex gap-3">
            <Link href="/caregiver-info" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">요양보호사 안내 보기</Link>
            <Link href="/social-worker-info" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">사회복지사 안내 보기</Link>
          </div>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">1. 실무서식 개요</h2>
          <p className="mt-3">현장에서 자주 사용하는 서식의 목적과 기본 구성요소를 안내합니다. 서식은 기관 운영방식에 맞춰 활용하세요.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">2. 상담일지 작성 가이드</h2>
          <p className="mt-3">구체적이고 사실 중심의 상담기록을 남기는 방법과 항목별 작성 팁을 설명합니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">3. 방문기록지 작성 요령</h2>
          <p className="mt-3">방문 시 기록해야 할 항목과 시간관리 팁, 서명 및 보관 방법을 안내합니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">4. 사례관리 기록 구성</h2>
          <p className="mt-3">사례관리의 흐름에 맞춰 기록을 구성하는 방법과 목표 설정 예시를 제공합니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">5. 센터 실무 활용 예시</h2>
          <p className="mt-3">서식을 실제 업무에 적용하는 예시와 운영 팁을 초보자 시각에서 설명합니다.</p>
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
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금·감면 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면 대상과 절차를 확인하세요.</p>
            </Link>
            <Link href="/caregiver-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">요양보호사 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">제공자와 채용 정보를 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여 안내 페이지로 이동합니다.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 급여 예측 안내입니다.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
