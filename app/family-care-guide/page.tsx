import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function FamilyCareGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">가족요양 안내</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            가족요양 제도 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양은 장기요양보험 제도 안에서 요양보호사 자격을 가진 가족이 수급자를 돌보는 서비스입니다. 본 안내 페이지는
            가족요양 조건, 60분형과 90분형 차이, 가족요양 가능한 가족 범위, 실제 이용 시 주의사항을 쉽게 확인할 수 있도록
            구성했습니다.
          </p>

          <div className="mt-6">
            <Link
              href="/family-care-calculator"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              가족요양 계산기 바로가기
            </Link>
          </div>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양은 장기요양등급을 받은 수급자를 가족이 직접 돌보는 경우, 일정 조건 충족 시 장기요양급여를 적용받는
              제도입니다. 방문요양과 달리 요양보호사 자격을 가진 가족이 서비스 제공자로 참여한다는 점이 핵심입니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 조건</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                가족요양을 이용하려면 수급자가 장기요양등급을 보유하고 있어야 하며, 서비스를 제공하는 가족이 요양보호사 자격을
                갖춰야 합니다.
              </p>
              <p>
                실제 이용 가능 여부는 가족관계, 제공 기록, 공단 인정 기준, 기관 운영 조건에 따라 달라질 수 있어 사전 확인이
                필요합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">60분형과 90분형 차이</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">60분형</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  일반적인 가족요양 기준으로 적용되는 유형입니다. 월 이용 횟수와 급여는 공단 기준과 제공 조건에 따라 산정됩니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">90분형</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  만 65세 이상 배우자 돌봄 또는 치매·문제행동 등 공단 인정 조건이 있는 경우에 적용 가능한 조건부 유형입니다.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 가능한 가족 범위</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양은 일반적으로 배우자 및 직계가족 등 공단 기준에서 인정하는 가족관계 범위 내에서 가능 여부를 검토합니다.
              다만 동일 세대 여부, 실제 돌봄 제공 사실, 기관 등록 요건에 따라 인정 범위가 달라질 수 있으므로 반드시 장기요양기관
              또는 국민건강보험공단에서 최신 기준을 확인해야 합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 시 주의사항</h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:text-base">
              <p>가족요양 계산기 결과는 참고용 예상값이며 실제 급여 및 본인부담금과 차이가 발생할 수 있습니다.</p>
              <p>공단 고시 수가 개정, 장기요양기관 계약 조건, 제공 기록 심사 결과에 따라 최종 지급 금액이 달라집니다.</p>
              <p>서비스 시작 전 장기요양기관 상담을 통해 이용 가능 여부와 급여 산정 기준을 확인하는 것이 안전합니다.</p>
            </div>
          </article>
        </section>
<section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              가족요양 자주 묻는 질문
            </h2>

            <div className="mt-4 space-y-3">
              {[
                {
                  q: "가족요양은 누구나 받을 수 있나요?",
                  a: "장기요양등급을 받은 수급자이고, 요양보호사 자격을 가진 가족이 돌봄을 제공하는 등 일정 조건을 충족해야 합니다.",
                },
                {
                  q: "가족요양은 하루 몇 분까지 가능한가요?",
                  a: "일반적으로 60분형이 기본이며, 일정 조건을 충족하면 90분형이 적용될 수 있습니다.",
                },
                {
                  q: "가족요양 급여는 실제로 얼마인가요?",
                  a: "급여는 이용 시간, 월 제공 횟수, 기관 정산 기준에 따라 달라질 수 있어 계산기를 통해 예상 금액을 확인하는 것이 좋습니다.",
                },
                {
                  q: "가족요양과 방문요양은 다른 제도인가요?",
                  a: "둘 다 장기요양보험 안의 방문요양 서비스와 관련되지만, 가족요양은 가족이 요양보호사로 서비스를 제공한다는 점이 다릅니다.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow duration-200 ease-out"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-4 text-base font-semibold text-slate-900 transition-colors duration-200 ease-out hover:text-slate-700">
                    {faq.q}
                    <span className="text-slate-500 transition-transform duration-200 ease-out group-open:-rotate-45">+</span>
                  </summary>
                  <div className="overflow-hidden border-t border-slate-200 px-4 transition-[max-height,opacity] duration-300 ease-out max-h-0 opacity-0 group-open:max-h-60 group-open:py-4 group-open:opacity-100">
                    <p className="text-sm leading-6 text-slate-700">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </article>
</section>

<section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              함께 보면 좋은 서비스
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Link
                href="/long-term-care"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  등급 신청 절차와 이용 가능한 서비스를 확인하세요.
                </p>
              </Link>

              <Link
                href="/visit-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  방문요양 이용 시간과 본인부담 기준을 확인하세요.
                </p>
              </Link>

              <Link
                href="/support-benefits"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  본인부담 경감과 지자체 지원 정보를 확인하세요.
                </p>
              </Link>
            </div>
          </article>
</section>
      </section>
    </main>
  );
}
