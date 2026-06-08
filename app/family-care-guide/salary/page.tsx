import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function FamilyCareGuideSalaryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            가족요양 월급
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            가족요양 월급 기준 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 이용 시 받을 수 있는 급여 기준과 60분/90분 차이, 실제 이용 시 확인해야 할 내용을 쉽게 안내합니다.
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

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 월급이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 월급은 가족이 수급자에게 제공하는 요양 서비스에 대한 급여 기준을 의미합니다. 공단 기준에 따라 급여가 산정됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">60분 기준 급여</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              60분 기준은 가족요양에서 가장 일반적으로 적용되는 단위입니다. 60분형 급여는 기본 수가를 기준으로 계산되며, 월 이용 횟수에 따라 산정됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">90분 기준 급여</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              90분 기준은 60분형과 달리 별도 인정 조건을 충족할 때 적용됩니다. 일반적으로 60분형보다 높은 단가가 적용됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 지급 방식</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 지급 방식은 공단 고시 수가와 가족요양 인정 조건에 따라 다릅니다. 급여는 기관과 공단의 심사를 거쳐 지급됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">본인부담금과의 관계</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 급여는 본인부담금과 공단 부담금으로 구성됩니다. 본인부담률에 따라 실제 수령 금액이 달라질 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용 전 확인해야 할 점</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              이용 전에는 60분/90분 기준, 본인부담률, 등급 한도, 가족관계 등을 확인해야 합니다. 미리 상담을 받아 필요한 항목을 점검하세요.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 급여 차이가 발생하는 이유</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 급여는 공단 고시 수가, 요양등급, 서비스 제공 조건, 감면 여부 등에 따라 달라질 수 있습니다. 계산기 결과는 참고용으로 활용하세요.
            </p>
          </article>
        </section>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 월급과 관련된 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 월급은 얼마 정도인가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                급여는 등급과 이용시간, 감면 여부에 따라 달라집니다. 계산기나 기관 상담을 통해 보다 정확한 예상 금액을 확인하세요.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>60분과 90분 급여 차이는 큰가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                90분형은 60분형보다 단가가 높아 급여 차이가 발생할 수 있습니다. 다만 실제 차이는 인정 조건과 서비스 내용에 따라 달라집니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족에게 직접 지급되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                급여 지급 방식은 기관과 공단의 절차에 따라 다릅니다. 일반적으로 장기요양 기관을 통해 급여가 정산되며, 가족에게 직접 지급되는 구조는 아닐 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>본인부담금도 함께 계산해야 하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 본인부담금은 급여 계산의 중요한 요소입니다. 가족요양 급여를 확인할 때 본인부담금과 공단 부담금을 함께 고려해야 합니다.
              </p>
            </details>
          </div>
        </section>

      <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 월급 정보를 확인한 후 아래 링크를 통해 60분, 90분, 조건, 계산기 정보를 함께 확인하세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/family-care-guide/60min" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 60분 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">60분형 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide/90min" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 90분 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">90분형 인정 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide/conditions" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 조건</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 조건을 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여를 계산해 보세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
