import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function VisitCareCopaymentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            방문요양 본인부담금
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            방문요양 본인부담금 기준 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 이용 시 발생하는 본인부담금 기준, 감경 대상, 한도 초과 시 주의사항을 쉽게 안내합니다.
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

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">방문요양 본인부담금이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 서비스 이용 시 수급자가 부담해야 하는 비용을 말합니다. 공단 부담금과 본인부담금은 이용시간, 등급,
              감경 여부 등에 따라 다르게 계산됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">일반 본인부담률 기준</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              일반적으로 방문요양 본인부담률은 15%가 적용됩니다. 등급, 소득 수준, 감경 대상 여부에 따라 본인부담률은
              달라질 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감경 대상과 감면 차이</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                감경 대상은 본인부담률을 낮춰주는 제도입니다. 예를 들어 장애인, 기초생활수급자 등은 9% 또는 6%로
                본인부담률이 낮아질 수 있습니다.
              </p>
              <p>
                감면은 본인부담금 일부를 면제받는 경우이며, 감경과 감면은 각각의 조건과 적용 범위가 다르므로 정확한 기준을
                확인해야 합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">등급별 월 한도액과의 관계</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 급여는 장기요양 등급별 월 한도액 내에서 공단 부담금과 본인부담금으로 나뉩니다. 한도액을 초과하면
              초과분은 본인부담금으로 계산됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">한도 초과 시 본인부담금</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              월 한도액을 초과하면 초과액은 전액 본인부담으로 계산됩니다. 이 경우 본인부담금이 크게 늘어나므로
              이용 횟수와 시간을 사전에 정확히 계산하는 것이 중요합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 전 확인해야 할 항목</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                방문요양 본인부담금을 계산할 때는 등급, 이용시간, 한도액, 감경 적용 여부, 기관별 비용 기준 등을 함께
                확인해야 합니다.
              </p>
              <p>
                공단 고시 수가와 실제 기관 운영 기준이 다를 수 있으므로, 신청 전 장기요양기관이나 공단에 문의하는 것이
                안전합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 시 주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 이용 전에는 계산기를 통해 예상 본인부담금을 확인하고, 등급 한도 및 감경 조건을 다시 한 번 확인해야
              합니다. 특히 한도 초과 시 발생하는 추가 부담금과 기관별 차이를 미리 점검하세요.
            </p>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 본인부담금 관련 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 본인부담금은 어떻게 계산되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                본인부담금은 선택한 이용시간의 수가에 본인부담률을 곱한 금액에, 월 한도액 초과분이 있으면 초과액을 더해 계산합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>감경 대상이면 얼마까지 줄어드나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                감경 대상이면 일반 15% 대신 9% 또는 6%와 같이 낮은 본인부담률이 적용될 수 있습니다. 실제 비율은 수급자 자격과 공단 기준에 따라 달라집니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>월 한도액을 초과하면 어떻게 되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                월 한도액을 초과한 금액은 전액 본인부담으로 계산됩니다. 초과분이 많을수록 본인부담금이 크게 증가하므로 주의가 필요합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 계산기로 정확히 알 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                계산기는 예상 금액을 제공합니다. 실제 본인부담금은 공단 고시, 기관 운영 기준, 감경 대상 여부에 따라 달라질 수 있으므로 장기요양기관이나 공단과 상담해 확인하는 것이 좋습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            계산 결과를 확인한 후 아래 링크를 확인하여 더 많은 방문요양 및 지원금 정보를 살펴보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/visit-care-guide" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 주요 내용을 확인하세요.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 본인부담금을 직접 계산해 보세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급과 이용 절차를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면과 지원금 정보를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
