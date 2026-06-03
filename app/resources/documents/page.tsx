"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function DocumentsResourcePage() {
  const faqs = [
    {
      q: "공단 관련 서류는 어디서 확인하나요?",
      a: "국가 및 지자체의 공식 안내문을 통해 서류 양식과 제출 절차를 확인하세요. 이 페이지는 안내용이며, 최종 서류는 관할 기관을 통해 확인하시기 바랍니다.",
    },
    {
      q: "장기요양 신청 시 주로 필요한 서류는 무엇인가요?",
      a: "신청서, 의료기관 소견서, 가족관계증명서 등 기본 서류가 필요합니다. 지자체별로 추가 서류가 요구될 수 있습니다.",
    },
    {
      q: "방문요양 관련 제출 서류는 어떤 것이 있나요?",
      a: "서비스 신청서와 담당 의사의 소견서, 수급자격 확인 서류 등이 일반적입니다. 기관에 따라 요구 항목이 다를 수 있습니다.",
    },
    {
      q: "자주 제출하는 서류는 어떤 것들인가요?",
      a: "신청서, 동의서, 의료 소견서, 수급자격 확인서류 등이 자주 제출됩니다. 기관에서 요구하는 최신 양식을 확인하세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">자료실 — Documents</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">공단·기관 제출 서류 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">장기요양과 방문요양 등 서비스 신청 시 자주 요구되는 서류와 기본 안내입니다. 이 페이지는 안내형 콘텐츠이며, 최종 제출 서류는 관할 기관을 확인하세요.</p>

          <div className="mt-4 flex gap-3">
            <Link href="/long-term-care" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">장기요양 안내 보기</Link>
            <Link href="/visit-care-guide" className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">방문요양 안내 보기</Link>
          </div>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">1. 공단서류 기본 안내</h2>
          <p className="mt-3">공단에서 요구하는 기본 서류와 확인 절차에 대한 안내입니다. 제출 전에 최근 양식을 확인하세요.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">2. 장기요양 신청서류</h2>
          <p className="mt-3">장기요양 신청 시 필요한 기본 서류(신청서, 의료 소견서 등)와 준비 팁을 안내합니다. 관할 기관에서 요구하는 세부 항목을 반드시 확인하세요.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">3. 방문요양 관련 서류</h2>
          <p className="mt-3">방문요양 서비스 신청과 이용에 필요한 서류 안내와 제출 시 주의사항을 정리했습니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">4. 가족요양 관련 서류</h2>
          <p className="mt-3">가족요양 관련 서류와 동의서, 가족관계 입증서류 등 자주 요구되는 항목을 정리했습니다.</p>
        </article>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 text-slate-700">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">5. 자주 제출하는 서류 설명</h2>
          <p className="mt-3">각 서류의 목적과 제출 시 유의사항을 초보자도 이해하기 쉽게 설명합니다. 기관에 따라 요구 항목이 상이하므로 최종 확인이 필요합니다.</p>
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
            <Link href="/long-term-care" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">등급·급여·한도 등 장기요양 정보를 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여 안내 페이지로 이동합니다.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 급여 예측 안내입니다.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금·감면 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면 대상과 절차를 참고하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
