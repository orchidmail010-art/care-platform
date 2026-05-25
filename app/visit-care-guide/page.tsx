import Link from "next/link";
import SiteHeader from "../components/site-header";
import AdLayout, { MiddleAd, BottomAd } from "../components/ad-layout";

export default function VisitCareGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <AdLayout
          header={
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">방문요양 안내</p>
              <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">방문요양 제도 안내</h1>
              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                방문요양은 장기요양보험 수급자의 가정을 요양보호사가 방문하여 신체활동과 일상생활을 지원하는 서비스입니다. 이 페이지는
                방문요양이 무엇인지, 장기요양 등급별 이용 기준, 이용시간별 수가, 본인부담금 계산 방법과 실제 이용 시 주의사항을 한눈에
                확인할 수 있도록 구성했습니다.
              </p>

              <div className="mt-6">
                <Link
                  href="/visit-care-calculator"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
                >
                  방문요양 계산기 바로가기
                </Link>
              </div>
            </div>
          }
        >
          <section className="mt-5 space-y-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">방문요양이란?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                방문요양은 장기요양등급을 받은 수급자에게 요양보호사가 가정 방문 서비스를 제공하는 제도입니다. 식사, 위생, 이동,
                정서 지원 등 일상생활 전반을 돕는 서비스로, 수급자의 상태와 장기요양 인정 내용에 따라 제공 범위가 달라질 수 있습니다.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장기요양 등급별 이용 기준</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                방문요양은 장기요양 1등급부터 5등급, 인지지원등급까지 등급별 월 한도액 범위 안에서 이용합니다. 등급이 높을수록 월
                한도액이 커지는 구조이며, 실제 이용 가능 횟수는 선택한 이용시간과 1회 수가에 따라 달라집니다.
              </p>
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">등급별 한도 관리의 핵심</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  월 총 급여가 등급 한도액을 초과하면 초과분은 본인 부담으로 반영될 수 있어, 이용시간과 횟수를 계획적으로 조정하는
                  것이 중요합니다.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용시간별 수가 안내</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                방문요양 수가는 이용시간 구간(예: 30분, 60분, 90분, 120분 등)에 따라 다르게 적용됩니다. 이용시간이 길어질수록
                1회 급여는 상승하므로 월 이용 횟수와 함께 계산해야 정확한 예상 비용을 확인할 수 있습니다.
              </p>
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">수가 확인 포인트</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  공단 고시 수가가 매년 또는 정책에 따라 조정될 수 있으므로, 계산기 사용 시점의 최신 수가 기준을 확인하는 것이
                  필요합니다.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">본인부담금 계산 방법</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                방문요양 본인부담금은 일반, 감경40%, 감경60% 등 본인부담률에 따라 계산됩니다. 기본적으로 총 급여에서 공단 부담금을
                제외한 금액이 본인부담금이며, 등급 한도액을 초과한 금액은 추가 본인 부담이 발생할 수 있습니다.
              </p>
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">계산식 예시 구조</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  예상 총 급여 = 이용시간별 수가 × 월 이용 횟수, 본인부담금 = (한도 내 급여 × 본인부담률) + 한도 초과분 입니다.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">방문요양 이용 시 주의사항</h2>
              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:text-base">
                <p>계산기 결과는 참고용 예상값이며 실제 청구 금액과 차이가 발생할 수 있습니다.</p>
                <p>실제 비용은 공단 고시, 장기요양기관 계약, 서비스 제공 기록, 본인부담 경감 자격에 따라 달라집니다.</p>
                <p>서비스 시작 전 장기요양기관 또는 국민건강보험공단 상담을 통해 최신 이용 기준을 확인하는 것이 안전합니다.</p>
              </div>
            </article>
          </section>

          <MiddleAd />

          <section className="mt-5 space-y-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">방문요양 자주 묻는 질문</h2>

              <div className="mt-4 space-y-3">
                {[
                  {
                    q: "방문요양은 누가 이용할 수 있나요?",
                    a: "장기요양등급을 받은 수급자라면 등급별 한도 내에서 방문요양 서비스를 이용할 수 있습니다.",
                  },
                  {
                    q: "방문요양은 하루 몇 시간까지 가능한가요?",
                    a: "이용 가능 시간은 장기요양 등급과 월 한도액 범위 안에서 결정되며, 이용시간별 수가 기준에 따라 달라집니다.",
                  },
                  {
                    q: "방문요양 본인부담금은 어떻게 계산되나요?",
                    a: "총 급여에서 공단 부담금을 제외한 금액이 본인부담금이며, 감경 대상자는 부담률이 낮아질 수 있습니다.",
                  },
                  {
                    q: "방문요양과 가족요양을 함께 이용할 수 있나요?",
                    a: "조건에 따라 일부 병행이 가능할 수 있으나, 실제 이용 가능 여부는 장기요양기관과 공단 기준 확인이 필요합니다.",
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

          <BottomAd />

          <section className="mt-5 space-y-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 보면 좋은 서비스</h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Link
                  href="/family-care-guide"
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    가족요양 인정 기준과 급여 조건을 확인하세요.
                  </p>
                </Link>

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
        </AdLayout>
      </section>
    </main>
  );
}
