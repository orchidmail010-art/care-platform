import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function VisitCareMonthlyLimitPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">방문요양 월한도액</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">방문요양 월한도액 기준 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 이용 시 적용되는 월한도액 기준과 등급별 차이, 한도 초과 시 주의사항을 쉽게 안내합니다.
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

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">월한도액이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              월한도액은 장기요양급여가 월별로 지원되는 최대 한도를 말합니다. 방문요양은 등급별로 정해진 한도액 내에서 급여가 산정되고,
              한도를 초과하면 추가 비용이 발생할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장기요양등급별 차이</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 등급이 높을수록 월한도액이 커지며, 1~5등급과 인지지원등급에 따라 지원 가능한 급여 범위가 달라집니다.
              등급과 상태에 맞는 이용 계획을 세우는 것이 중요합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">월한도액 계산 방식</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                월한도액은 해당 등급의 급여 한도를 기준으로 산정되며, 이용시간별 수가와 횟수를 합산하여 소진됩니다.
              </p>
              <p>
                예를 들어 60분형 서비스를 여러 번 이용하면 각 회차 수가가 누적되어 한도액 소진에 영향을 미칩니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">한도 초과 시 발생하는 비용</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              월한도액을 초과하면 초과분은 본인부담으로 처리되며, 추가 비용이 발생할 수 있습니다. 따라서 한도 내 이용 계획을 잘 세우는 것이 필요합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">본인부담금과의 관계</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                본인부담금은 급여 총액 중 공단이 부담하는 금액을 제외한 나머지로 산정됩니다. 한도액을 초과하면 초과분에 대한
                본인부담금이 추가로 생길 수 있습니다.
              </p>
              <p>
                감경 대상자는 본인부담률이 낮아질 수 있지만, 한도 초과 여부에 따라서도 실제 부담 금액이 달라질 수 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 사례</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 이용자는 등급별 한도액을 고려해 주당 이용시간과 횟수를 조정합니다. 한도를 초과해 이용하면 예상치 못한 본인부담금이
              발생할 수 있으므로, 서비스 계획을 사전에 상담하는 것이 좋습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 전 확인해야 할 점</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                현재 장기요양 등급과 달성 가능한 월한도액, 선택하려는 이용시간과 횟수를 미리 확인하세요.
              </p>
              <p>
                계산기 활용과 더불어 장기요양기관 또는 공단과 상담하여 최신 한도 기준과 급여 적용 범위를 확인하는 것이 중요합니다.
              </p>
            </div>
          </article>
        </section>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 월한도액과 관련된 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>월한도액은 등급마다 다른가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네, 월한도액은 장기요양등급에 따라 다릅니다. 등급이 높을수록 더 많은 급여 한도가 적용되며, 이용 가능한 서비스 범위도 달라집니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>한도를 초과하면 어떻게 되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                한도를 초과하면 초과분은 본인부담으로 계산됩니다. 이 경우 본인부담금이 증가할 수 있으므로, 이용 전 한도 내 계획을 세우는 것이 중요합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 계산기로 확인 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                계산기는 예상 급여와 한도 소진 상황을 미리 확인하는 데 도움을 줍니다. 다만 실제 비용은 공단 고시와 기관 운영 기준에 따라 달라질 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>본인부담금도 함께 증가하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네, 한도를 초과하면 초과분에 대해 본인부담금이 추가로 발생할 수 있습니다. 한도 안에서 이용할 때보다 부담이 커질 수 있으니 주의가 필요합니다.
              </p>
            </details>
          </div>
        </section>

      <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            월한도액 기준을 확인한 뒤 아래 링크를 통해 방문요양 관련 다른 정보도 함께 확인해 보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/visit-care-guide/copayment" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 본인부담금</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 기준과 계산 방법을 확인하세요.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 예산을 직접 계산해 보세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지원금과 감면 정보를 함께 확인하세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급과 이용 절차를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
