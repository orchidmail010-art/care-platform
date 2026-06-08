import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function VisitCareCostPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">방문요양 실제 비용</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">방문요양 실제 비용 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 이용 시 실제 발생하는 비용과 감면 적용 사례를 쉽게 설명해 드립니다.
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
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 본인부담금</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 본인부담금은 공단 부담금을 제외한 나머지 금액으로 계산됩니다. 등급, 이용시간, 감면 여부에 따라 실제 부담 금액이 달라집니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감면 적용 사례</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                기초생활수급자, 차상위계층 등 감면 대상자는 본인부담률이 낮아져 실제 부담 금액이 줄어듭니다. 감면 적용 여부에 따라 동일한 서비스라도 부담액이 크게 달라질 수 있습니다.
              </p>
              <p>
                예를 들어 감면 대상자는 일반 본인부담률 기준과 비교해 월 비용을 절감할 수 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">월한도액 관계</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양은 등급별 월한도액 안에서 비용이 지원됩니다. 한도액을 초과하면 초과분은 추가 본인부담으로 이어질 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">초과 비용 설명</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              월한도액을 초과해서 방문요양을 이용하면 초과분은 전액 본인부담으로 처리됩니다. 따라서 한도 내에서 이용 시간을 계획하는 것이 중요합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 사례 예시</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                예를 들어 2등급 수급자가 60분형 서비스를 주 3회 이용하면, 본인부담금은 공단 지원액을 제외한 금액으로 계산됩니다. 감면 대상이라면 부담금이 더 줄어들 수 있습니다.
              </p>
              <p>
                실제 비용은 기관별 수가, 이용 횟수, 감면 대상 여부에 따라 다르게 발생합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 비용은 개인별 상황에 따라 달라집니다. 이용 전에는 한도액, 감면 적용 여부, 기관별 수가 기준을 꼭 확인하고 계산기를 활용하는 것이 좋습니다.
            </p>
          </article>
        </section>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 실제 비용과 관련된 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양은 하루 몇 시간까지 이용할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                수급자의 등급, 월 한도액, 이용 계획에 따라 달라집니다. 일반적으로 30분 단위로 이용 시간이 정해집니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>한도액을 초과하면 어떤 비용이 발생하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                월 한도액을 초과하면 초과분은 전액 본인부담으로 처리됩니다. 이용 계획을 한도 내에서 세우는 것이 중요합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>감면 대상자는 비용이 얼마나 줄어드나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                감면 대상자는 본인부담률이 낮아져 동일한 서비스 이용 시 부담 금액이 줄어듭니다. 실제 감면 폭은 개인별 자격에 따라 다릅니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 비용은 어떻게 확인하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                방문요양 계산기와 공단 안내를 통해 예상 비용을 확인할 수 있습니다. 실제 비용은 기관별 수가 기준과 이용 시간에 따라 달라질 수 있습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            실제 비용 정보를 확인한 뒤 아래 링크를 통해 관련 정보를 함께 살펴보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/visit-care-guide/copayment" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">본인부담금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 기준과 계산 방법을 확인하세요.</p>
            </Link>
            <Link href="/visit-care-guide/monthly-limit" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">월한도액 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">월한도액 기준과 한도 관리 방법을 확인하세요.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 이용 계획을 계산해 보세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지원금과 감면 정보를 함께 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
